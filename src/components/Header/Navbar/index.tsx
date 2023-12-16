'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'

import { useIsClient } from '~/hooks/common/use-is-client'
import { useModalStack } from '~/providers/root/modal-stack-provider'

import { Search } from './Search'

export const Menu = () => {
  const menuItems = ['菜单1', '菜单2', '菜单3', '菜单4', '菜单5']

  const isClient = useIsClient()
  const { present } = useModalStack()

  if (!isClient) return null

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      classNames={{
        item: [
          'data-[active=true]:text-[#7B52D7]',
          'data-[active=true]:dark:text-[#52A499]',
        ],
      }}
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand>
        <Image
          src="/images/logo.png"
          width={120}
          height={60}
          alt="logo"
          className="md:px-4"
        />
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {menuItems.map((item, idx) => {
          return (
            <NavbarItem isActive={idx === 2} key={`${item}-${idx}`}>
              <Link color="foreground" href="#">
                {item}
              </Link>
            </NavbarItem>
          )
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <span
            className="icon-[mingcute--search-line] cursor-pointer text-2xl"
            onClick={() => {
              present({
                title: '请输入搜索内容',
                clickOutsideToDismiss: true,
                content: () => <Search />,
              })
            }}
          />
        </NavbarItem>
        <NavbarItem>
          <button className="rounded-xl bg-[#D5E2FA] px-4 py-2 dark:bg-[#202022]">
            Now Play!
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
