export const News = () => {
  return (
    <>
      <section className="world-news-area">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-8">
              <div className="hf-section-title mb-[40px] text-3xl">
                <h4 className="title">WORLD NEWS</h4>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="world-news-item mb-[30px]">
                    <div className="banner-magazine-thumb">
                      <div className="tags">
                        <a href="#">sports</a>
                      </div>
                      <img
                        src="https://themebeyond.com/html/geco/Geco/img/blog/world_news_thumb01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="banner-magazine-content">
                      <span className="date">December 19, 2021</span>
                      <h5 className="title">
                        <a href="#">50 Years After The Moon Landing NEL</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="world-news-item mb-[30px]">
                    <div className="banner-magazine-thumb">
                      <div className="tags">
                        <a href="#">sports</a>
                      </div>
                      <img
                        src="https://themebeyond.com/html/geco/Geco/img/blog/world_news_thumb02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="banner-magazine-content">
                      <span className="date">December 19, 2021</span>
                      <h5 className="title">
                        <a href="#">Twas the night before in the NFLL</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <aside className="home-sidebar-news">
                <div className="business-news-head mb-[45px]">
                  <div className="hf-section-title text-3xl">
                    <h4 className="title">Business</h4>
                  </div>
                </div>
                <div className="business-news-active slick-initialized slick-slider">
                  <div className="slick-list">
                    <div className="slick-track">
                      <div className="business-news-item slick-slide slick-cloned w-full">
                        <div className="business-news-post">
                          <img
                            src="https://themebeyond.com/html/geco/Geco/img/blog/business_blog02.jpg"
                            alt=""
                            className="w-full"
                          />
                        </div>
                        <div className="trending-news-item horizontal-item blue">
                          <div className="trend-news-thumb">
                            <img
                              src="https://themebeyond.com/html/geco/Geco/img/blog/trand_news_thumb02.jpg"
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="trend-news-content">
                            <div className="tags">
                              <a href="#">sports</a>
                            </div>
                            <span className="date">December 19, 2021</span>
                            <h4 className="title">
                              <a href="#">House last week that move would</a>
                            </h4>
                          </div>
                        </div>
                        <div className="trending-news-item horizontal-item">
                          <div className="trend-news-thumb">
                            <img
                              src="https://themebeyond.com/html/geco/Geco/img/blog/trand_news_thumb05.jpg"
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="trend-news-content">
                            <div className="tags">
                              <a href="#">game</a>
                            </div>
                            <span className="date">December 19, 2021</span>
                            <h4 className="title">
                              <a href="#">Twas the night before in the NFL</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
