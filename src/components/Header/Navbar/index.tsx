'use client'

import Image from 'next/image'
import Link from 'next/link'

import './style.css'

import { useRef, useState } from 'react'

export const Menu = () => {
  const containerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const menuList = ['菜单1', '菜单2', '菜单3', '菜单4', '菜单5']
  return (
    <div
      className="min-h-20 relative z-[2] flex items-center justify-between gap-3 py-6 pl-14 sm:pl-7"
      id="navbar"
    >
      <Link href="/">
        <button className="cursor-pointer">
          <Image
            width={1980}
            height={1980}
            className="w-20 text-black sm:w-14"
            style={{ color: 'transparent' }}
            src="/images/logo.png"
            alt="logo"
          />
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

      {/* MENU */}
      <div className="flex items-center">
        <div className="header-btn">
          <Link href="#" className="tg-border-btn">
            <i className="icon-[mingcute--edit-line]" />
            sing in
          </Link>
        </div>
        <div className="menu_container">
          <div
            className={
              !isOpen ? 'menu cross menu--2_invert' : 'menu cross menu--2'
            }
            ref={containerRef}
          >
            <label>
              <input
                type="checkbox"
                checked={isOpen}
                onChange={() => {
                  setIsOpen(!isOpen)
                }}
              />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                <path className="line--2" d="M0 50h99" />
                <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
