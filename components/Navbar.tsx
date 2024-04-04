'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/app/constants';
import Button from './Button';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className='flex-between max-container padding-container relative z-30 py-5'>
      <div className='flex items-center justify-between w-full'>
        <Link href='/'>
          <Image src='hilink-logo.svg' alt='logo' width={74} height={29}/>
        </Link>
        <ul className={`navbar-links h-full gap-12 lg:flex justify-end ${showNavbar ? 'max-h-full opacity-100 transition-transform duration-300 ease-out' : 'max-h-0 opacity-0 invisible'}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className={`transform ${showNavbar ? 'translate-x-0' : '-translate-x-full'}`}>
              <Link href={link.href} className='regular-16 text-gray-50 flexcenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='lg:flexCenter hidden'>
          <Button type='button' title='login' icon='/user.svg' variant='btn_dark_green'/>
        </div>
        
        <div className="menu-icon lg:hidden" onClick={toggleNavbar}>
          <Image 
            src='/menu.svg' 
            alt='menu' 
            width={32} 
            height={32} 
            className={`inline-block cursor-pointer transform transition-transform duration-300 ease-out ${showNavbar ? 'rotate-90' : ''}`}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
