'use client'

import { useEffect, useState } from 'react'

import { isClientSide } from '~/lib/env'

export function Video() {
  const [navbarHeight, setNavbarHeight] = useState(0)

  useEffect(() => {
    const navRef = document.getElementById('navbar')
    if (navRef && navRef.offsetHeight) {
      setNavbarHeight(navRef.offsetHeight)
    }
  }, [])

  return (
    <>
      <div
        style={{
          ...(isClientSide && window.innerWidth >= 768
            ? { height: `calc(100vh - ${navbarHeight}px)` }
            : undefined),
        }}
      >
        <div className="md:z-1 md:absolute md:top-0">
          <video className="h-full w-full md:h-[100vh]" autoPlay muted loop>
            <source
              src="https://api.jdbgaming.com/assets/upload/images/banner/banner-c81e728d9d4c2f636f067f89cc14862c-video-desktop.mp4?a1c0077740c5177b3b3ef441"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-70%] overflow-hidden bg-transparent font-serif text-[64px] border-text lg:block">
          <p>Myrlie SLOTS</p>
          <p>Let players enjoy it endlessly</p>
        </div>
      </div>
    </>
  )
}
