'use client'
import React, { useState } from 'react'

const MenuIcon = () => {
  const [open, setOpen] = useState(false);
  const menuCont = document.querySelector('#mobile-menu');
  console.log(menuCont);
  return (
    <button
      className='menuIcon md:hidden text-white hover:text-orange-400'
      onClick={() => {
        const menu = document.querySelector('#mobile-menu')
        menu.classList.toggle('hidden')
        setOpen(prev => !prev)
      }}
    >
      {open || !menuCont?.classList.contains('hidden')
        ?
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" className="w-6 h-6">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>}
    </button>
  )
}

export default MenuIcon