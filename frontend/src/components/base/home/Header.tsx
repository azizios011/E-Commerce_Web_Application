import React from 'react'
import Link from 'next/link'
import NavBar from '../../layouts/home/NavBar'
import Logo from '../../layouts/home/Logo'
import LoginButton from '../../layouts/home/LoginButton'

const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between">
      <div>
        <Logo />
      </div>

      <div>
        <NavBar />
      </div>

      <div>
        <LoginButton />
      </div>
    </header>
  )
}

export default Header