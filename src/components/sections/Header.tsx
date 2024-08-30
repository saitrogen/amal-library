import Link from 'next/link'
import React from 'react'

import { Icon, Instagram, Twitter } from 'lucide-react';
const Header = () => {
  return (
    <header className='bg-slate-600'>
      <div className='px-8 '>

        <nav className='flex justify-end items-center h-16 '>
          <ul className='flex justify-end items-center'>
            <li>
              <Link href='#'><span className='text-slate-100 text-sm font-medium px-3'>Home</span></Link>
            </li>
            <li>
              <Link href='#'><span className='text-slate-100 text-sm font-medium px-3'>Catalog</span></Link>
            </li>
            <li>
              <Link href='#'><span className='text-slate-100 text-sm font-medium px-3'>Servies</span></Link>
            </li>
            <li>
              <Link href='#'><span className='text-slate-100 text-sm font-medium px-3'>Research</span></Link>
            </li>
            <li>
              <Link href='#'><span className='text-slate-100 text-sm font-medium px-3'>Account</span></Link>
            </li>

          </ul>
          <div className=' py-3 w-[1px] mx-1 mr-3 bg-slate-700' />
          <div className='flex justify-end items-center gap-3'>
            <div className=''>
              <a target='_blank' rel="noopener noreferrer" href={'https://www.instagram.com/'}><Instagram color='#fff'  cursor={'pointer'} /></a>
            </div>
            <div>
              <a target='_blank' rel="noopener noreferrer" href={'https://www.instagram.com/'}><Twitter color='#fff'  cursor={'pointer'} /></a>
            </div>
          </div>
        </nav>



        <div className=''></div>
      </div>
    </header>
  )
}

export default Header