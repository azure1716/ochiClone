import React from 'react';

const About = () => {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      className='relative z-20 bg-[#004D43]'
    >
      <div className='bg-[#cdea68] text-black rounded-tr-3xl rounded-tl-3xl'>
        <div className='flex'>
          <h1 className='text-[5vh] py-[10vh] px-[4vw] tracking-tight leading-tight font-semibold'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
          </h1>
          <div className='w-[30vw] h-[10vh]'></div>
        </div>

        <div className='border-t pb-[8vh] pt-[3vh] px-[4vw] flex justify-between border-black'>
          <div>
            <h1 className='text-[5vh]'>Our approach:</h1>
            <button className='bg-black text-white px-8 py-5 rounded-full mt-6 flex gap-8 text-lg items-center hover:bg-gray-800 transition-colors'>
              READ MORE
              <div className='bg-white h-3 w-3 rounded-full'></div>
            </button>
          </div>
          <div className='h-[60vh] w-[45vw] rounded-3xl bg-[#b8cf61] overflow-hidden'>
            <img 
              src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' 
              alt='About us'
              className='h-full w-full rounded-3xl object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;