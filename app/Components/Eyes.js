"use client"
import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Added dependency array

  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="-.8" 
      className='relative z-10 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] w-full h-screen bg-cover bg-center flex justify-center items-center'
    >
      <div className='flex items-center justify-center gap-16'>
        <div className='bg-white h-[250px] rounded-full w-[250px] flex items-center justify-center'>
          <div className='bg-black h-[160px] w-[160px] rounded-full flex items-center justify-center'>
            <div 
              style={{ transform: `rotate(${rotate}deg)` }} 
              className='line h-[50px] w-full flex items-center'
            >
              <div className='bg-white h-[30px] w-[30px] rounded-full'></div>
            </div>
          </div>
        </div>
        
        <div className='bg-white h-[250px] rounded-full w-[250px] flex items-center justify-center'>
          <div className='bg-black h-[160px] w-[160px] rounded-full flex items-center justify-center'>
            <div 
              style={{ transform: `rotate(${rotate}deg)` }} 
              className='line h-[50px] w-full flex items-center'
            >
              <div className='bg-white h-[30px] w-[30px] rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;