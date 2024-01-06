import clsx from 'clsx'

import { useRouter } from '~/i18n'

export function Item({
  active = 0,
  menuList,
  onChange,
}: {
  active: number
  menuList: Record<string, any>[]
  onChange: (e: any) => void
}) {
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
              onChange(item)
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
