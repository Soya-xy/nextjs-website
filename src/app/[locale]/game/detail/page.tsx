'use client'

import { Details } from '~/components/Game/Details/Details'
import { Top } from '~/components/Game/Details/Top'

export default function Home() {
  const { searchParams } = new URL(location.href)
  const id = searchParams.get('id')

  return (
    <>
      <Top />
      <Details />
    </>
  )
}
