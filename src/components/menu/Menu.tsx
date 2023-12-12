import Link from 'next/link'
import React from 'react'

export const Menu = (props: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav {...props}>
        <ul>
            <li className='inline hover:underline'>
                <Link href="/">Skills</Link>
            </li>
            <li className='inline hover:underline ml-8'>
                <Link href="/">Sobre mim</Link>
            </li>
        </ul>
    </nav>
  )
}
