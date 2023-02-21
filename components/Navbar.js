import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '../public/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className='fixed h-[80px] w-full flex bg-slate-900 text-gray-50 py-5 lg:px-10 px-2 shadow-lg border-b' >
        <Link href='/' className='flex justify-center w-full hover:bg-slate-800 rounded-full'>
          <Image
            src={Logo}
            height={60}
            width={60}
            alt='openai-logo'
            className='bg-white h-10 w-10 object-cover rounded-full'
          />
          <p className='py-2 px-5'>@Allpha_ChatBot</p>
        </Link>
        <Link href='/imagegenerator' className='flex justify-center w-full hover:bg-slate-800 rounded-full'>
          <Image
            src={Logo}
            height={60}
            width={60}
            alt='openai-logo'
            className='bg-white h-10 w-10 object-cover rounded-full'
          />
          <p className='py-2 px-5'>@Image Generator</p>
        </Link>

      </nav>

      <div className='h-[80px] w-full flex bg-slate-900 text-gray-50 py-5 lg:px-10 px-2 shadow-lg border-b'>
      </div>
    </>
  )
}

export default Navbar