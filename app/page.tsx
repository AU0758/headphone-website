'use client'



import Image  from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [headphones, setHeadphones] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 150;
      setHeadphones(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(`/headphone/${Math.round(headphones)}.png`);

  return (
    <main className='h-[100vh] w-[100vw] sticky top-0 flex items-center'>  
      <img src={`/headphone/${Math.round(headphones)}.png`} alt={`/headphone/${Math.round(headphones)}.png`} className='w-[calc(100vw-7px)] absolute' loading='lazy'/>
      <div className='w-[100vw] flex flex-col items-end'>
        <div className='flex flex-col items-center'>
          <h1 className={`title text-center w-[7ch] m-[5rem] transition-all ${headphones >= 19 ? 'hidden' : ''}`}>IMMERSE IT IN</h1>
          <p className={`buy bg-[red] w-[15rem] rounded-full  ${headphones >= 19 ? 'hidden' : ''}`}>BUY</p>
        </div>
      </div>
      <p className={` ${headphones <= 16 ? 'hidden' : headphones >= 29 ? '' : 'hidden'}`}>Noise reduction technology for the Best immersion.</p>
    </main>
  )
}
