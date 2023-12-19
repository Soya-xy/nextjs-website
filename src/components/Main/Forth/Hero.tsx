// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

export default () => {
  return (
    <>
      <div className="overflow-hidden md:ml-[180px]">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          freeMode={true}
          observer={true}
          observeParents={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1920: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 3,
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
          loop={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((v, k) => (
            <SwiperSlide key={k}>
              <div>
                <img
                  src="https://themedox.com/mykd/wp-content/uploads/2023/10/project_05.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
