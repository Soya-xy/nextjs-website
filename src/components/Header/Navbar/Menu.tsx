import { useRef, useState } from 'react'
import Link from 'next/link'

import { useDrawerStack } from '~/providers/root/drawer-stack-provider'

export function Menu() {
  const containerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const { present } = useDrawerStack()
  return (
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
                if (!isOpen) {
                  present({
                    title: '123',
                    content: () => 'ces',
                    position: 'right',
                    onClose: () => {
                      setIsOpen(false)
                    },
                  })
                }
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
  )
}
