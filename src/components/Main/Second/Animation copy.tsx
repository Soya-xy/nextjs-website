import { motion } from 'framer-motion'

export const Animation = () => {
  function template({ rotate, x = 0, y = 0 }: any) {
    console.log('🚀 ~ file: Animation.tsx:6 ~ template ~ rotate:', rotate)
    return `translateX(${x}) translateY(${y}) rotate3d(1,1,1,${rotate})`
  }
  return (
    <>
      <div className="flex justify-end">
        <img src="/images/kuang.png" className="h-[490px] w-[490px]" alt="" />
        <motion.div
          className="absolute bottom-[-10px] right-[0] h-[440px] w-[690px] origin-bottom-right"
          transformTemplate={template}
          initial={{
            rotate: 10,
            x: -10,
            y: -5,
          }}
          animate={{
            x: [-10, -10, -10, -10, -10, -30, -20, -15, -10],
            // y: [0,0,0,0,-10, -15, -10, -15, -20],
            rotate: [10, 7, 5, 7, 10],
          }}
          transition={{
            delay: 1,
            duration: 3,
            ease: 'linear',
            // times: [0, .1, .2, .3, .4, .5, .7, .8, .9, 1],
            repeat: Infinity,
          }}
        >
          <img src="/images/ship.png" alt="" className="h-full w-full" />
        </motion.div>
        <motion.div
          className="absolute bottom-[-20px] right-[-50px] h-[450px] w-[690px]"
          initial={{
            // opacity: 0,
            x: 10,
            y: -25,
          }}
          whileInView={{
            // opacity: 1,
            y: [-25, -20, -10, -15, -10, -25],
          }}
          // viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 3,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <img src="/images/people.png" alt="" className="h-full w-full" />
        </motion.div>
      </div>
    </>
  )
}
