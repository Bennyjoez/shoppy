import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => (
  <div className="h-full flex items-center space-x-5 bg-blue-950">
    <Link href="/">
      <Image
        src="/shoppycolored.png"
        width={120}
        height={120}
        alt="logo"
      />
    </Link>
    <div className="w-3/4 flex justify-center items-center text-white text-xl">
      <Link href="/products" className="m-2 font-bold active:text-orange-400 hover:underline hover:text-orange-400 underline-offset-4">Products</Link>
      <Link href="/categories" className="m-2 font-bold active:text-orange-400 hover:underline hover:text-orange-400 underline-offset-4">Categories</Link>
      <Link href="/contacts" className="m-2 font-bold active:text-orange-400 hover:underline hover:text-orange-400 underline-offset-4">Contacts</Link>
    </div>
    <Link href="/cart" className="active:text-orange-400 font-bold text-white active:text-orange-400 hover:text-orange-400 hover:border-orange-400 underline-offset-4 border p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </Link>
  </div>
);

export default Navbar;
