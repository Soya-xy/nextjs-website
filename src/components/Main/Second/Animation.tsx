import 'pixi-spine' // Do this once at the very start of your code. This registers the loader!

import { useRef } from 'react'
import { useMount } from 'ahooks'
import { Spine } from 'pixi-spine'
import * as PIXI from 'pixi.js'

export const Animation = () => {
  const container = useRef<any>(null)
  useMount(async () => {
    const app = new PIXI.Application({
      width: screen.availWidth > 750 ? 700 : screen.availWidth - 30,
      height: screen.availWidth > 750 ? 443 : 300,
      backgroundColor: '#000', // 背景颜色，这里是黑色
      backgroundAlpha: 0, // 背景透明度，0 表示完全透明
    })
    if (container.current) {
      container.current.appendChild(app.view)
      const res = await PIXI.Assets.load('/spine/skeleton.json')
      const sp = new Spine(res.spineData)
      if (screen.availWidth < 750) {
        sp.width = 370
        sp.height = 300
        sp.position.set(220, 150)
      } else {
        sp.width = 600
        sp.height = 443
        sp.position.set(450, 420 / 2)
      }
      app.stage.addChild(sp)
      if (!sp) return
      if (sp.state.hasAnimation('animation')) {
        sp.state.setAnimation(0, 'animation', true)
      }
    }
  })

  return (
    <>
      <div className="w-[300px] md:relative md:h-[500px] md:w-[500px]">
        <div
          ref={container}
          id="spine_container"
          className="right-[-5px] aspect-video md:absolute"
        />
      </div>
    </>
  )
}
