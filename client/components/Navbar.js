import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '../public/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className='w-full flex lg:flex-row px-2 mt-10 flex-col items-center justify-center gap-2' >
        <Link
          href='/chatbot'
          className='flex justify-center items-center'
        >
          <button type="button" className="w-[220px] flex justify-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <Image
              src={Logo}
              height={60}
              width={60}
              alt='openai-logo'
              className='bg-white h-10 w-10 object-cover rounded-full mr-5'
            />
            ChatBot
          </button>
        </Link>
        <Link href='/imagegenerator' className='flex items-center justify-center'>
          <button type="button" className="w-[220px] flex justify-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <Image
              src={Logo}
              height={60}
              width={60}
              alt='openai-logo'
              className='bg-white h-10 w-10 object-cover rounded-full mr-5'
            />
            Image Generator
          </button>
        </Link>

      </nav>
    </>
  )
}

export default Navbar