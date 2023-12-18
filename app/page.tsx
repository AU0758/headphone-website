
'use client'

import Image  from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [headphones, setHeadphones] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 180;
      setHeadphones(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const imageLoader = () => {
    return `/headphone/${Math.round(headphones)}.png`
  }

  console.log(`/headphone/${Math.round(headphones)}.png`);

  
  // Use dynamic import for the image path
  const imagePath = `/headphone/${Math.round(headphones)}.png`;

  return (
    <main className='h-[100vh] w-[100vw] sticky top-0 flex flex-col justify-center items-center'>  
            {/* Use the next/image component for optimized image loading */}
      <Image
      src={imagePath}
      alt={`Headphone image ${Math.round(headphones)}`}
      width={1920} // specify the actual width of your image
      height={1080} // specify the actual height of your image
      className='w-[calc(100vw-7px)] absolute z-10'
      loader={imageLoader}
      priority
      />
      <div className='w-[100vw] flex flex-col items-end'>
        <div className='flex flex-col items-center'>
          <h1 className={`title text-center w-[7ch] m-[5rem] transition-fade-in ${headphones >= 19 ? 'hidden' : ''}`}>IMMERSE IT IN</h1>
          <p className={`buy transition-fade-in bg-[red] w-[15rem] rounded-full  ${headphones >= 19 ? 'hidden' : ''}`}>BUY</p>
        </div>
      </div>
      <p className={`w-[15ch] transition-fade-in ${headphones <= 16 ? 'hidden' : headphones >= 25 && headphones <= 40 ? 'absolute right-0 bottom-[10%] m-24' : 'hidden'}`}><b className='font-300'>Noise reduction technology</b> for the Best immersion.</p>
      <p className={`w-[18ch] transition-fade-in ${headphones <= 16 ? 'hidden' : headphones >= 25 && headphones <= 40 ? 'absolute left-0 w-[22ch] text-left m-24' : 'hidden'}`}><b  className='font-300'>Talk</b> instead of typing with our <b  className='font-300'>IA powered</b> assistent. <b  className='font-300'>Just ask.</b></p>
      
      <p className={`w-[21ch] transition-fade-in ${headphones <= 16 ? 'hidden' : headphones >= 50 && headphones <= 70 ? 'absolute right-0 bottom-[10%] m-24' : 'hidden'}`}>Revolutionary <b className='font-300'>charging technology</b>. Stay <b className='font-300'>connected</b>.</p>
      <p className={` transition-fade-in ${headphones <= 16 ? 'hidden' : headphones >= 50 && headphones <= 70 ? 'absolute left-0 top-0 w-[20ch] text-left m-24' : 'hidden'}`}><b className='font-300'>Charge in minutes</b> and <b className='font-300'>use for days.</b></p>
      <p className={` transition-fade-in ${headphones <= 16 ? 'hidden' : headphones >= 50 && headphones <= 70 ? 'absolute left-0 top-0 w-[20ch] text-left m-24' : 'hidden'}`}><b className='font-300'>Charge in minutes</b> and <b className='font-300'>use for days.</b></p>

      <div className='w-[100vw] flex flex-col items-center'>
        <p className={`text-center w-[100vw] text-[200px] transition-fade-in ${headphones <= 16 ? 'hidden' : headphones >= 70 && headphones <= 100 ? '' : 'hidden'}`}>Connect <b  className='font-300'>Anywhere</b> on <b  className='font-300'>anything</b>.</p>
        <p className={`text-center w-[100vw] text-[50px] transition-fade-in ${headphones <= 16 ? 'hidden' : headphones >= 70 && headphones <= 100 ? '' : 'hidden'}`}>Integrated Adapters for all your devices.</p>
      </div>      
      <p className={` transition-fade-in ${headphones <= 16 ? 'hidden' : headphones >= 100 && headphones <= 160 ? 'absolute right-0 bottom-0 w-[15ch] text-[150px] text-right m-24' : 'hidden'}`}><b  className='font-300'>2 GB</b> of <b  className='font-300'>memory. Never stop vibing.</b>
      </p>
      <div className='w-[100vw] flex flex-col items-center'>
        <p className={`absolute text-center w-[100vw] text-[150px] tstroke transition-fade-in ${headphones <= 16 ? 'hidden' : headphones >= 160 ? 'transition-fade-out' : 'hidden'}`}><b className='font-300'>Bluethoth Integrated.</b></p>
        <p className={`text-center w-[100vw] text-[150px] transition-fade-in ${headphones <= 16 ? 'hidden' : headphones >= 160 ? '' : 'hidden'}`}><b className='font-300'>Bluethoth Integrated.</b></p>
      </div>  


    </main>
  )
}