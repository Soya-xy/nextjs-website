'use client'

import { ReactQueryProvider } from './react-query-provider'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

import { ProviderComposer } from '../../components/common/ProviderComposer'
import { DebugProvider } from './debug-provider'
import { EventProvider } from './event-provider'
import { JotaiStoreProvider } from './jotai-provider'
import { ModalStackProvider } from './modal-stack-provider'
import MouseFollower from './mouse-provider'
import { PageScrollInfoProvider } from './page-scroll-info-provider'

const contexts: JSX.Element[] = [
  <ThemeProvider key="themeProvider" />,
  <ReactQueryProvider key="reactQueryProvider" />,
  <JotaiStoreProvider key="jotaiStoreProvider" />,

  <MouseFollower key="framer" />,
]
export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ProviderComposer contexts={contexts}>
        {children}

        <ModalStackProvider key="modalStackProvider" />
        <EventProvider key="viewportProvider" />
        <PageScrollInfoProvider key="PageScrollInfoProvider" />
        <DebugProvider key="debugProvider" />
      </ProviderComposer>
    </>
  )
}
