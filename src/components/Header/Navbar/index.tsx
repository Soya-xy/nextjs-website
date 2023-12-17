'use client'

import Link from 'next/link'

import './style.css'

import { Logo } from './Logo'
import { Menu } from './Menu'

export const Navbar = () => {
  const menuList = ['菜单1', '菜单2', '菜单3', '菜单4', '菜单5']
  return (
    <div
      className="min-h-20 relative z-[2] flex items-center justify-between gap-3 py-6 pl-14 sm:pl-7"
      id="navbar"
    >
      <Link href="/">
        <button className="cursor-pointer">
          <Logo />
        </button>
      </Link>

      {/* LINK */}
      <div className="ml-10 hidden flex-1 items-center justify-start md:flex">
        {menuList.map((item, idx) => (
          <div
            className="mr-5 flex items-center gap-12 font-sans text-xl font-medium sm:gap-0"
            key={idx}
          >
            <button className="cursor-pointer">{item}</button>
          </div>
        ))}
      </div>
      <Menu />
    </div>
  )
}
