import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <ul className=''>
          <li>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about'>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              Contact
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar
