import Script from 'next/script';


import GeneralLayout from './GeneralLayout';

import { images } from '@/lib/images';
import Slider from '@/components/ui/Swiper';

export default function Home() {
  return (
    <div>
      <GeneralLayout>
        <section className='hero section dark-background ' id='hero'>
          <img alt='تصویر بنر تبلیغاتی' data-aos='fade-in' src='./img/BANER.webp' />
          <div className='container'>
            <div className='row'>
              <div className='col-xl-4 d-flex flex-column justify-content-center'>
                <h1 data-aos='fade-up'>برای دندان هایتان ارزش بگذارید</h1>
                <figure>
                  <blockquote data-aos='fade-up' data-aos-delay={100}>
                    <p>متن پیش فرض و ساختگی از قبل آماده شده</p>
                  </blockquote>
                </figure>
                <div className='d-flex mt-3' data-aos='fade-up' data-aos-delay={200}>
                  <a className='btn-get-started' href='#about'>
                    شروع کنید
                  </a>
                  <a
                    className='glightbox btn-watch-video d-flex align-items-center ml-3'
                    href='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                  >
                    <i className='bi bi-play-circle' />
                    <span>دیدن ویدیو</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* Why Us Section */}
        <section className='why-us section' id='why-us'>
          <div className='container'>
            <Slider />
          </div>
        </section>
        {/* /Why Us Section */}
        {/* Services Section */}
        <section className='services section' id='services'>
          {/* Section Title */}
          <div className='container section-title' data-aos='fade-up'>
            <h2 className='text-center'>خدمات ما</h2>
          </div>
          {/* End Section Title */}
          <div className='container'>
            <div className='row gy-4'>
              <div className='col-lg-4 col-md-6 service-item d-flex' data-aos='fade-up' data-aos-delay={100}>
                <div className='icon flex-shrink-0'>
                  <i className='bi bi-briefcase' style={{ color: '#f57813' }} />
                </div>
                <div>
                  <h4 className='title'>متن پیش فرض</h4>
                  <p className='description'>
                    لذت افراد تباه شده و فاسد، دردها و مشکلاتی را که در شرف شهوت کور شده اند پیش بینی نمی کند.
                  </p>
                  <a className='readmore stretched-link' href='/'>
                    <span>بیشتر بدانید</span>
                    <i className='bi bi-arrow-right' />
                  </a>
                </div>
              </div>
              {/* 
              vice Item */}
              <div className='col-lg-4 col-md-6 service-item d-flex' data-aos='fade-up' data-aos-delay={200}>
                <div className='icon flex-shrink-0'>
                  <i className='bi bi-card-checklist' style={{ color: '#15a04a' }} />
                </div>
                <div>
                  <h4 className='title'>سیستم درد</h4>
                  <p className='description'>
                    متاسفم، هیچ کس نباید هیچ نوع کاری را امتحان کند، مگر اینکه از آن سودی به دست آورد
                  </p>
                  <a className='readmore stretched-link' href='/'>
                    <span>بیشتر بدانید</span>
                    <i className='bi bi-arrow-right' />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div className='col-lg-4 col-md-6 service-item d-flex' data-aos='fade-up' data-aos-delay={300}>
                <div className='icon flex-shrink-0'>
                  <i className='bi bi-bar-chart' style={{ color: '#d90769' }} />
                </div>
                <div>
                  <h4 className='title'>اما همانطور که مشاهده می کنید</h4>
                  <p className='description'>
                    در توبیخ در لذتی که می خواهد مویی از درد باشد غضب نکن به امید اینکه پرورشی نباشد.
                  </p>
                  <a className='readmore stretched-link' href='/'>
                    <span>بیشتر بدانید</span>
                    <i className='bi bi-arrow-right' />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div className='col-lg-4 col-md-6 service-item d-flex' data-aos='fade-up' data-aos-delay={400}>
                <div className='icon flex-shrink-0'>
                  <i className='bi bi-binoculars' style={{ color: '#15bfbc' }} />
                </div>
                <div>
                  <h4 className='title'>دردهای بزرگ</h4>
                  <p className='description'>
                    تا شهوت کور نشوند بیرون نمی آیند مقصرند که واجبات را رها می کنند روح نرم می شود یعنی زحمت.
                  </p>
                  <a className='readmore stretched-link' href='/'>
                    <span>بیشتر بدانید</span>
                    <i className='bi bi-arrow-right' />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div className='col-lg-4 col-md-6 service-item d-flex' data-aos='fade-up' data-aos-delay={500}>
                <div className='icon flex-shrink-0'>
                  <i className='bi bi-brightness-high' style={{ color: '#f5cf13' }} />
                </div>
                <div>
                  <h4 className='title'>هیچکس</h4>
                  <p className='description'>
                    اما در حقیقت، ما هر دو کسانی را متهم می کنیم که شایسته نفرت عادلانه هستند، کسانی که با تملق لذت های
                    کنونی نرم شده اند.
                  </p>
                  <a className='readmore stretched-link' href='/'>
                    <span>بیشتر بدانید</span>
                    <i className='bi bi-arrow-right' />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div className='col-lg-4 col-md-6 service-item d-flex' data-aos='fade-up' data-aos-delay={600}>
                <div className='icon flex-shrink-0'>
                  <i className='bi bi-calendar4-week' style={{ color: '#1335f5' }} />
                </div>
                <div>
                  <h4 className='title'>همان زمان</h4>
                  <p className='description'>
                    و به راستی که تفکیک این چیزها آسان و مصلحت است. برای اوقات فراغت، زمانی که انتخاب برای ما آزاد است
                  </p>
                  <a className='readmore stretched-link' href='/'>
                    <span>بیشتر بدانید</span>
                    <i className='bi bi-arrow-right' />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}
        {/* Call To Action Section */}
        <section className='call-to-action section dark-background ' id='call-to-action'>
          <img alt='' src='./img/ترسناک1.webp' />
          <div className='container'>
            <div className='row justify-content-center' data-aos='zoom-in' data-aos-delay={100}>
              <div className='col-xl-10'>
                <div className='text-center'>
                  <h3 className='text-center'>هم اکنون رزرو کنید</h3>
                  <p>
                    جهت استفاده از خدمات کلینیک (معاینه دندان, کامپوزت, پر کردن دندان , عصب کشی, لمینت,کشیدن دندان )رزرو
                    کنید تا بتوانیم در بهترین زمان بهترین خدمات را برای دندان های شما فراهم کنیم
                  </p>
                  <a className='cta-btn' href='/'>
                    رزرو
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /فراخوانی برای اقدام Section */}
        {/* Features Section */}
        <section className='features section' id='features'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7' data-aos='fade-up' data-aos-delay={100}>
                <h3 className='mb-0'>ویژگی های قدرتمند برای</h3>
                <h3>شغلت</h3>
                <div className='row gy-4'>
                  <div className='col-md-6'>
                    <div className='icon-list d-flex'>
                      <i className='bi bi-eye' style={{ color: '#ff8b2c' }} />
                      <span>ویژگی های Easy Cart</span>
                    </div>
                  </div>
                  {/* End Icon List Item*/}
                  <div className='col-md-6'>
                    <div className='icon-list d-flex'>
                      <i className='bi bi-infinity' style={{ color: '#5578ff' }} />
                      <span>پس از آن باید چربی سوزی انجام شود</span>
                    </div>
                  </div>
                  {/* End Icon List Item*/}
                  <div className='col-md-6'>
                    <div className='icon-list d-flex'>
                      <i className='bi bi-mortarboard' style={{ color: '#e80368' }} />
                      <span>من خود موضوع را توضیح خواهم داد</span>
                    </div>
                  </div>
                  {/* End Icon List Item*/}
                  <div className='col-md-6'>
                    <div className='icon-list d-flex'>
                      <i className='bi bi-star' style={{ color: '#ffa76e' }} />
                      <span>ویژگی های Easy Cart</span>
                    </div>
                  </div>
                  {/* End Icon List Item*/}
                  <div className='col-md-6'>
                    <div className='icon-list d-flex'>
                      <i className='bi bi-x-diamond' style={{ color: '#11dbcf' }} />
                      <span>ویژگی های Easy Cart</span>
                    </div>
                  </div>
                  {/* End Icon List Item*/}
                  <div className='col-md-6'>
                    <div className='icon-list d-flex'>
                      <i className='bi bi-camera-video' style={{ color: '#4233ff' }} />
                      <span>پس از آن باید چربی سوزی انجام شود</span>
                    </div>
                  </div>
                  {/* End Icon List Item*/}
                  <div className='col-md-6'>
                    <div className='icon-list d-flex'>
                      <i className='bi bi-brightness-high' style={{ color: '#29cc61' }} />
                      <span>من خود موضوع را توضیح خواهم داد</span>
                    </div>
                  </div>
                  {/* End Icon List Item*/}
                  <div className='col-md-6'>
                    <div className='icon-list d-flex'>
                      <i className='bi bi-activity' style={{ color: '#ff5828' }} />
                      <span>ویژگی های Easy Cart</span>
                    </div>
                  </div>
                  {/* End Icon List Item*/}
                </div>
              </div>
              <div className='col-lg-5 position-relative' data-aos='zoom-out' data-aos-delay={200}>
                <div className='phone-wrap'>
                  <img alt='iphone' className='img-fluid' src='img/mobailphone.jpg' />
                </div>
              </div>
            </div>
          </div>
          <div className='details'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6' data-aos='fade-up' data-aos-delay={300}>
                  <h4>
                    کار Sdio Lydus
                    <br />
                    ناروتو در اوبون
                  </h4>
                  <p>متن پیش فرض وساختگی</p>
                  <a className='btn-get-started' href='#about'>
                    شروع کنید
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Features Section */}
          {/* Features Section */}
        </section>
        {/* /Features Section */}
        {/* Recent Posts Section */}
        <section className='recent-posts section' id='recent-posts'>
          {/* Section Title */}
          <div className='container section-title' data-aos='fade-up'>
            <h2>پست های اخیر وبلاگ</h2>
          </div>
          {/* End Section Title */}
          <div className='container'>
            <div className='row gy-5'>
              {/* Post 1 */}
              <div className='col-xl-3 col-md-6' data-aos='fade-up' data-aos-delay={200}>
                <div className='post-box'>
                  <div className='post-img'>
                    <img alt='' className='img-fluid' src='img/blog/blog-1.jpg' />
                  </div>
                  <div className='post-content'>
                    <div className='meta'>
                      <span className='post-date'>سه شنبه 12 دسامبر</span>
                      <span className='post-author'> / جولیا پارکر</span>
                    </div>
                    <h3 className='post-title'>و او را رنج بدهم اما او یا باید از بدهی هایش فرار کند</h3>
                    <p>
                      برای لذت او راضی است. زیرا هیچ تمایلی برای دریافت شدن وجود ندارد. یا همه مداحان. وظایف او از او
                      شدیدتر است. راه های مهم ...
                    </p>
                    <a className='readmore stretched-link' href='blog-details.html'>
                      <span>بخوانید</span>
                      <i className='bi bi-arrow-right' />
                    </a>
                  </div>
                </div>
              </div>
              {/* Post 2 */}
              <div className='col-xl-3 col-md-6' data-aos='fade-up' data-aos-delay={400}>
                <div className='post-box'>
                  <div className='post-img'>
                    <img alt='' className='img-fluid' src='img/blog/blog-2.jpg' />
                  </div>
                  <div className='post-content'>
                    <div className='meta'>
                      <span className='post-date'>جمعه، 05 سپتامبر</span>
                      <span className='post-author'> / ماریو داگلاس</span>
                    </div>
                    <h3 className='post-title'>و از دردسری که جز همه است دفع شود</h3>
                    <p>
                      هر آزاده هیچ لذتی نمی شناسد، زیرا روزگار چنین است. او متنفر است که باید توسط او فرض شود. هر کسی با
                      همه دردها...
                    </p>
                    <a className='readmore stretched-link' href='blog-details.html'>
                      <span>بخوانید</span>
                      <i className='bi bi-arrow-right' />
                    </a>
                  </div>
                </div>
              </div>
              {/* Post 3 */}
              <div className='col-xl-3 col-md-6' data-aos='fade-up' data-aos-delay={600}>
                <div className='post-box'>
                  <div className='post-img'>
                    <img alt='' className='img-fluid' src='img/blog/blog-3.jpg' />
                  </div>
                  <div className='post-content'>
                    <div className='meta'>
                      <span className='post-date'>سه شنبه 27 جولای</span>
                      <span className='post-author'> / لیزا هانتر</span>
                    </div>
                    <h3 className='post-title'>زیرا حقیقت را باید فرض کرد</h3>
                    <p>
                      زیرا هر کس که برای او توضیح دهم، او و امثال آن را سخت طلب خواهد کرد. چه کسی همه را دفع می کند اما
                      چه چیزی بزرگ را به دنبال خواهد داشت...
                    </p>
                    <a className='readmore stretched-link' href='blog-details.html'>
                      <span>بخوانید</span>
                      <i className='bi bi-arrow-right' />
                    </a>
                  </div>
                </div>
              </div>
              {/* Post 4 */}
              <div className='col-xl-3 col-md-6' data-aos='fade-up' data-aos-delay={800}>
                <div className='post-box'>
                  <div className='post-img'>
                    <img alt='' className='img-fluid' src='img/blog/blog-4.jpg' />
                  </div>
                  <div className='post-content'>
                    <div className='meta'>
                      <span className='post-date'>سه شنبه 16 سپتامبر</span>
                      <span className='post-author'> / ماریو داگلاس</span>
                    </div>
                    <h3 className='post-title'>باید گفت آسان و شبیه به نرم ها هستند</h3>
                    <p>
                      و نتیجه حاصل خواهد شد، زیرا لذت راحتی همان چیزی است که از آن حاصل می شود. یا همه آنها به دلیل
                      انتخاب چه کسانی هستند ...
                    </p>
                    <a className='readmore stretched-link' href='blog-details.html'>
                      <span>بخوانید</span>
                      <i className='bi bi-arrow-right' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </GeneralLayout>
      <Script src='/js/main.js' />
    </div>
  );
}
