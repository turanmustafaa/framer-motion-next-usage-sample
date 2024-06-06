"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
const Batch = () => {
    return (
        <div className='custom-class flex'>
            <motion.div className='relative w-[300px] custom-phone'
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={'/assets/phone-3.png'} width={300} height={200} />

                <motion.div
                    className='absolute top-24 left-[20px]'
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/asset.png'} width={230} height={150} />
                </motion.div>
                <motion.div
                    className='absolute top-[106px] left-[16px]'
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/asset.png'} width={240} height={150} />
                </motion.div>
                <motion.div
                    className='absolute top-[120px] left-[12px]'
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/asset.png'} width={250} height={150} />
                </motion.div>

            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='flex flex-col items-end text-end gap-2 custom-text'>
                <span className=' text-blue-500 text-sm'>BATCH SCANNING</span>
                <span className='text-lg'>Multiple Page Scan</span>
                <span className='text-sm'>Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.</span>
                <span className='px-4 py-2 border-gray-100 border block w-fit cursor-pointer'> Learn More</span>
            </motion.div>
        </div>
    )
}

export default Batch