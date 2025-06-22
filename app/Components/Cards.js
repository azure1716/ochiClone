import React from 'react';

const Cards = () => {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      className='relative z-30 h-screen w-full flex items-center justify-center bg-zinc-900'
    >
      <div className='h-[40vw] w-[90vw] flex items-center justify-around relative'>
        {/* Left Card */}
        <div className='h-[95%] w-[48%] group cursor-pointer relative'>
          {/* Overlay text for left card */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <h1 className='text-yellow-300 text-6xl md:text-8xl font-bold tracking-wider'>
              VISE
            </h1>
          </div>
          
          <div className='relative overflow-hidden rounded-3xl h-full w-full'>
            <img 
              src='https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png' 
              alt='Vise project'
              className='h-full w-full rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-3xl z-10'></div>
          </div>
        </div>
        
        {/* Right Card */}
        <div className='h-[95%] w-[48%] group cursor-pointer relative'>
          {/* Overlay text for right card */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <h1 className='text-yellow-300 text-6xl md:text-8xl font-bold tracking-wider'>
              FYDE
            </h1>
          </div>
          
          <div className='relative overflow-hidden rounded-3xl h-full w-full'>
            <img 
              src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png' 
              alt='Fyde project'
              className='h-full w-full rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-3xl z-10'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;