'use client'

import { MouseFollower as MF, UpdateFollower } from 'react-mouse-follower'
import type { PropsWithChildren, ReactElement } from 'react'

import { useIsDark } from '~/hooks/common/use-is-dark'
import { isClientSide } from '~/lib/env'

export const MouseFollower = ({
  children,
}: PropsWithChildren): ReactElement => {
  const isDark = useIsDark()
  if (isClientSide && innerWidth > 700) {
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
          }}
        >
          {children}
        </UpdateFollower>
      </>
    )
  } else {
    return <>{children}</>
  }
}
