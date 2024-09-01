import Link from 'next/link'
import React from 'react'

import {  Instagram, Menu, Twitter } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from '../mode-toggle';


const Header = () => {
  return (
    <header className='bg-slate-600 py-3 w-screen '>
      <div className=' px-1 sm:px-4 md:px-8 h-auto w-auto items-center  '>
        <div id='log-nav-div' className='flex flex-col items-center h-auto w-full sm:justify-center justify-between sm:gap-2 lg:flex-row  lg:justify-between '>


          <div id='logo-menu-div' className='flex flex-row justify-between items-center gap-10 sm:gap-0 w-full px-3 sm:px-0 sm:w-auto '>
            <div id='logo-div' className='flex flex-row justify-start items-center gap-2 '>
              <Image src="/logo.webp" alt="logo" width={64} height={64} className="rounded-xl" />
              <span className='text-slate-100 text-3xl sm:text-4xl font-medium '>Amal</span>
              <span className='text-slate-100 text-3xl sm:text-4xl font-medium '>Library</span>
            </div>
            <div className='flex flex-row justify-end items-center gap-2 '>
            <ModeToggle />
            <Menu className='sm:hidden text-slate-100' width={32} height={32}  />
            </div>
          </div>


          <div id='nav-div' className='flex flex-row justify-end items-center'>
            <nav className=' hidden sm:flex '>
              <ul className='flex justify-end items-center text-slate-100 text-md font-medium '>
                <li>
                  <Link href='#'><span className=' px-3'>Home</span></Link>
                </li>
                <li className=''>
                  <Link href='#'> <span className=' px-3'>About</span></Link>
                </li>
                <li>
                  <Link href='#'><span className=' px-3'>Digital</span></Link>
                </li>
                <li>
                  <Link href='#'><span className=' px-3'>Research</span></Link>
                </li>
                <li>
                  <Link href='#'><span className=' px-3'>Events</span></Link>
                </li>
                <li>
                  <Link href='#'><span className=' px-3'>Quick Links</span></Link>
                </li>
                <li>
                  <Link href='#'><span className=' px-3'>Contact Us</span></Link>
                </li>


              </ul>
            </nav>
            <div className='flex flex-row '>

              <div className=' py-3 w-[1px] mr-3 bg-slate-700 hidden sm:block' />
              <div className='flex-row gap-3 items-center hidden  sm:flex'>
                <div className=''>
                  <a target='_blank' rel="noopener noreferrer" href={'https://www.instagram.com/'}><Instagram color='#fff' cursor={'pointer'} /></a>
                </div>
                <div>
                  <a target='_blank' rel="noopener noreferrer" href={'https://www.instagram.com/'}><Twitter color='#fff' cursor={'pointer'} /></a>
                </div>
              </div>
            </div>
          </div>

        </div>





      </div>

    </header>
  )
}

export default Header