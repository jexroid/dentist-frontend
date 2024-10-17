'use client';

import { useRouter } from 'next/navigation';

import { animatePageIn, animatePageOut } from '@/components/animation/animation';

export default function TransitionLink({ href, label }: { href: string; label: string }) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button className='z-90' onClick={handleClick}>
      <p>{label}</p>
    </button>
  );
}
