import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
// import { MusicButton } from '~/components/common/MusicButton'
import * as Select from '@radix-ui/react-select'
import { forwardRef, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import { useAudioPlayer } from '~/hooks/shared/use-audio'
import { usePathname, useRouter } from '~/i18n'
import { useDrawerStack } from '~/providers/root/drawer-stack-provider'

import { Logo } from './Logo'

const SelectItem = forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <Select.Item
        className={clsx('flex items-center justify-between', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  },
)

export function Menu() {
  const containerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const { present } = useDrawerStack()
  const { play } = useAudioPlayer('/music/click.wav')
  const { play: removePlay } = useAudioPlayer('/music/remove.wav')

  const router = useRouter()
  const pathname = usePathname()

  const language = [
    'EN',
    'de',
    '简中',
    '繁中',
    'ไทย',
    'Melayu',
    'Indonesia',
    'Tiếng Việt',
    '한국어',
    '日本語',
    'РУССКИЙ',
  ]

  useEffect(() => {
    if (isOpen && containerRef) {
      play()
    } else {
      removePlay()
    }
  }, [isOpen])

  return (
    <div className="flex items-center">
      <i className="icon-[mingcute--search-2-line] text-3xl" />
      {/* i18n */}
      <Select.Root
        defaultValue="EN"
        onValueChange={(e) => {
          router.push(pathname, { locale: e })
        }}
      >
        <Select.Trigger
          className="relative mx-4 flex items-center justify-between rounded border px-2 py-1"
          aria-label="Food"
        >
          <Select.Value placeholder="EN" />
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position="popper"
            align="center"
            sideOffset={5}
            className="rounded-xl border bg-[#ffffff3d] px-2"
          >
            <Select.Viewport className="">
              <Select.Group>
                {language.map((v, k) => {
                  return (
                    <SelectItem
                      value={v}
                      key={k}
                      className="p-2 text-white hover:bg-[#ffffff1f]"
                    >
                      {v}
                    </SelectItem>
                  )
                })}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <i
        className="icon-[mingcute--menu-fill] text-4xl"
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen) {
            present({
              title: () => {
                return (
                  <>
                    <div className="flex items-center">
                      <Logo />
                      <p className="ml-2">My Game</p>
                    </div>
                  </>
                )
              },
              content: () => '测试菜单',
              position: 'right',
              onClose: () => {
                setIsOpen(false)
              },
            })
          }
        }}
      />
    </div>
  )
}
