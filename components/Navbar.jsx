import Link from 'next/link'
import React from 'react'
import PetsDropdown from './Petsdropdown';

const Navbar = () => {
    return (
       
        <div className='w-full mx-auto px-6 md:px-20 bg-[#720e9e] h-auto md:h-24 py-4 md:py-0 flex items-center'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0'>
                <div className='flex items-center'>
                    <img src="/paw.png" alt="logo" className='h-16 w-16 md:h-24 md:w-24 -mr-4 md:-mr-6' />
                    <span className='text-amber-400 font-mono font-bold text-lg md:text-xl tracking-wider'>HAPPYPAWS</span>
                </div>
                <ul className='flex flex-wrap text-center justify-center items-center gap-x-6 md:gap-x-20 gap-y-2 text-sm md:text-base'>
                    <li className='text-white hover:text-amber-600 duration-1000 transition-colors'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='text-white hover:text-amber-600 duration-1000 transition-colors'>
                        <Link href="/about">About us</Link>
                    </li>
                    <li className='text-white hover:text-amber-600 duration-1000 transition-colors'>
                        <Link href="/services">Services</Link>
                    </li>
                    <div className='text-white hover:text-amber-600 duration-1000 relative z-50'>
                        <Link href="/pets"><PetsDropdown/></Link>
                    </div>
                    <li className='text-white hover:text-amber-600 duration-1000 transition-colors'>
                        <Link href="/volunteer">Volunteer</Link>
                    </li>
                    <li className='text-white hover:text-amber-600 duration-1000 transition-colors'>
                        <Link href="/signup">Sign up</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar;