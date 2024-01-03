'use client'

import { ModalRead } from '~/components/common/ModalRead'
import { Chat } from '~/components/Main/Chat'
import { Eight } from '~/components/Main/Eight'
import { Fifth } from '~/components/Main/Fifth/Index'
import { Forth } from '~/components/Main/Forth/Index'
import { News } from '~/components/Main/News'
import { Second } from '~/components/Main/Second/Index'
import { Seven } from '~/components/Main/Seven/Index'
// import { Sixth } from '~/components/Main/Sixth'
import { Third } from '~/components/Main/Third/Index'
import { Video } from '~/components/Main/Video'
import { isClientSide } from '~/lib/env'

export default function Home() {
  return (
    <>
      <div className="h-[calc(100vh-100px)] w-[100vw]">
        <Video />
      </div>
      <Second />
      <Third />
      <Forth />
      <Fifth />
      <Seven />
      {/* <Sixth /> */}
      <News />
      <Eight />
      <Chat />
      {isClientSide && !localStorage.getItem('isRead') && <ModalRead />}
    </>
  )
}
