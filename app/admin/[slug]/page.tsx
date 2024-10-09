'use client';

import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  const uuid = pathname.split('/')[2];

  return <p>yo {uuid}</p>;
}
