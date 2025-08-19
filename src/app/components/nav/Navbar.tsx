"use client"
import React from 'react'
import { navLinks } from '../../../../constants'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'

const Navbar = () => {
    // useGSAP(()=>{
    //     const navTween = gsap.timeline({
    //         scrollTrigger:{
    //             trigger:'nav',
    //             start:'bottom up'   //bottom of navbar reaches the top of the view port then transition will start
    //         }
    //     });
    //     navTween.fromTo('nav',{backgroundColor:'transparent'},
    //         {
    //             backgroundColor:'#FFFFFF4D', 
    //             backdropFilter:'blur(10px)',
    //             duration:1,
    //             ease:'power1.inOut'
    //         }
    //     );
    // })
  return (
    <nav className='md:px-5 fixed z-50 w-full'>
        <div className='flex justify-between items-center backdrop-blur-[10px]'>
            <a href="#home" className='logo flex items-center gap-2 relative aspect-[2477/977] w-[170px] h-[70px]'>
                <Image src="/assets/logo.png" alt='logo' fill/>
            </a>

            <div className='flex items-center justify-center gap-5 px-5'>
                <Link href="https://www.doorvi.co/shop"><button className='rounded-lg px-4 py-1 text-white bg-gradient-to-r from-blue-400 to-blue-600 hidden md:block cursor-pointer' >Shop</button></Link>
                <ul className='flex gap-2 md:gap-5 text-[16px] leading-[20px] text-[#555555] font-medium '>
                    {navLinks.map((link)=>(
                        <li key={link.id}>
                            <Link href={`${link.link}`} className='hover:text-[#242424]'>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar