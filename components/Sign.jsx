"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
const Sign = () => {
    return (
        <div className='custom-class flex'>
            <motion.div className='relative w-[300px] custom-phone'
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={'/assets/phone-2.png'} width={300} height={200} />
                <motion.div
                    className='absolute bottom-10 left-[-50px]'
                    initial={{ width: 0, height: 0, opacity: 0, transformOrigin: 'center' }}
                    animate={{ width: 100, height: 100, opacity: 1, transformOrigin: 'center' }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/badge-1.png'} width={250} height={250} />
                </motion.div>
                <motion.div
                    className='absolute bottom-16 right-[-50px]'
                    initial={{ width: 0, height: 0, opacity: 0, transformOrigin: 'center' }}
                    animate={{ width: 100, height: 100, opacity: 1, transformOrigin: 'center' }}
                    transition={{ duration: 1, delay: 1.5 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/badge-2.png'} width={200} height={200} />
                </motion.div>

            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='flex flex-col items-end text-end gap-2 custom-text'>
                <span className=' text-blue-500 text-sm'>SIGN & STAMP</span>
                <span className='text-lg'>One-Tap Focus</span>
                <span className='text-sm'>Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!</span>
                <span className='px-4 py-2 border-gray-100 border block w-fit cursor-pointer'> Learn More</span>
            </motion.div>
        </div>
    )
}

export default Sign