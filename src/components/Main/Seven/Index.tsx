'use client'

import './index.css'

import { useState } from 'react'
import { motion } from 'framer-motion'

export const Seven = () => {
  const img_list = [1, 1, 1, 1, 1, 1]
  const [active, setActive] = useState(1)

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
              <div className="section-title title-style-two mb-[70px] text-center">
                <h2 className="mb-0 text-[40px]">What we give players</h2>
              </div>
            </div>
          </div>
          <div className="row items-center justify-center md:justify-between lg:justify-around">
            <div className="col-xl-4 col-lg-5 col-md-6">
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
                    onHoverStart={() => setActive(_v)}
                  >
                    <div className="gp-item-top  justify-start">
                      <img
                        decoding="async"
                        src="https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/gp_icon01.png"
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

            <div className="col-lg-4 d-none d-xl-block">
              {[1, 2, 3, 4, 5, 6].map((_v, k) => (
                <div
                  className={`gp-img ${active === _v ? 'active' : 'hidden'}`}
                  key={k}
                >
                  <img
                    decoding="async"
                    src="https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/give_player.png"
                    alt="img"
                  />
                </div>
              ))}
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6">
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
                    onHoverStart={() => setActive(_v)}
                  >
                    <div className="gp-item-top md:flex-row-reverse">
                      <img
                        decoding="async"
                        src="https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/gp_icon01.png"
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
