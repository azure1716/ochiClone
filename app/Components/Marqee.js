"use client";
import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    // Fixed: Added proper z-index and positioning
    <div 
      data-scroll 
      data-scroll-section 
      
      className='relative z-20 bg-zinc-900'
    >
      <div className='bg-[#004D43] h-[50vh] rounded-tl-3xl rounded-tr-3xl w-full flex items-center'>
        <div className='flex items-center border-t border-b text-[35vh] overflow-hidden font-bold whitespace-nowrap leading-none tracking-[-0.1em] w-full'>
          <motion.h1 
            initial={{x:0}} 
            animate={{x:"-100%"}} 
            transition={{repeat:Infinity,duration:10,ease:"linear"}} 
            className='m-0 p-0 pl-[2vw]'
          >
            WE ARE OCHI
          </motion.h1>
          <motion.h1 
            initial={{x:0}} 
            animate={{x:"-100%"}} 
            transition={{repeat:Infinity,duration:10,ease:"linear"}} 
            className='m-0 p-0'
          >
            WE ARE OCHI
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;