import 'pixi-spine' // Do this once at the very start of your code. This registers the loader!

import { useEffect, useRef, useState } from 'react'
import { useMount } from 'ahooks'
import { Spine } from 'pixi-spine'
import * as PIXI from 'pixi.js'

export const Animation = ({ play }: any) => {
  const container = useRef<any>(null)
  const [ready, setReady] = useState<boolean>(false)
  const [animation, setAnimation] = useState<any>(null)
  useMount(async () => {
    const app = new PIXI.Application({
      height: 515,
      backgroundColor: '#000', // 背景颜色，这里是黑色
      backgroundAlpha: 0, // 背景透明度，0 表示完全透明
    })
    if (container.current) {
      container.current.appendChild(app.view)
      const res = await PIXI.Assets.load('/spine/skeleton.json')
      const sp = new Spine(res.spineData)
      sp.position.set(450, 505 / 2)
      setAnimation(sp)
      app.stage.addChild(sp)
      setReady(true)
    }
  })

  useEffect(() => {
    if (play && ready) {
      if (!animation) return
      if (animation.state.hasAnimation('animation')) {
        animation.state.setAnimation(0, 'animation', false)
        setTimeout(() => {
          animation.state.tracks[0].animationEnd = 1.8
        }, 1800)
      }
    }
  }, [play, ready])
  return (
    <>
      <div className="relative h-[500px] w-[500px]">
        <div
          ref={container}
          id="spine_container"
          className="absolute right-[-120px] aspect-video"
        />
      </div>
    </>
  )
}
