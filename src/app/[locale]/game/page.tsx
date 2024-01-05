'use client'

import { Games } from '~/components/Game/Games'
import { GameTop } from '~/components/Game/GameTop'
// import { motion } from 'framer-motion'
import { SwiperTop } from '~/components/Game/Swiper'

export default function Home() {
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
