'use client'

import { motion } from 'framer-motion'

import './index.css'

import Hero from './Hero'

export const Forth = () => {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      textShadow: ['none', '#45f882 0px 0px 25px', 'none', 'none'],
    },
  }
  return (
    <div className="forth">
      <div className="w-full py-[130px]">
        <section className="md:mx-[180px]">
          <div className="flex min-h-[460px] flex-col md:flex-row">
            <div className="!ml-[30px] w-[430px] flex-initial flex-shrink-0 text-start">
              <h2 className="text-[45px]">PROJECTS MYKD</h2>
              <motion.p
                variants={item}
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.04 }}
                viewport={{ once: true }}
                className="tracking-[2px] text-[#45f882]"
              >
                {'OUR LATEST GALLERY'.split('').map((v, k) => {
                  return (
                    <motion.span variants={item} key={k}>
                      {v}
                    </motion.span>
                  )
                })}
              </motion.p>
            </div>
            <Hero />
          </div>
        </section>
      </div>
    </div>
  )
}
