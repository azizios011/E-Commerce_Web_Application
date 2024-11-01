import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex items-center'>
      <Link href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
        />
      </Link>
    </div>
  )
}

export default Logo
