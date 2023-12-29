import { Eight } from '~/components/Main/Eight'
import { Fifth } from '~/components/Main/Fifth/Index'
import { Forth } from '~/components/Main/Forth/Index'
import { News } from '~/components/Main/News'
import { Second } from '~/components/Main/Second/Index'
import { Seven } from '~/components/Main/Seven/Index'
import { Sixth } from '~/components/Main/Sixth'
import { Third } from '~/components/Main/Third/Index'
import { Video } from '~/components/Main/Video'

export default function Home() {
  return (
    <>
      <div className="w-100vw h-[calc(100vh-100px)]">
        <Video />
      </div>
      <Second />
      <Third />
      <Forth />
      <Fifth />
      <Seven />
      <Sixth />
      <Eight />
      <News />
    </>
  )
}
