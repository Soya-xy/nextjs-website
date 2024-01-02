'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

import './ModalRead.module.css'

import { isClientSide } from '~/lib/env'
import { clsxm } from '~/lib/helper'

import { DialogOverlay } from '../ui/dialog'
import bg from '/public/images/model_bg.png'

export const ModalRead = () => {
  const [modalRead, setModalRead] = useState(true)
  if (isClientSide) {
    const isRead = localStorage.getItem('isRead')
    console.log('🚀 ~ file: ModalRead.tsx:14 ~ ModalRead ~ isRead:', isRead)
    if (!isRead) {
      localStorage.setItem('isRead', 'true')
    }
  }
  return (
    <Dialog.Root open={modalRead}>
      <Dialog.Portal>
        <DialogOverlay zIndex={20} />
        <Dialog.Content className="fixed z-[21] flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-hidden">
          <div
            className={clsxm(
              'h-[40vh] rounded-2xl bg-no-repeat md:w-[40vw]',
              'relative',
            )}
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: '100% 100%',
            }}
          >
            <div className="absolute left-[50%] top-[-10%] h-[100px] translate-x-[-50%]">
              <img src="/images/logo.png" className="wh-full" alt="" />
            </div>
            <div>
              <p className="mt-[10%] text-center text-[84px] font-bold text-green-500">
                Welcome <span className="text-white">TO</span> MY
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-40 md:w-[40vw]">
            <button className="h-[60px] rounded-xl border bg-black  px-[100px] text-center text-3xl font-bold">
              NO
            </button>
            <button className="h-[60px] rounded-xl  bg-[#45F781] px-[100px] text-center text-3xl font-bold text-black">
              YES
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
