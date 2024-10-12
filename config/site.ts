export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'دکتر کلینیک',
  description: 'سایت آنلاین رزرو نوبت دکتر کلینیک',
  navItems: [
    {
      label: 'رزرو',
      href: '/admin',
    },
    {
      label: 'بلاگ',
      href: '/admin/blog',
    },
  ],
  navMenuItems: [
    {
      label: 'رزور',
      href: '/admin/',
    },
    {
      label: 'بلاگ',
      href: '/admin/blog',
    },
    {
      label: 'خروج از حساب مدیریت',
      href: '/admin/logout',
    },
  ],
  links: {
    github: 'https://github.com/jexroid',
    twitter: 'https://twitter.com/jexroid',
  },
};
