import Image from 'next/image'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const handleScroll = () => {
      // You can access scroll information here
      const scrollY = window.scrollY;
      console.log('Vertical scroll position: ', scrollY);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headphones = {
    backgroundImage: '@/public/headphones/'+ (Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)) +'.png',
  }

  return (
    <main style={headphones}>
      
    </main>
  )
}
