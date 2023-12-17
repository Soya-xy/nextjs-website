import { useState } from 'react'
import clsx from 'clsx'

export function Item({ menuList }: { menuList: string[] }) {
  const [active, setActive] = useState(0)

  if (menuList.length <= 0) return undefined
  return (
    <>
      {menuList.map((item, idx) => {
        return (
          <div
            className={clsx(
              `mr-5 flex items-center gap-12 font-sans text-xl font-medium hover:text-green-500 sm:gap-0`,
              active === idx && `text-green-500 `,
            )}
            onClick={() => setActive(idx)}
            key={idx}
          >
            <button className="cursor-pointer">{item}</button>
          </div>
        )
      })}
    </>
  )
}
