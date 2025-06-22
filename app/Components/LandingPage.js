"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    // Fixed: Added relative positioning and proper z-index
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="-.5" 
      className='relative z-10 pt-1 min-h-[100vh] bg-zinc-900'
    >
      <div className='mt-40 ml-18'>
        {["We Create", "Eye-Opening","Presentations"].map((item,index)=>{
            return <div className='flex items-center' key={index} >
              {index===1 && (
                <motion.div 
                  initial={{width:0}} 
                  animate={{width:"145px"}} 
                  transition={{ease:[0.4, 0, 0.2, 1],duration:1}} 
                  className='h-[92px] w-[145px] bg-red-600 mt-3.5 mr-2 rounded-md'
                />
              )}
              <div className='uppercase font-semibold text-[130px] tracking-tighter leading-none'>
                <h1 className='font-Oswald_Bold'>{item}</h1>
              </div>
            </div>
        })}
      </div>

      {/* Fixed: Better spacing and positioning */}
      <div className='border-t-[1.5px] border-zinc-800 flex justify-between px-20 mt-80 py-6 box-border'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>
          <p key={index} className='text-xl'>{item}</p>
        )}

        <div className='flex -mt-2 justify-center gap-2'>
          <div className='start rounded-4xl border-[1.5px] border-zinc-500 px-6 py-2 h-12 flex items-center'>
            START THE PROJECT
          </div>
          <div className='rounded-full border-[1.5px] border-zinc-500 flex items-center justify-center rotate-[45deg] p-3.5 h-12'> 
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;