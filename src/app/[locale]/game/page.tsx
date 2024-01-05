'use client'

import { Games } from '~/components/Game/Games'
import { GameTop } from '~/components/Game/GameTop'
// import { motion } from 'framer-motion'
import { SwiperTop } from '~/components/Game/Swiper'
import { absoluteTop } from '~/components/Header/Navbar'
import { jotaiStore } from '~/lib/store'

export default function Home() {
  jotaiStore.set(absoluteTop, true)

  return (
    <>
      <SwiperTop />
      <div className="container mx-auto">
        <GameTop />
        <Games />
      </div>
    </>
  )
}
