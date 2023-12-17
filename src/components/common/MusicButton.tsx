'use client'

import { useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

import { useAudioPlayer } from '~/hooks/shared/use-audio'

export const MusicButton: FC<{
  children: ReactNode
  className?: string
  onClick?: () => void
}> = ({ children, className, onClick }) => {
  const [show, setShow] = useState(false)
  const { play } = useAudioPlayer('/music/click.wav')
  const { play: removePlay } = useAudioPlayer('/music/remove.wav')
  useEffect(() => {
    if (show) {
      play()
    } else {
      removePlay()
    }
  }, [show])
  return (
    <button
      className={`${className}`}
      onClick={() => {
        if (onClick) {
          onClick()
        }
        setShow(!show)
      }}
    >
      {children}
    </button>
  )
}
