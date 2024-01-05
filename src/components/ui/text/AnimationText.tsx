import { motion } from 'framer-motion'

export const AnimationText = ({
  text,
  color = '#45f882',
  speed = 0.04,
}: {
  text: string
  color?: string
  speed?: number
}) => {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      textShadow: ['none', `${color} 0px 0px 25px`, 'none', 'none'],
    },
  }
  return (
    <motion.p
      variants={item}
      initial="hidden"
      whileInView="show"
      transition={{ staggerChildren: speed }}
      viewport={{ once: true }}
      className="tracking-[2px]"
      style={{
        color,
      }}
    >
      {text.split('').map((v, k) => {
        return (
          <motion.span variants={item} key={k}>
            {v}
          </motion.span>
        )
      })}
    </motion.p>
  )
}
