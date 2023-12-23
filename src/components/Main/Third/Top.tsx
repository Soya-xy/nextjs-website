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
        <AnimationText text="KNOW ABOUT US" />
        <p
          className="nft_site text-center text-[45px] font-bold tracking-[2px] md:text-start"
          style={
            {
              '--site-margin': 'auto',
            } as any
          }
        >
          TOP RATED STEAMERS
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

        <div className="w-full px-10  md:px-[150px]">
          <div className="nav-tabs relative w-full items-center">
            <div
              className="flex h-[120px] items-center justify-start gap-10 overflow-y-hidden overflow-x-scroll  md:justify-center "
              id="myTab"
              role="tablist"
            >
              {[1, 1, 1, 1, 1, 1].map((_v, k) => (
                <MusicButton
                  once
                  src="/music/tab.mp3"
                  className={`nav-link ${k === active ? 'active' : ''}`}
                  onClick={() => setActive(k)}
                  key={k}
                >
                  <div
                    className={`wealthgod relative ${
                      k === active && 'wealthgod-active'
                    }`}
                  >
                    <span
                      className={`semicircle absolute left-[4px] top-[2px] h-[90px] w-[90px] ${
                        k === active && 'semicircle-active'
                      }`}
                    />

                    <Image
                      decoding="async"
                      className="relative z-[2]"
                      src="/images/wealthgod.png"
                      alt="Image"
                      fill
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
