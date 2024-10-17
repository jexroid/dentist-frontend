import GeneralLayout from './GeneralLayout';

import Slider from '@/components/ui/Swiper';

export default function Home() {
  return (
    <div>
      <GeneralLayout>
        <section className='bg-gray-800 text-white h-screen flex items-center justify-center' id='hero'>
          <div className='container'>
            <div className='flex flex-col items-center'>
              <h1 className='text-5xl font-bold mb-4'>برای دندان هایتان ارزش بگذارید</h1>
              <figure className='mb-8'>
                <blockquote className='text-lg font-italic'>
                  <p>متن پیش فرض و ساختگی از قبل آماده شده</p>
                </blockquote>
              </figure>
              <div className='flex space-x-4'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  شروع کنید
                </button>
                <a
                  className='flex items-center text-white hover:underline'
                  href='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                >
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15 10l-4 2m0 0 l4 2m-4-2v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M5 10v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V10m-6 0v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V10M3 10v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                    />
                  </svg>
                  <span className='ml-2'>دیدن ویدیو</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className='bg-white flex justify-center items-center' id='why-us'>
          <div className='container flex py-3'>
            <Slider />
            <div className='flex' data-aos='fade-up'>
              <h3 className='text-2xl font-semibold mb-4'>ارتودنسی</h3>
              <p>هرچیزی که از دندان های خود انتظار دارید را به ما بسپپارید</p>
            </div>
          </div>
        </section>
        {/* /Why Us Section */}

        {/* Services Section */}
        <section className='bg-gray-100' id='services'>
          <div className='container'>
            <h2 className='text-center text-3xl font-bold mb-8'>خدمات ما</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Service Item 1 */}
              <div className='bg-white rounded-lg p-6 shadow-md'>
                <div className='flex items-center mb-4'>
                  <svg
                    className='h-6 w-6 text-blue-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15   
 10l-4 2m0 0 l4 2m-4-2v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M5 10v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V10m-6 0v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V10M3 10v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                    />
                  </svg>
                  <h3 className='ml-4 text-xl font-semibold'>متن پیش فرض</h3>
                </div>
                <p className='text-gray-700'>
                  لذت افراد تباه شده و فاسد، دردها و مشکلاتی را که در شرف شهوت کور شده اند پیش بینی نمی کند.
                </p>
                <a className='text-blue-500 hover:underline' href='/'>
                  بیشتر بدانید
                </a>
              </div>

              {/* Service Item 2 */}
              <div className='bg-white rounded-lg p-6 shadow-md'>
                <div className='flex items-center mb-4'>
                  <svg
                    className='h-6 w-6 text-green-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9   
 12l3 3m0 0 l3-3m-3 3v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V12zm6 3l1.5-1.5m0 0 L18 15m-1.5-1.5l-1.5 1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                    />
                  </svg>
                  <h3 className='ml-4 text-xl font-semibold'>سیستم درد</h3>
                </div>
                <p className='text-gray-700'>
                  متاسفم، هیچ کس نباید هیچ نوع کاری را امتحان کند، مگر اینکه از آن سودی به دست آورد
                </p>
                <a className='text-blue-500 hover:underline' href='/'>
                  بیشتر بدانید
                </a>
              </div>

              {/* ... other service items */}
            </div>
          </div>
        </section>
        {/* /Services Section */}

        {/* ... other sections */}
      </GeneralLayout>
    </div>
  );
}
