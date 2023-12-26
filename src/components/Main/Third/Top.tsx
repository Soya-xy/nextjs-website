'use client'

import { atom, useAtom } from 'jotai'
import Image from 'next/image'

import { MusicButton } from '~/components/common/MusicButton'
import { AnimationText } from '~/components/ui/text/AnimationText'

export const tabActive = atom(0)

export const Top = () => {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      textShadow: ['none', '#45f882 0px 0px 25px', 'none', 'none'],
    },
  }

  const [active, setActive] = useAtom(tabActive)

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
          NEW GAMES RELEASE
        </p>
        {/* 
        <div className="my-10 flex gap-10">
          <MusicButton once className="svg_btn">
            <svg preserveAspectRatio="none" viewBox="0 0 167 53" fill="none">
              <path d="M166 1H1V52H166V1Z" strokeWidth={2} />
              <path d="M166 22L161 27L166 33" strokeWidth={2} />
              <path d="M166 14L154 28L166 40" strokeWidth={2} />
              <path d="M8 1V21" strokeWidth={2} />
              <path d="M159 1V22" strokeWidth={2} />
              <path d="M159 33V52" strokeWidth={2} />
              <path d="M8 34V52" strokeWidth={2} />
              <path d="M1 22L8 27L1 33" strokeWidth={2} />
              <path d="M1 14L15 28L1 40" strokeWidth={2} />
            </svg>
            BUY HERO
          </MusicButton>
          <MusicButton once className="svg_btn hover:!bg-[#FFBE18]">
            <svg
              preserveAspectRatio="none"
              style={{ '--path-strokes': '#FFBE18' } as any}
              viewBox="0 0 167 53"
              fill="none"
            >
              <path d="M166 1H1V52H166V1Z" strokeWidth={2} />
              <path d="M166 22L161 27L166 33" strokeWidth={2} />
              <path d="M166 14L154 28L166 40" strokeWidth={2} />
              <path d="M8 1V21" strokeWidth={2} />
              <path d="M159 1V22" strokeWidth={2} />
              <path d="M159 33V52" strokeWidth={2} />
              <path d="M8 34V52" strokeWidth={2} />
              <path d="M1 22L8 27L1 33" strokeWidth={2} />
              <path d="M1 14L15 28L1 40" strokeWidth={2} />
            </svg>
            BUY NFTS
          </MusicButton>
        </div> */}

        <div className="w-full">
          <div className="nav-tabs w-full">
            <div className="flex items-center justify-start gap-5 overflow-y-hidden overflow-x-scroll pl-[20px]  wh-full md:justify-center">
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
          </div>
        </div>
      </div>
    </>
  )
}
