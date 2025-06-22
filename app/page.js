"use client"
import React from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Marqee from './Components/Marqee';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import LocomotiveWrapper from './Components/LocomotiveWrapper';



const page = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <LocomotiveWrapper>
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marqee/>
      <About className="-mt-1"/>
      <Eyes/>
      <Cards/>
      <Footer/>
    </div>
    </LocomotiveWrapper>
  );
}

export default page;
