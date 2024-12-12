import React from 'react';
import Link from 'next/link';
import Hamburger from './hamburger-spin';


function Navbar() {
  return (
    <header className='bg-cover bg-center' >
        <nav className="flex justify-between items-center text-white backdrop-blur-sm bg-opacity-30 p-6 rounded-bl-3xl rounded-br-3xl overflow-hidden border-b border-white/30">

        <div className="flex">
          <Link href="/" className="m-4">
            <img
                src="/rocket.png" 
                alt="Home"
                className="h-8 w-auto" 
                />
          </Link>
        </div>

        <div className="flex justify-center flex-grow">
          <Link href="/about" className="m-4">
            About
          </Link>
          <Link href="/cars" className="m-4">
            Cars
          </Link>
          <Link href="/gallery" className="m-4">
            Gallery
          </Link>
        </div>

        <div>
          <Link href="/login" className="m-4 flex justify-between">
          <img
                src="/user.png" 
                alt="Login"
                className="h-8 w-auto" 
                />
          </Link>
        </div>
        <div>
         
        </div>
      </nav>
    </header>
  )
}

export default Navbar;