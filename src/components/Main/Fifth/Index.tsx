'use client'

import bg from '~/assets/img/video_bg.jpg'

export const Fifth = () => {
  return (
    <>
      <section
        className="video__area video-bg tg-jarallax"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container mx-auto">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-8 col-md-11">
              <div className="video__content text-center">
                <div className="popup-video cursor-pointer">
                  <i className="flaticon-play" />
                </div>
                <h2 className="title">
                  JOIN THE <span>COMMUNITY</span>
                </h2>
                <p>Join our Discord community and choosec onsteur</p>
                <a href="#" target="_blank" className="video__btn tg-btn-1">
                  <span>join discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
