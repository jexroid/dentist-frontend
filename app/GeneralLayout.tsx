import '@/styles/main.css';
import '@/styles/globals.css';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import TransitionLink from '@/components/TransitionLink';
import { Navbar } from '@/components/navbar';

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

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='fixed w-full' id=''>
        <Navbar />
      </header>

      <link href='/vendor/aos/aos.css' rel='stylesheet' />
      <link href='/vendor/glightbox/css/glightbox.min.css' rel='stylesheet' />
      <link href='/vendor/swiper/swiper-bundle.min.css' rel='stylesheet' />
      <link href='https://unpkg.com/ionicons@5.5.2/dist/css/ionicons.min.css' rel='stylesheet' />
      <main className='main'>{children}</main>
      <footer className='footer-09'>
        <div className='container'>
          <div className='row'>{/* Content */}</div>
        </div>
      </footer>
      <a className='scroll-top d-flex align-items-center justify-content-center' href='/' id='scroll-top'>
        <i className='bi bi-arrow-up-short' />
      </a>
      <Script src='/vendor/php-email-form/validate.js' />
      <Script src='/vendor/aos/aos.js' />
      <Script src='/vendor/swiper/swiper-bundle.min.js' />
      <Script src='/vendor/glightbox/js/glightbox.min.js' />
      <Script src='/vendor/imagesloaded/imagesloaded.pkgd.min.js' />
      <Script src='/vendor/isotope-layout/isotope.pkgd.min.js' />
      <Script src='/js/main.js' />
    </>
  );
}
