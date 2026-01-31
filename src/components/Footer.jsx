import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Footer = ({theme}) => {

    const footerLinks = [
        {
            type: 'whatsApp',
            label: 'WhatsApp',
            url: `https://wa.me/2347031225674?text=Hello!%20I'm%20interested%20in%20your%20services.`,
            displayImage: assets.whatsapp_icon
        },
        {
            type: 'email',
            label: 'Email',
            url: `mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss...`,
            displayImage: assets.gmail_icon
        },
        {
            type: 'Linkedin',
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324',
            displayImage: assets.linkedin_icon
        },
    ]

  return (
    <motion.div
        initial={{ opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
      {/* -------Footer top -------- */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <motion.div
            initial={{ opacity:0, y:-30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.2}}
            viewport={{once:true}}
         className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-44' alt="" />
            <p className='max-w-md'>
                From strategy to execution, we craft digital solutions that move your business forward.
            </p>
            <ul className='flex gap-8'>
                <li><a className='hover:text-primary' href="#hero">Home</a></li>
                <li><a className='hover:text-primary' href="#services">Services</a></li>
                <li><a className='hover:text-primary' href="#our-work">Our Work</a></li>
                <li><a className='hover:text-primary' href="#contact-us">Contact Us</a></li>
            </ul>
        </motion.div>
        <motion.div
            initial={{ opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.3}}
            viewport={{once:true}}
         className='text-gray-600 dark:text-gray-400'>
            <h3 className='font-semibold'>Subscribe to our Newsletter</h3>
            <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly</p>
           <div className='flex gap-2 text-sm'>
            <input type="email" placeholder="Enter your email" className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' />
            <button className='bg-primary text-white rounded px-6'>Subscribe</button>
           </div>
        </motion.div>
      </div>
      <hr className='my-6 border-gray-300 dark:border-gray-600' />


      {/* ------footer bottom-------- */}
      <motion.div
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.4}}
        viewport={{once:true}}
       className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
        <p>Copyright 2026 - agenct.ai -- dev.Temilorun.  All Right Reserved</p>
        <div className='flex items-center justify-between gap-4'>
            {footerLinks.map((link)=>(
                <a key={link.label} href={link.url} className='w-6 h-8' target='_blank' rel='noopener noreferrer' > <img src={link.displayImage} alt="" /> </a>
            ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
