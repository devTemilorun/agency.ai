import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {
    const ServicesData = [
        {
            tittle: "Advertising",
            description: "We turn bold ideas into powerful digital solutions that connect, engage...",
            icon: assets.ads_icon
        },
        {
            tittle: "Content Marketing",
            description: "We turn bold ideas into powerful digital solutions that connect, engage...",
            icon: assets.marketing_icon
        },
        {
            tittle: "Content Writing",
            description: "We turn bold ideas into powerful digital solutions that connect, engage...",
            icon: assets.content_icon
        },
        {
            tittle: "Social Media",
            description: "We turn bold ideas into powerful digital solutions that connect, engage...",
            icon: assets.social_icon
        },
        
    ]
  return (
    <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{staggerChildren:0.2}}
        viewport={{once:true}}
        id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>        
      <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />
      <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward. '/>
      <div className='flex flex-col md:grid grid-cols-2'>
        {ServicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Services
