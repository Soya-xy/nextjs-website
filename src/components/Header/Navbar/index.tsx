'use client'

import './style.css'

import { atom, useAtom } from 'jotai'

import { Item } from './Item'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const absoluteTop = atom(false)

export const Navbar = () => {
  // 获取当前页的meta信息
  // const { metadata } = useMetadata()
  const [top] = useAtom(absoluteTop)

  const menuList = [
    { name: 'HOME', url: '/' },
    { name: 'GAMES', url: '/game' },
    { name: 'TOURNAMENT', url: '' },
    { name: 'PAGES', url: '' },
    { name: 'NEWS', url: '' },
    { name: 'ABOUT US', url: '/about' },
  ]
  return (
    <div
      className={`navbar relative z-[2]  h-[100px] min-h-20 w-full ${
        top && '!absolute'
      }`}
    >
      <div className="h-100px container mx-auto flex items-center justify-between gap-3 py-6">
        <div className="w-[90px]">
          <button className="cursor-pointer wh-full">
            <Logo />
          </button>
        </div>
        {/* LINK */}
        <div className="ml-20 hidden flex-1 items-center justify-center lg:flex">
          <Item menuList={menuList} />
        </div>
        <Menu />
      </div>
    </div>
  )
}
