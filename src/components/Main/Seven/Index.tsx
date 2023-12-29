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

  const data = [
    {
      title: 'Random Number Generator RNG',
      content:
        'GLI / BMM approved, best reliable and safeguarded gaming experience',
    },
    {
      title: 'Diversified equipment',
      content:
        'Supports iOS, Android, Windows, HTML5, supports any browser, no download or installation, and fully enjoys a comprehensive entertainment system.',
    },
    {
      title: 'Diversified design',
      content:
        'Refined graphic, multiple mathematical model, lines and ways gaming, medium to high volatility and exclusive PS lobby for loyal players',
    },
    {
      title: 'Big Data Analysis System',
      content:
        'Regularly tracking and analyzing player behavior, exclusive to branded loyal players: MY Challenge Reward Medal and PS Coins',
    },
    {
      title: 'Multilingual API interface',
      content:
        'Meet the needs of users from different regions and language backgrounds around the world, with secure and reliable API fast docking services, seamless cross platform integration, download free, and fast switching.',
    },
    {
      title: 'International Certification Interface',
      content:
        "MY RNG is certified by the professional organization BMM Compliance, abbreviated as BMM, and the world's most credible research organization Gaming Laboratories International, abbreviated as GLI certification.",
    },
  ]
  return (
    <>
      <section
        className="give-player-area give-player-bg pt-[110px]"
        style={{
          backgroundImage:
            'url(https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/give_player_bg.png);',
        }}
      >
        <div className="mx-[15vw]">
          <div className="row justify-center">
            <div className="col-lg-8">
              <div className="section-title title-style-two title-style-three mb-[70px] text-center">
                <h2 className="mb-0 text-[40px]">What we give players</h2>
              </div>
            </div>
          </div>
          <div className="row items-start justify-center md:justify-between lg:justify-around">
            <div className="col-xl-4 col-lg-5 col-md-6">
              {data.splice(0, 3).map((v, k) => {
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
                        src={`/images/people/${k + 1}.png`}
                        alt="img"
                        className="mr-3"
                      />
                      <h4 className="title">{v.title}</h4>
                    </div>
                    <div className="gp-content text-start">
                      <p className="break-all">{v.content}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="col-lg-4 d-none d-xl-block">
              <div className="gp-img flex justify-center" ref={container} />
            </div>

            <div className="col-xl-4 col-lg-5 col-md-6">
              {data.splice(0, 3).map((v, k) => {
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
                    <div className="gp-item-top text-end md:flex-row-reverse">
                      <img
                        decoding="async"
                        src={`/images/people/${k + 4}.png`}
                        alt="img"
                      />
                      <h4 className="title">{v.title}</h4>
                    </div>
                    <div className="gp-content text-end">
                      <p className="break-all">{v.content}</p>
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
