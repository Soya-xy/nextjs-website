'use client'

import { MouseFollower as MF, UpdateFollower } from 'react-mouse-follower'
import type { PropsWithChildren, ReactElement } from 'react'

import { useIsDark } from '~/hooks/common/use-is-dark'

export const MouseFollower = ({
  children,
}: PropsWithChildren): ReactElement => {
  const isDark = useIsDark()
  return (
    <>
      <MF />
      <UpdateFollower
        mouseOptions={{
          zIndex: 1,
          backgroundColor: isDark ? 'white' : 'black',
        }}
        style={{
          height: '100vh',
          width: 'calc(100vw - 20px)',
        }}
      >
        {children}
      </UpdateFollower>
    </>
  )
}
