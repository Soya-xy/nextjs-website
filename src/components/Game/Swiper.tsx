import './index.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { useState } from 'react'
import { Autoplay } from 'swiper/modules'

export const SwiperTop = () => {
  const [active, setActive] = useState(0)
  return (
    <>
      <div className="swiper-container">
        <Swiper
          slidesPerView={1}
          onSlideChange={(e) => setActive(e.realIndex)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {[1, 2, 3, 4, 5, 6].map((v) => {
            return (
              <SwiperSlide key={v}>
                <div className="swiper-slides bg-[#462818]" />
                <div className="container mx-auto">
                  <img
                    src="https://www.pgsoft.com/uploads/Games/Images/f3db99ec-755a-4df0-a486-604f0628dd77.jpg"
                    alt=""
                    className="swiper-slides_img h-[576px] w-[100vw] border-0 outline-none"
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="slide-pag">
        <div className="pag-cover">
          <div className="pag-bg" />
          {[1, 2, 3, 4, 5, 6].map((v, k) => {
            return (
              <div className={`pagbox ${active === k ? 'active' : ''}`} key={v}>
                <img src="https://www.pgsoft.com/uploads/Games/Images/2e54b0dc-718b-47f2-9895-24b3808ed73b.png" />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
