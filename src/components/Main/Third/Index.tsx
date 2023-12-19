'use client'

import { Content } from './Content'
import { Top } from './Top'

import './index.css'

export const Third = () => {
  return (
    <div className="third">
      <div className="container mx-auto py-[130px]  lg:max-w-[1300px]">
        <Top />
        <Content />
      </div>
    </div>
  )
}
