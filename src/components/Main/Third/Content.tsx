'use client'

import { useState } from 'react'
import { useUpdateEffect } from 'ahooks'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import Link from 'next/link'

import { tabActive } from './Top'

export const Content = () => {
  const tabAtom = useAtomValue(tabActive)
  const [animation, setAnimation] = useState({})
  useUpdateEffect(() => {
    setAnimation({
      opacity: [0, 1],
      y: [50, 0],
    })

    setTimeout(() => {
      setAnimation({})
    }, 500)
  }, [tabAtom])
  return (
    <>
      <div className="tab-content" id="myTabContent">
        <motion.div
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={animation}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
            times: [0, 1],
          }}
          className="tab-pane show active"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex w-[100%]  flex-[0_0_auto] items-end px-10 md:w-[44%]">
              <div className="md:h-full">
                <video
                  src="/music/video.mp4"
                  className="object-fill wh-full"
                  controls
                  poster="/images/poster.jpg"
                />
              </div>
            </div>
            <div className="mt-3 w-full px-10 md:mt-0 md:px-0">
              <div className="about__flex-wrap">
                <div className="about__content-wrap">
                  <div className="about__content">
                    <h4 className="title">Human game</h4>
                    <span className="rate">Rate 50%</span>
                    <p>
                      Lorem ipsum dolor sit amet, consteur adipiscing Duis
                      elementum sollicitudin is yaugue euismods Nulla
                      ullamcorper. Morbi pharetra tellus miolslis, tincidunt
                      massa venenatis.
                    </p>
                  </div>
                  <div className="about__content-list">
                    <ul className="list-wrap">
                      <li>
                        <img
                          decoding="async"
                          src="https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon01.png"
                          width="45"
                          alt="Image"
                        />{' '}
                        Chichi Dragon Ball
                      </li>
                      <li>
                        <img
                          decoding="async"
                          src="https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon02.png"
                          width="45"
                          alt="Image"
                        />{' '}
                        Space Babe Night
                      </li>
                      <li>
                        <img
                          decoding="async"
                          src="https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon03.png"
                          width="45"
                          alt="Image"
                        />{' '}
                        Dragon Ball
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="about__btn-wrap">
                  <ul className="list-wrap">
                    <li>
                      <Link
                        href="https://themedox.com/mykd/shop/"
                        target="_blank"
                      >
                        Dragon Ball
                      </Link>
                    </li>
                    <li>
                      <Link href="https://opensea.io/" target="_blank">
                        Nft market
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://themedox.com/mykd/contact-us/"
                        target="_blank"
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
