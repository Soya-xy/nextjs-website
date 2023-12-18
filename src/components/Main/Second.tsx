'use client'

import Image from 'next/image'

import './second.css'

import { motion, useAnimation } from 'framer-motion'

export const Second = () => {
  const controls = useAnimation()

  return (
    <>
      <div className="second">
        <div className="container mx-auto lg:max-w-[1300px]">
          <div className="flex flex-col-reverse items-center justify-between pt-[10rem] lg:flex-row">
            <div className="flex flex-1 flex-col px-[20rem] lg:px-6">
              <p className="nft_site mb-[2rem] text-[45px] font-[800]">
                THE JOURNEY OF THE
                <br /> NFT SITES
              </p>
              <p className="sub mb-[3rem] tracking-wider">
                Gorem npsum dolor sit amet consectetur adipiscing elit. Duis
                elementum sollici tudin augue euismod. Nulla ullamcorper nunc.
                Morbi pharetra mi tellus mollis tincidunt massa venenatis. Etiam
                lacinia ipsumultrices.
              </p>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center justify-start gap-[3.3rem]">
                    <div>
                      <p className="text-[30px] font-[700]">40K</p>
                      <p className="text-base font-[500] text-[#adb0bc]">
                        Member
                      </p>
                    </div>
                    <div>
                      <p className="text-[30px] font-[700]">40K</p>
                      <p className="text-base font-[500] text-[#adb0bc]">
                        Member
                      </p>
                    </div>
                    <div>
                      <p className="text-[30px] font-[700]">40K</p>
                      <p className="text-base font-[500] text-[#adb0bc]">
                        Member
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 flex items-center justify-start">
                    <div className="relative h-full  min-w-[158px] text-center text-[14px]  font-bold leading-[48px]">
                      <div className="absolute left-0 top-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="none"
                          viewBox="0 0 188 61"
                          className="block h-full w-full"
                          style={{
                            fill: '#02010100',
                            stroke: '#45F882',
                            fillRule: 'evenodd',
                          }}
                        >
                          <motion.path
                            d="M874,554.154L893.08,524h146.67L1060,552.843,1039.75,583H893.08Z"
                            transform="translate(-873 -523)"
                            animate={controls}
                            initial={{
                              strokeDashoffset: 0,
                            }}
                            onHoverStart={() => {
                              controls.set({
                                strokeDashoffset: 438,
                              })
                              controls.start({
                                strokeDashoffset: 0,
                              })
                            }}
                            style={{
                              strokeDasharray: '436, 438',
                              strokeWidth: '3px',
                            }}
                            transition={{ duration: 1 }} // 可选：定义动画的持续时间和其他属性
                          />
                        </svg>
                      </div>
                      READ MORE
                    </div>
                    <div className="ml-10 flex items-center gap-4 text-[14px] font-bold">
                      <div
                        className=" flex h-[46px] w-[46px] items-center justify-center rounded-full border border-solid text-[24px] text-green-500 hover:border-green-500 hover:bg-green-500
                       hover:text-black"
                      >
                        <i className="icon-[mingcute--play-fill] " />
                      </div>
                      How It Work
                    </div>
                  </div>
                </div>
                <div className="rotats hover:animation-pause relative h-[137px] w-[137px]">
                  <Image
                    width={137}
                    height={137}
                    className="z-2 relative"
                    decoding="async"
                    src="https://themedox.com/mykd/wp-content/themes/mykd/assets/img/icons/circle.svg"
                    alt="img"
                  />
                  <svg
                    className="super"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z" />
                    <text>
                      <textPath href="#textPath">
                        super nft Gaming sits
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="about__funFact-images relative flex max-w-[511px] flex-1 justify-end">
                <Image
                  src="https://themedox.com/mykd/wp-content/uploads/2023/10/fun_fact_shape.png"
                  alt=""
                  className=""
                  width={511}
                  height={443}
                />

                <Image
                  decoding="async"
                  className="main-img"
                  src="https://themedox.com/mykd/wp-content/uploads/2023/10/fun_fact.png"
                  alt=""
                  width={382}
                  height={557}
                />
              </div>
              <div className="relative mt-5 flex items-center justify-end">
                <div className="mr-2 text-end">
                  <p className="text-[22px] font-bold text-white">TOURNAMENT</p>
                  <p className="text-[14px] text-[#ADB0BC]">DEVELOPMENT</p>
                </div>
                <div className="relative">
                  <div className="about-icon">
                    <Image
                      alt=""
                      className="relative z-[2]"
                      width={38}
                      height={38}
                      src="https://themedox.com/mykd/wp-content/uploads/2023/10/trophy.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
