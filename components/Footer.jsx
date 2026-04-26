import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#0c0d27] py-10 px-6 lg:px-20'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='flex items-center gap-4'>
          <img src="/kittycat.png" alt="cat" className='h-16 w-auto' />
          <span className='text-white font-quicksand font-bold text-xl'>Happy Paws</span>
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
          <Link href="/about" className='text-white hover:text-amber-400 transition-colors duration-500 font-medium'>
            About us
          </Link>
          <Link href="/faq" className='text-white hover:text-amber-400 transition-colors duration-500 font-medium'>
            FAQ
          </Link>
          <Link href="/pets" className='text-white hover:text-amber-400 transition-colors duration-500 font-medium'>
            Categories
          </Link>
          <Link href="/contact" className='text-white hover:text-amber-400 transition-colors duration-500 font-medium'>
            Contact
          </Link>
        </div>
        <div className='text-gray-400 text-sm font-light flex justify-center'>
          © 2026 | All rights reserved <img src="/paw.png" alt="paw" className='h-5 w-5'/>
        </div>

      </div>
    </footer>
  )
}

export default Footer