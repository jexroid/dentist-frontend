'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { ApolloProvider } from '@apollo/client';
import { SuperTokensWrapper } from 'supertokens-auth-react';
import SuperTokensReact from 'supertokens-auth-react';
import { usePathname } from 'next/navigation';

import { frontendConfig, setRouter } from '../config/token/frontend';

import client from '@/config/graphql';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <ApolloProvider client={client}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </ApolloProvider>
    </NextUIProvider>
  );
}

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}

export const SuperTokensProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  setRouter(useRouter(), usePathname() || window.location.pathname);

  return <SuperTokensWrapper>{children}</SuperTokensWrapper>;
};
