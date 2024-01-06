import { motion } from 'framer-motion'

export const Games = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-5 md:justify-between">
        {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((v, k) => (
          <div className="relative h-full select-none" key={k}>
            <div className="absolute left-2 top-2 flex">
              <p className="global-tag mx-2 bg-[red]">HOT</p>
              <p className="global-tag mx-2 bg-yellow-500">NEW</p>
              <p className="global-tag mx-2 bg-[#ffb800]">FEATURE BUY</p>
            </div>
            <img src={`/images/card/${v}.png`} alt="" className="rounded-2xl" />
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileHover={{
                opacity: 1,
              }}
              className="z-2 absolute left-0 top-0 flex h-[calc(100%-.5rem)] w-full flex-col items-center justify-center rounded-2xl bg-no-repeat"
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
      </div>
    </>
  )
}
