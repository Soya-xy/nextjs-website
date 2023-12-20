'use client'

import './index.css'

import { AnimationText } from '~/components/ui/text/AnimationText'

import Hero from './Hero'

export const Forth = () => {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      textShadow: ['none', '#45f882 0px 0px 25px', 'none', 'none'],
    },
  }
  return (
    <div className="forth">
      <div className="relative w-full py-[130px]">
        <section className="md:mx-[180px] ">
          <div className="flex flex-col md:flex-row">
            <div className="!ml-[30px] w-[430px] flex-initial flex-shrink-0 text-start md:flex md:flex-col md:justify-center">
              <h2 className="text-[45px]">PROJECTS MYKD</h2>
              <AnimationText text="OUR LATEST GALLERY" />
              <div className="mt-3">
                <button className="rounded-md bg-[#45f882] px-7 py-3 text-start text-black hover:bg-[#C6923D] hover:text-white">
                  ADD TO
                </button>
              </div>
            </div>
            <Hero />
          </div>
        </section>
        <div className="swiper-scrollbar">
          <div className="swiper-scrollbar-drag" />
        </div>
      </div>
    </div>
  )
}
