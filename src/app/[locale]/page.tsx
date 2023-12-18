import { Second } from '~/components/Main/Second'
import { Video } from '~/components/Main/Video'

export default function Home() {
  return (
    <>
      <div className="w-100vw h-[calc(100vh-100px)]">
        <Video />
      </div>
      <Second />
    </>
  )
}
