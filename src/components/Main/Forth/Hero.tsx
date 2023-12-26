import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

export default ({ direction = 'left' }: { direction?: any }) => {
  return (
    <>
      <div className="overflow-hidden md:ml-[10px]  ">
        <Marquee pauseOnHover={true} direction={direction}>
          {[1, 2, 3, 4, 5, 6].map((v, k) => (
            <div className="relative mx-5 h-full select-none py-2" key={k}>
              <img
                src={`/images/card/${v}.png`}
                alt=""
                className="rounded-2xl"
              />
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                className="z-2 absolute left-0 top-2 flex h-[calc(100%-.5rem)] w-full flex-col items-center justify-center rounded-2xl bg-no-repeat "
                style={{ backdropFilter: 'blur(10px)' }}

                // style={{ backgroundImage: `url(https://themedox.com/mykd/wp-content/uploads/2023/10/project_01.jpg)` }}
              >
                <img
                  src={`/images/card/pic_${v}.png`}
                  alt=""
                  className="rounded-2xl"
                />
                <button className="rounded-md bg-[#45f882] px-7 py-3 text-start font-bold text-black hover:bg-[#C6923D] hover:text-white">
                  Try Now!
                </button>
              </motion.div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  )
}
