"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
const Export = () => {
    return (
        <div className='custom-class flex'>
            <motion.div className='relative w-[300px] custom-phone'
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={'/assets/phone-4.png'} width={300} height={200} />

                <motion.div
                    className='absolute bottom-6 left-[-20px]'
                    initial={{ y: 300, x: 0, opacity: 0 }}
                    animate={{ y: 0, x: -20, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/Vector.png'} width={25} height={200} />
                </motion.div>

                <motion.div
                    className='absolute bottom-2 left-[-10px]'
                    initial={{ y: 300, x: 0, opacity: 0 }}
                    animate={{ y: 0, x: -20, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/pdf.png'} width={110} height={200} />
                </motion.div>
                <motion.div
                    className='absolute bottom-12 left-[70px]'
                    initial={{ y: 300, x: 0, opacity: 0 }}
                    animate={{ y: 0, x: 30, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/jpg.png'} width={100} height={200} />
                </motion.div>
                <motion.div
                    className='absolute bottom-2 right-[10px]'
                    initial={{ y: 300, x: 0, opacity: 0 }}
                    animate={{ y: 0, x: 50, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.5 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/txt.png'} width={110} height={200} />
                </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='flex flex-col items-end text-end gap-2 custom-text'>
                <span className=' text-blue-500 text-sm'>EXPORT & SHARE</span>
                <span className='text-lg'>All-Round Conversion</span>
                <span className='text-sm'>Export your scans as PDF,JPG,ZIP,TXT and Word.</span>
                <span className='px-4 py-2 border-gray-100 border block w-fit cursor-pointer'> Learn More</span>
            </motion.div>
        </div>
    )
}

export default Export