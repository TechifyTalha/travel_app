import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex-center mb-24'>
    <div className='padding-container max-container flex w-full flex-col gap-14'>
    <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
      <Link href='/' className='mb-10'>
      <Image src='hilink-logo.svg' alt='logo' width={74} height={29}/>
      </Link>
     <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
      {FOOTER_LINKS.map((coulumns)=>(
        <FooterCoulumn title={coulumns.title}>
       <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
        {coulumns.links.map((link)=>(
        <Link href='/' key={link}>
          {link}
        </Link>
        ))}
       </ul>
        </FooterCoulumn>
      ))}
      <div className='flex flex-col gap-5'>
        <FooterCoulumn title={FOOTER_CONTACT_INFO.title}>
       {FOOTER_CONTACT_INFO.links.map((link)=>(
        <Link href='/' key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
        <p className='whitespace-nowrap'>
          {link.label}
        </p>
        <p className='medium-14 whitespace-nowrap text-blue-70'>
          {link.value}
        </p>
        </Link>
       ))}
        </FooterCoulumn>
      </div>
      <div className='flex flex-col gap-5'>
        <FooterCoulumn title={SOCIALS.title}>
          <ul className='regular-14 flex gap-4 text-gray-30'>
        {SOCIALS.links.map((link)=>(
          <Link href='/' key={link}>
            <Image src={link} alt='logo' width={24} height={24}/>
          </Link>
        ))}
        </ul>
         </FooterCoulumn>
      </div>
     </div>
    </div>
    <div className='border bg-gray-20'>
      <p className='regular-14 w-full text-center text-gray-10'>
        HILINK | 2022. All Rights Reserved
      </p>
    </div>
    </div>
    </footer>
  )
}

type FooterCoulumnProps= {
  title: string
  children: React.ReactNode
}
const FooterCoulumn=({title, children}: FooterCoulumnProps )=>{
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer
