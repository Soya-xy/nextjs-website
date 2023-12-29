'use client'

import './index.css'

import { useRef } from 'react'
import { useMount } from 'ahooks'
import { motion } from 'framer-motion'
import { Spine } from 'pixi-spine'
import * as PIXI from 'pixi.js'

export const Seven = () => {
  const container = useRef<any>(null)
  useMount(async () => {
    const app = new PIXI.Application({
      width: 600,
      height: 750,
      backgroundColor: '#000', // 背景颜色，这里是黑色
      backgroundAlpha: 0, // 背景透明度，0 表示完全透明
    })
    if (container.current) {
      container.current.appendChild(app.view)
      const res = await PIXI.Assets.load('/images/people/racoon.json')
      const sp = new Spine(res.spineData)
      sp.width = 527
      sp.height = 619
      sp.position.set(320, 200)

      app.stage.addChild(sp)
      if (!sp) return
      if (sp.state.hasAnimation('animation')) {
        sp.state.setAnimation(0, 'animation', true)
      }
    }
  })
  return (
    <>
      <section
        className="give-player-area give-player-bg pt-[110px]"
        style={{
          backgroundImage:
            'url(https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/give_player_bg.png);',
        }}
      >
        <div className="container mx-auto">
          <div className="row justify-center">
            <div className="col-lg-8">
              <div className="section-title title-style-two title-style-three mb-[70px] text-center">
                <h2 className="mb-0 text-[40px]">What we give players</h2>
              </div>
            </div>
          </div>
          <div className="row items-center justify-center md:justify-between lg:justify-around">
            <div className="col-xl-3 col-lg-5 col-md-6">
              {[1, 2, 3].map((_v, k) => {
                return (
                  <motion.div
                    key={k}
                    className="gp-item wow fadeInUp mb-[70px]"
                    data-wow-delay="0.2s"
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="gp-item-top  justify-start">
                      <img
                        decoding="async"
                        src={`/images/people/${_v}.png`}
                        alt="img"
                      />
                      <h4 className="title">VR Development</h4>
                    </div>
                    <div className="gp-content text-start">
                      <p>
                        Nullam quis ante. Maecenas ullamcorper, dui et placerat
                        feugiat, eros pede varius nisi, condimentum
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="col-lg-6 d-none d-xl-block">
              <div className="gp-img" ref={container} />
            </div>

            <div className="col-xl-3 col-lg-5 col-md-6">
              {[4, 5, 6].map((_v, k) => {
                return (
                  <motion.div
                    key={k}
                    className="gp-item wow fadeInUp mb-[70px]"
                    data-wow-delay="0.2s"
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="gp-item-top md:flex-row-reverse">
                      <img
                        decoding="async"
                        src={`/images/people/${_v}.png`}
                        alt="img"
                      />
                      <h4 className="title">VR Development</h4>
                    </div>
                    <div className="gp-content text-end">
                      <p>
                        Nullam quis ante. Maecenas ullamcorper, dui et placerat
                        feugiat, eros pede varius nisi, condimentum
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
