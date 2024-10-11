import '@/styles/main.css';
import { Metadata } from 'next';
import clsx from 'clsx';
<<<<<<< HEAD

import { SuperTokensProvider } from './providers';
=======
>>>>>>> 7fafe6bf178f2467ee240f64bdad87c382f93e78

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='fa'>
      <head />
      <SuperTokensProvider>
        <body className={clsx('min-h-screen bg-background font-sans antialiased')}>
          <main className='main'>{children}</main>
        </body>
      </SuperTokensProvider>
    </html>
  );
}
