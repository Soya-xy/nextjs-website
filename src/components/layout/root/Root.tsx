'use client'

import { ClientOnly } from '~/components/common/ClientOnly'
import { Menu } from '~/components/Header/Navbar'
import { ThemeSwitcher } from '~/components/ui/theme-switcher'

import { Content } from '../content/Content'

export const Root: Component = ({ children }) => {
  return (
    <>
      <Menu />
      <Content>{children}</Content>

      <footer className="flex justify-end p-5">
        <ThemeSwitcher />
      </footer>
      <ClientOnly>{/* TODO */}</ClientOnly>
    </>
  )
}
