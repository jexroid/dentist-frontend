'use client';

import { useEffect } from 'react';

import { animatePageIn } from '@/components/animation/animation';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div className='w-screen h-screen bg-blue-500 z-100 fixed top-0 left-0' id='transition-element' />
      {children}
    </div>
  );
}
