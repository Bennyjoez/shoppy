'use client'
import React from 'react'
import Link from 'next/link'

const MobileMenuLinks = () => {
  const links = ['Products', 'Categories', 'Contacts'];
  return (
    <div id='mobile-menu' className="min-h-full absolute right-0 z-10 flex flex-col text-center transition-all w-1/2 bg-blue-950 text-white hidden md:hidden">
      <div
      className='text-right mr-4 active:text-red-400'
        onClick={() => {
          const menu = document.querySelector('#mobile-menu');
          menu.classList.toggle('hidden');
        }}
      >X</div>
      {links.map((link, i) => {
        return (
          <Link
            href={`/${link.toLowerCase()}`}
            key={i}
            className="m-2 font-bold active:text-orange-400 hover:underline hover:text-orange-400 underline-offset-4"
            onClick={() => {
              const menu = document.querySelector('#mobile-menu');
              menu.classList.toggle('hidden');
            }}
          >
            {link}
          </Link>
        )
      })}
    </div>
  )
}

export default MobileMenuLinks