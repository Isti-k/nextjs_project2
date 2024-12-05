import React from 'react';
import Link from 'next/link';


function Navbar() {
  return (
    <div>
        <nav className='flex justify-center text-white backdrop-blur-sm bg-opacity-30 p-6 rounded-bl-3xl rounded-br-3xl overflow-hidden'>
            <Link href="/" className='m-4 '>
                Home
            </Link>
            <Link href="/about" className='m-4'>
                About
            </Link>
            <Link href="/cars" className='m-4'>
                Cars
            </Link>
            <Link href="/gallery" className='m-4'>
                Gallery
            </Link>
            <Link href="/login" className='m-4'>
                Login
            </Link>
        </nav>
    </div>
  )
}

export default Navbar;