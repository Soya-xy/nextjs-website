import { useState } from 'react'
import clsx from 'clsx'

import { useRouter } from '~/i18n'
import { jotaiStore } from '~/lib/store'

import { absoluteTop } from '.'

export function Item({ menuList }: { menuList: Record<string, any>[] }) {
  const [active, setActive] = useState(0)
  const router = useRouter()

  if (menuList.length <= 0) return undefined
  return (
    <>
      {menuList.map((item, idx) => {
        return (
          <div
            className={clsx(
              `mx-7 flex items-center gap-12 font-sans text-xl font-medium hover:text-green-500 sm:gap-0`,
              active === idx && `text-green-500 `,
            )}
            onClick={() => {
              setActive(idx)
              jotaiStore.set(absoluteTop, false)
              router.replace(item.url)
            }}
            key={idx}
          >
            <button className="cursor-pointer">{item.name}</button>
          </div>
        )
      })}
    </>
  )
}
