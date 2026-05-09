import Link from 'next/link'
import React from 'react'
import PetsDropdown from './Petsdropdown';

const Navbar = () => {
    return (
        <div className='container max-auto px-20 bg-[#720e9e] h-25'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center '>
                    <img src="/paw.png" alt="logo" className='h-25 w-25 -mr-6' />
                    <span className='text-amber-400 font-mono'>HAPPYPAWS</span>
                </div>
                <ul className='flex text-center justify-center gap-20'>
                    <li className='text-white  hover:text-amber-600 duration-1000'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='text-white  hover:text-amber-600 duration-1000'>
                        <Link href="/about">About us</Link>
                    </li>
                    <li className='text-white  hover:text-amber-600 duration-1000'>
                        <Link href="/services">Services</Link>
                    </li>
                  <div className='text-white hover:text-amber-600 duration-1000 relative z-50'>
                      <PetsDropdown/>
                  </div>
                    
                    <li className='text-white hover:text-amber-600 duration-1000'>
                        <Link href="/volunteer">Volunteer</Link>
                    </li>
                    <li className='text-white hover:text-amber-600 duration-1000 '>
                        <Link href="/signup">Sign up</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar;