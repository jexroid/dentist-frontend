export default function BlogPage() {
  return (
    <div>
      <div
        className='page-title dark-background'
        data-aos='fade'
        style={{
          backgroundImage: 'url(assets/img/blog-page-title-bg.jpg)',
        }}
      >
        <div className='container'>
          <h1>بلاگ</h1>
          <nav className='breadcrumbs'>
            <ol>
              <li>
                <a href='/index.html'>خانه</a>
              </li>
              <li className='../Nova/blog.html'>بلاگ</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <section className='blog-posts section' id='blog-posts'>
              <div className='container'>
                <div className='row gy-4'>
                  <div className='col-lg-6'>
                    <article>
                      <div className='post-img'>
                        <img alt='' className='img-fluid' src='/img/blog/blog-1.jpg' />
                      </div>
                      <p className='post-category'>ارتودنسی داندان</p>
                      <h2 className='title'>
                        <a href='blog-details.html'>چه زمانی دندان های خود را ارتودنسی کنیم؟</a>
                      </h2>
                      <div className='d-flex align-items-center'>
                        <img
                          alt=''
                          className='img-fluid post-author-img flex-shrink-0'
                          src='/img/blog/blog-author.jpg'
                        />
                        <div className='post-meta'>
                          <p className='post-author'>ماریا دو</p>
                          <p className='post-date'>
                            <time dateTime='2022-01-01'>1 ژانویه 2022</time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className='col-lg-6'>
                    <article>
                      <div className='post-img'>
                        <img alt='' className='img-fluid' src='/img/blog/blog-2.jpg' />
                      </div>
                      <p className='post-category'>کامپوزت</p>
                      <h2 className='title'>
                        <a href='blog-details.html'>بهترین مارک های کامپوزت چیست؟</a>
                      </h2>
                      <div className='d-flex align-items-center'>
                        <img
                          alt=''
                          className='img-fluid post-author-img flex-shrink-0'
                          src='/img/blog/blog-author-2.jpg'
                        />
                        <div className='post-meta'>
                          <p className='post-author'>آلیسا مایر</p>
                          <p className='post-date'>
                            <time dateTime='2022-01-01'>5 ژوئن 2022</time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className='col-lg-6'>
                    <article>
                      <div className='post-img'>
                        <img alt='' className='img-fluid' src='/img/blog/blog-3.jpg' />
                      </div>
                      <p className='post-category'>لمینت</p>
                      <h2 className='title'>
                        <a href='blog-details.html'>لمینت بهتر است یا کامپوزت؟</a>
                      </h2>
                      <div className='d-flex align-items-center'>
                        <img
                          alt=''
                          className='img-fluid post-author-img flex-shrink-0'
                          src='/img/blog/blog-author-3.jpg'
                        />
                        <div className='post-meta'>
                          <p className='post-author'>مارک داور</p>
                          <p className='post-date'>
                            <time dateTime='2022-01-01'>22 ژوئن 2022</time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className='col-lg-6'>
                    <article>
                      <div className='post-img'>
                        <img alt='' className='img-fluid' src='/img/blog/blog-4.jpg' />
                      </div>
                      <p className='post-category'>کشیدن دندان</p>
                      <h2 className='title'>
                        <a href='blog-details.html'>کشیدن دندان در چند دقیقه</a>
                      </h2>
                      <div className='d-flex align-items-center'>
                        <img
                          alt=''
                          className='img-fluid post-author-img flex-shrink-0'
                          src='/img/blog/blog-author-4.jpg'
                        />
                        <div className='post-meta'>
                          <p className='post-author'>لیزا نیمار</p>
                          <p className='post-date'>
                            <time dateTime='2022-01-01'>30 ژوئن 2022</time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className='col-lg-6'>
                    <article>
                      <div className='post-img'>
                        <img alt='' className='img-fluid' src='/img/blog/blog-5.jpg' />
                      </div>
                      <p className='post-category'>روکش دندان</p>
                      <h2 className='title'>
                        <a href='blog-details.html'>مناسب ترن روکش دندان متناسب باهر شخص</a>
                      </h2>
                      <div className='d-flex align-items-center'>
                        <img
                          alt=''
                          className='img-fluid post-author-img flex-shrink-0'
                          src='/img/blog/blog-author-5.jpg'
                        />
                        <div className='post-meta'>
                          <p className='post-author'>دنیس پترسون</p>
                          <p className='post-date'>
                            <time dateTime='2022-01-01'>30 ژانویه 2022</time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className='col-lg-6'>
                    <article>
                      <div className='post-img'>
                        <img alt='' className='img-fluid' src='/img/blog/blog-6.jpg' />
                      </div>
                      <p className='post-category'>معاینه دندان</p>
                      <h2 className='title'>
                        <a href='blog-details.html'>بهترین روش های معاینه دندان چیست؟</a>
                      </h2>
                      <div className='d-flex align-items-center'>
                        <img
                          alt=''
                          className='img-fluid post-author-img flex-shrink-0'
                          src='/img/blog/blog-author-6.jpg'
                        />
                        <div className='post-meta'>
                          <p className='post-author'>میکا لاندون</p>
                          <p className='post-date'>
                            <time dateTime='2022-01-01'>14 فوریه 2022</time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
            <section className='blog-pagination section' id='blog-pagination'>
              <div className='container'>
                <div className='d-flex justify-content-center'>
                  <ul>
                    <li>
                      <a href='/blog'>
                        <i className='bi bi-chevron-left' />
                      </a>
                    </li>
                    <li>
                      <a href='/blog'>1</a>
                    </li>
                    <li>
                      <a className='active' href='/blog'>
                        2
                      </a>
                    </li>
                    <li>
                      <a href='/blog'>3</a>
                    </li>
                    <li>
                      <a href='/blog'>4</a>
                    </li>
                    <li>...</li>
                    <li>
                      <a href='/blog'>10</a>
                    </li>
                    <li>
                      <a href='/blog'>
                        <i className='bi bi-chevron-right' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className='col-lg-4 sidebar'>
            <div className='widgets-container'>
              <div className='search-widget widget-item'>
                <h3 className='widget-title'>سرچ</h3>
                <form action=''>
                  <input type='text' />
                  <button title='Search' type='submit'>
                    <i className='bi bi-search' />
                  </button>
                </form>
              </div>
              <div className='categories-widget widget-item'>
                <h3 className='widget-title'>دسته بندی ها</h3>
                <ul className='mt-3'>
                  <li>
                    <a href='/blog'>
                      معاینه داندان <span>(25)</span>
                    </a>
                  </li>
                  <li>
                    <a href='/blog'>
                      کامپوزت
                      <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href='/blog'>
                      لمینت <span>(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href='/blog'>
                      ارتودنسی <span>(22)</span>
                    </a>
                  </li>
                  <li>
                    <a href='/blog'>
                      کشیدن دندان <span>(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href='/blog'>
                      روکش دندان <span>(14)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='recent-posts-widget widget-item'>
                <h3 className='widget-title'>پستهای اخیر</h3>
                <div className='post-item'>
                  <img alt='' className='flex-shrink-0' src='/img/blog/blog-recent-1.jpg' />
                  <div>
                    <h4>
                      <a href='blog-details.html'>روش های خانگی مراقبت از دندان</a>
                    </h4>
                    <time dateTime='2020-01-01'>1 ژانویه 2020</time>
                  </div>
                </div>
                <div className='post-item'>
                  <img alt='' className='flex-shrink-0' src='/img/blog/blog-recent-2.jpg' />
                  <div>
                    <h4>
                      <a href='blog-details.html'>بهترین لمینت</a>
                    </h4>
                    <time dateTime='2020-01-01'>1 ژانویه 2020</time>
                  </div>
                </div>
                <div className='post-item'>
                  <img alt='' className='flex-shrink-0' src='/img/blog/blog-recent-3.jpg' />
                  <div>
                    <h4>
                      <a href='blog-details.html'>بهترین کامپوزت</a>
                    </h4>
                    <time dateTime='2020-01-01'>1 ژانویه 2020</time>
                  </div>
                </div>
                <div className='post-item'>
                  <img alt='' className='flex-shrink-0' src='/im/blog/blog-recent-4.jpg' />
                  <div>
                    <h4>
                      <a href='blog-details.html'>بهترین زمان ارتودنسی دندان</a>
                    </h4>
                    <time dateTime='2020-01-01'>1 ژانویه 2020</time>
                  </div>
                </div>
                <div className='post-item'>
                  <img alt='' className='flex-shrink-0' src='/img/blog/blog-recent-5.jpg' />
                  <div>
                    <h4>
                      <a href='blog-details.html'>ابزار های بروز وتکنولوژی های بروز برای کشیدن دندان</a>
                    </h4>
                    <time dateTime='2020-01-01'>1 ژانویه 2020</time>
                  </div>
                </div>
              </div>
              <div className='tags-widget widget-item'>
                <h3 className='widget-title'>برچسب ها</h3>
                <ul>
                  <li>
                    <a href='/blog'>لمینت</a>
                  </li>
                  <li>
                    <a href='/blog'>معاینه دندان</a>
                  </li>
                  <li>
                    <a href='/blog'>کشیدن دندان</a>
                  </li>
                  <li>
                    <a href='/blog'>کامپوزت</a>
                  </li>
                  <li>
                    <a href='/blog'>ارتودنسی</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
