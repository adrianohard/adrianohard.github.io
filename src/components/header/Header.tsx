import React from 'react'
import { Menu } from '@/components'

export const Header = () => {
  return (
    <div className='flex items-center justify-center w-full'>
        <h1>Adriano Hardtke</h1>
        <Menu className='flex-1 text-center' />
    </div>
  )
}
