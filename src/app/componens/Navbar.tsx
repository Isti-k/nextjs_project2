import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
        <nav className='flex justify-center bg-opacity-5 p-6 bg-transparent'>
            <Link href={"/page"} className='m-4'>
                Home
            </Link>
            <Link href={"/About"} className='m-4'>
                About
            </Link>
            <Link href={"/Cars"} className='m-4'>
                Cars
            </Link>
            <Link href={"/Gallery"} className='m-4'>
                Gallery
            </Link>
            <Link href={"/login"} className='m-4'>
                login
            </Link>
        </nav>
    </div>
  )
}

export default Navbar;