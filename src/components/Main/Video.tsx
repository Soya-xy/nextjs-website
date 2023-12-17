'use client'

import { useRef } from 'react'
import clsx from 'clsx'
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'

export function Video() {
  const ref = useRef(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const rotateX = useMotionValue(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 450) {
      return rotateX.set(90)
    } else rotateX.set(latest / 5)
  })
  return (
    <>
      <div>
        <div className="absolute inset-0">
          <video className="h-full w-full object-cover" autoPlay muted loop>
            <source
              src="https://api.jdbgaming.com/assets/upload/images/banner/banner-c81e728d9d4c2f636f067f89cc14862c-video-desktop.mp4?a1c0077740c5177b3b3ef441"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.div
          className={clsx(`navbar absolute
          bottom-0 left-[50%] flex h-[100px]
            w-[80vw] origin-bottom flex-col items-center justify-center rounded-tl-full rounded-tr-full text-center`)}
          style={{
            x: '-50%',
            rotateX,
          }}
          ref={ref}
        >
          <p className="text-3xl">
            MYRLIE SLOTS LET PLAYERS ENJOY IT ENDLESSLY
          </p>
        </motion.div>
      </div>
    </>
  )
}
