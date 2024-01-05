'use client'

import { useRef } from 'react'
import { useMount } from 'ahooks'
import { atom, useAtom } from 'jotai'
import Image from 'next/image'

import { useIsMobile } from '~/atoms'
import { MusicButton } from '~/components/common/MusicButton'
import { AnimationText } from '~/components/ui/text/AnimationText'

export const tabActive = atom(0)

function Card() {
  const isMobile = useIsMobile()
  const divRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useAtom(tabActive)
  let timer: any = null
  let index = 0
  useMount(() => {
    startScroll()
  })

  function startScroll(countWidth = divRef.current?.scrollWidth) {
    if (!isMobile) return
    timer = setInterval(() => {
      index++
      if (divRef.current) {
        if (index >= countWidth! - 300) index = 0
        divRef.current.scrollLeft = index
      }
    }, 10)
  }

  return (
    <div
      ref={divRef}
      className="flex items-center justify-start gap-5 overflow-y-hidden overflow-x-scroll pl-[20px]  wh-full md:justify-center"
      onTouchMove={() => clearInterval(timer)}
      onTouchEnd={() => {
        index = divRef.current?.scrollLeft || 0
        startScroll()
      }}
    >
      {[
        'pic_caisheng',
        'pic_tanxian',
        'pic_laohu',
        'pic_majiang',
        'pic_puke',
        'pci_yaoqianshu',
      ].map((_v, k) => (
        <MusicButton
          once
          src="/music/tab.mp3"
          className={`${k === active ? 'active' : ''}`}
          onClick={() => setActive(k)}
          key={k}
        >
          <div
            className={`h-[137px] w-[191px] md:wh-full ${
              k === active
                ? 'wealthgod-active'
                : 'grayscale transition-all duration-75  hover:scale-[1.2] hover:grayscale-0'
            }`}
          >
            {/* <span
          className={`semicircle absolute left-[4px] top-[2px] h-[90px] w-[90px] ${
            k === active && 'semicircle-active'
          }`}
        /> */}

            <Image
              decoding="async"
              className="relative z-[2]"
              src={`/images/${_v}.png`}
              alt="Image"
              width={191}
              height={137}
            />
          </div>
        </MusicButton>
      ))}
    </div>
  )
}

export const Top = () => {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      textShadow: ['none', '#45f882 0px 0px 25px', 'none', 'none'],
    },
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <AnimationText text="The latest" />
        <p
          className="nft_site text-center text-[45px] font-bold tracking-[2px] md:text-start"
          style={
            {
              '--site-margin': 'auto',
            } as any
          }
        >
          <AnimationText text="NEW GAMES RELEASE" color="white" />
        </p>
        <div className="w-full">
          <div className="nav-tabs w-full">
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}
