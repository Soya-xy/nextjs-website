'use client'

import { useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

export function Video() {
  const ref = useRef(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const [rotateX, setRotateX] = useState(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log(
      '🚀 ~ file: Video.tsx:23 ~ useMotionValueEvent ~ latest:',
      latest,
    )

    if (latest > 450) {
      return setRotateX(90)
    } else setRotateX(0)
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
          className={clsx(`absolute
          bottom-0 left-[50%] flex h-[50px]
            w-[90vw] origin-bottom flex-col items-center justify-center rounded-tl-xl rounded-tr-xl bg-black text-center`)}
          animate={{
            rotateX,
          }}
          style={{
            x: '-50%',
            ...(rotateX > 450 && { rotateX }),
          }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <p className="text-3xl">
            {rotateX}
            MYRLIE SLOTS LET PLAYERS ENJOY IT ENDLESSLY
          </p>
        </motion.div>
      </div>
    </>
  )
}
