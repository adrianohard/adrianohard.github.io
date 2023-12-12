import React from 'react'
import { Menu } from '@/components'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='flex items-center justify-center w-full'>
        <h1>
          <Link href={'/'}>Adriano Hardtke</Link>
        </h1>
        <Menu className='flex-1 text-center' />
    </div>
  )
}
