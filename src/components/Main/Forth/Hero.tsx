// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Scrollbar } from 'swiper/modules'
import type { SwiperRef } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

import { useRef } from 'react'
import { useMount } from 'ahooks'

export default () => {
  const swiperRef = useRef<SwiperRef>(null)
  useMount(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.scrollbar.updateSize()
    }
  })
  return (
    <>
      <div className="overflow-hidden md:ml-[10px]">
        <Swiper
          ref={swiperRef}
          autoHeight={true}
          spaceBetween={20}
          freeMode={true}
          observer={true}
          // loop={true}
          observeParents={true}
          scrollbar={{
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: 24,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            1920: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 2,
              centeredSlides: true,
              centeredSlidesBounds: true,
            },
            0: {
              slidesPerView: 1.4,
              centeredSlides: true,
              centeredSlidesBounds: true,
            },
          }}
          modules={[FreeMode, Scrollbar]}
          className="mySwiper"
        >
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((v, k) => (
            <SwiperSlide key={k}>
              <div className="h-full">
                <img
                  src="https://themedox.com/mykd/wp-content/uploads/2023/10/project_05.jpg"
                  alt=""
                />
                {k}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
