'use client'

import { motion } from 'framer-motion'
import { atom, useAtom } from 'jotai'
import Image from 'next/image'

import { MusicButton } from '~/components/common/MusicButton'

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
        <motion.p
          variants={item}
          initial="hidden"
          whileInView="show"
          transition={{ staggerChildren: 0.04 }}
          viewport={{ once: true }}
          className="tracking-[2px] text-[#45f882]"
        >
          {'KNOW ABOUT US'.split('').map((v, k) => {
            return (
              <motion.span variants={item} key={k}>
                {v}
              </motion.span>
            )
          })}
        </motion.p>
        <p
          className="nft_site text-[45px] font-bold tracking-[2px]"
          style={
            {
              '--site-margin': 'auto',
            } as any
          }
        >
          TOP RATED STEAMERS
        </p>

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
        </div>

        <div className="w-full  px-[150px]">
          <div className="nav-tabs relative w-full">
            <ul
              className="flex items-center justify-center gap-10"
              id="myTab"
              role="tablist"
            >
              {[1, 1, 1, 1, 1, 1].map((_v, k) => (
                <li className="nav-item" role="presentation" key={k}>
                  <MusicButton
                    once
                    src="/music/tab.mp3"
                    className={`nav-link ${k === active && 'active'}`}
                    onClick={() => setActive(k)}
                  >
                    <span className="img-shape" />
                    <Image
                      decoding="async"
                      src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab01.png"
                      width={77}
                      alt="Image"
                      height={77}
                    />
                  </MusicButton>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
