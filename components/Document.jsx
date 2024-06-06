"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
const Document = () => {
  return (
    <div className='custom-class flex'>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-[300px] relative custom-phone'
      >
        <Image src={'/assets/phone-1.png'} width={300} height={200} />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='flex flex-col items-end text-end gap-2 custom-text'>
        <span className=' text-blue-500 text-sm'>DOCUMENT SCANNER</span>
        <span className='text-lg'>Scan with Ease</span>
        <span className='text-sm'>Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.</span>
        <span className='px-4 py-2 border-gray-100 border block w-fit cursor-pointer'> Learn More</span>
      </motion.div>
    </div>
  )
}

export default Document;