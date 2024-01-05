'use client'

import { motion } from 'framer-motion'

import { Chat } from '~/components/Main/Chat'
import { Second } from '~/components/Main/Second/Index'
// import { Sixth } from '~/components/Main/Sixth'
import { Video } from '~/components/Main/Video'

export default function Home() {
  return (
    <>
      <div className="w-[100vw] md:h-[calc(100vh-100px)]">
        <Video />
      </div>
      <Second />

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <Chat />
      </motion.div>
    </>
  )
}
