import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] bg-[#EEEEEE] rounded-3xl mt-4 overflow-hidden'>
        <div className='py-10 px-5 lg:py-40 lg:px-20 relative'>
          <h3 className='text-3xl font-semibold'>Beats Solo</h3>
          <h2 className='text-5xl font-bold mt-2'>Wireless</h2>
          <h1 className='text-[52px] lg:text-[230px] font-extrabold uppercase text-white'>Headphone</h1>
          <Button variant='outline' className='bg-[#F42C37] text-white px-6 py-4 rounded-full'>Shop By Category</Button>
          <div className='w-[600px] h-full flex md:hidden items-center justify-center -ml-32'>
            <Image src='/assets/headphones.png' alt='line' width={1000} height={1000} />
          </div>
        </div>
        <div className='hidden md:flex justify-center items-center absolute inset-0 '>
          <div className='w-[1500px]'>
            <Image src='/assets/headphones.png' alt='hero' width={1500} height={500} />
          </div>
        </div>
    </div>
  )
}

export default Hero