'use client'

import Link from 'next/link'

import './style.css'

import { Item } from './Item'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const Navbar = () => {
  const menuList = [
    'HOME',
    'ABOUT US',
    'TOURNAMENT',
    'PAGES',
    'NEWS',
    'CONTACT',
  ]
  return (
    <div className="navbar relative z-[2]  h-[100px] min-h-20 w-full">
      <div className="h-100px container mx-auto flex items-center justify-between gap-3 py-6">
        <Link href="/" className="w-[120px]">
          <button className="cursor-pointer">
            <Logo />
          </button>
        </Link>
        {/* LINK */}
        <div className="ml-20 hidden flex-1 items-center justify-center lg:flex">
          <Item menuList={menuList} />
        </div>

        <Menu />
      </div>
    </div>
  )
}
