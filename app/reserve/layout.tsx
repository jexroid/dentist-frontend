import '@mantine/core/styles.css';

import Link from 'next/link';
import Script from 'next/script';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='header d-flex align-items-center fixed-top' id='header'>
        <div className='container-fluid container-xl position-relative d-flex align-items-center justify-content-between'>
          <a className='logo d-flex align-items-center' href='index.html'>
            <h1 className='sitename'>کلینیک</h1>
          </a>
          <nav className='navmenu' id='navmenu'>
            <ul>
              <li>
                <Link href='/'>
                  خانه
                  <br />
                </Link>
              </li>
              <li>
                <a href='../Nova/about.html'>درباه ما</a>
              </li>
              <li>
                <Link href='/reserve' className='active'>
                  رزرو
                </Link>
              </li>
              <li>
                <a href='../Nova/portfolio.html'>گالری کلینیک ما</a>
              </li>
              <li>
                <a href='../Nova/contact.html'>تماس باما</a>
              </li>
              <li>
                <Link href='/blog'>بلاگ</Link>
              </li>
              <li className='dropdown'>
                <a href='/'>
                  <span>انتخاب زبان </span>
                  <i className='bi bi-chevron-down toggle-dropdown' />
                </a>
                <ul>
                  <a href='/'>
                    <img alt='Persian' className='flag-icon' src='/img/iran.png' />
                    فارسی
                  </a>
                  <a href='/'>
                    <img alt='English' className='flag-icon' src='/img/england.png' />
                    انگلیسی
                  </a>
                </ul>
              </li>
            </ul>
            <i className='mobile-nav-toggle d-xl-none bi bi-list' />
          </nav>
        </div>
      </header>
      <link href='/vendor/bootstrap/css/bootstrap.min.css' rel='stylesheet' />
      <link href='/vendor/bootstrap-icons/bootstrap-icons.css' rel='stylesheet' />
      <link href='/vendor/aos/aos.css' rel='stylesheet' />
      <link href='/vendor/glightbox/css/glightbox.min.css' rel='stylesheet' />
      <link href='/vendor/swiper/swiper-bundle.min.css' rel='stylesheet' />
      <link href='https://unpkg.com/ionicons@5.5.2/dist/css/ionicons.min.css' rel='stylesheet' />
      <main className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        <div className='inline-block max-w-lg text-center justify-center'>{children}</div>
      </main>
      <footer className='footer-09'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-3 mb-md-0 mb-4'>
              <h2 className='footer-heading d-flex lign-items-center justify-content-center'>
                <span className='icon d-flex align-items-center justify-content-center'>
                  <i className='ion-logo-ionic' />
                </span>
                درباره ما
              </h2>
              <div className='block-23 mb-3'>
                <ul>
                  <li>
                    <span className='icon ion-ios-pin' />
                    <span className='text'>خیابان 203 جعلی، مونتین ویو، سان فرانسیسکو، کالیفرنیا، آمریکا</span>
                  </li>
                  <li>
                    <a href='tel:+23923929210'>
                      <span className='icon ion-ios-call' />
                      <span className='text'>+2 392 3929 210</span>
                    </a>
                  </li>
                  <li>
                    <a href='mailto:info@example.com'>
                      <span className='icon ion-ios-send' />
                      <span className='text'>info@example.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <form action='/' className='subscribe-form'>
                <div className='form-group d-flex'>
                  <input className='form-control rounded-left' placeholder='ارسال کنید' type='text' />
                  <button className='form-control submit rounded-right' type='submit'>
                    <span className='sr-only'>ایمیل را وارد کنید</span>
                    <i className='ion-ios-send' />
                  </button>
                </div>
              </form>
            </div>
            <div className='col-md-6 col-lg-3 mb-md-0 mb-4'>
              <h2 className='footer-heading d-flex lign-items-center justify-content-center'>
                <span className='icon d-flex align-items-center justify-content-center'>
                  <i className='ion-ios-list-box' />
                </span>
                آخرین اخبار
              </h2>
              <div className='block-21 mb-4 d-flex'>
                <a
                  className='img mr-4 rounded'
                  href='/'
                  style={{
                    backgroundImage: "url('/img/clinic1.jpeg')",
                  }}
                >
                  nop
                </a>
                <div className='text'>
                  <h3 className='heading'>
                    <a href='/'>حتی قدرت‌مندترین نشانه هم کنترل ندارد</a>
                  </h3>
                  <div className='meta'>
                    <div>
                      <a href='/'>
                        <span className='icon-calendar' /> 16 اکتبر 2019
                      </a>
                    </div>
                    <div>
                      <a href='/'>
                        <span className='icon-person' /> ادمین
                      </a>
                    </div>
                    <div>
                      <a href='/'>
                        <span className='icon-chat' /> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='block-21 mb-4 d-flex'>
                <a
                  className='img mr-8 rounded'
                  href='/'
                  style={{
                    backgroundImage: "url('/img/clinic2.jpeg')",
                  }}
                >
                  nothing
                </a>
                <div className='text'>
                  <h3 className='heading'>
                    <a href='/'>Even dfgrdgg the about</a>
                  </h3>
                  <div className='meta'>
                    <div>
                      <a href='/'>
                        <span className='icon-calendar' /> Oct. 16, 2019
                      </a>
                    </div>
                    <div>
                      <a href='/'>
                        <span className='icon-person' /> Admin
                      </a>
                    </div>
                    <div>
                      <a href='/'>
                        <span className='icon-chat' /> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 mb-md-0 mb-4'>
              <h2 className='footer-heading d-flex align-items-center justify-content-center'>
                <span className='icon d-flex align-items-center justify-content-center'>
                  <i className='ion-ios-document' />
                </span>
                اطلاعات
              </h2>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <ul className='list-unstyled'>
                  <li>
                    <a className='py-1 d-block' href='/'>
                      درباره ما
                    </a>
                  </li>
                  <li>
                    <a className='py-1 d-block' href='/'>
                      محصولات
                    </a>
                  </li>
                  <li>
                    <a className='py-1 d-block' href='/'>
                      وبلاگ
                    </a>
                  </li>
                  <li>
                    <a className='py-1 d-block' href='/'>
                      تماس با ما
                    </a>
                  </li>
                  <li>
                    <a className='py-1 d-block' href='/'>
                      راهنما و پشتیبانی
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 mb-md-0 mb-4'>
              <h2 className='footer-heading d-flex lign-items-center justify-content-center'>
                <span className='icon d-flex align-items-center justify-content-center'>
                  <i className='ion-logo-instagram' />
                </span>
                اینستاگرام
              </h2>
              <div className='block-24'>
                <div className='row no-gutters'>
                  <div className='col-4'>
                    <a href='/' target='_blank'>
                      <img alt='Instagram' className='img-fluid' src='/img/clinic2.jpeg' />
                    </a>
                  </div>
                  <div className='col-4'>
                    <a href='/' target='_blank'>
                      <img alt='Instagram' className='img-fluid' src='/img/clinic2.jpeg' />
                    </a>
                  </div>
                  <div className='col-4'>
                    <a href='/' target='_blank'>
                      <img alt='Instagram' className='img-fluid' src='/img/clinic2.jpeg' />
                    </a>
                  </div>
                  <div className='col-4'>
                    <a href='/' target='_blank'>
                      <img alt='Instagram' className='img-fluid' src='/img/clinic2.jpeg' />
                    </a>
                  </div>
                  <div className='col-4'>
                    <a href='/' target='_blank'>
                      <img alt='Instagram' className='img-fluid' src='/img/clinic2.jpeg' />
                    </a>
                  </div>
                  <div className='col-4'>
                    <a href='/' target='_blank'>
                      <img alt='Instagram' className='img-fluid' src='/img/clinic2.jpeg' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-5 pt-4 border-top'>
            <div className='col-md-6 col-lg-8'>
              <p className='copyright'>کپی رایت © {`${new Date().getFullYear()}`} تمامی حقوق محفوظ است.</p>
            </div>
            <div className='col-md-6 col-lg-4 text-center d-flex flex-column align-items-center'>
              <p className='copyright mb-0'>
                این سایت <i aria-hidden='true' className='ion-ios-heart' /> ساخته شده توسط
              </p>
              <a href='https://colorlib.com' target='blank'>
                مریم شادمان & امیررضا فرزان
              </a>
            </div>
          </div>
        </div>
      </footer>
      <a className='scroll-top d-flex align-items-center justify-content-center' href='/' id='scroll-top'>
        <i className='bi bi-arrow-up-short' />
      </a>
      <Script src='/vendor/bootstrap/js/bootstrap.bundle.min.js' />
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
