import React from 'react'
import ContainerScroll from './ui/container-scroll-animation'
import image from "../assets/hero.png"
import { FlipWords } from './ui/flip-words';
import '../App.css'

function Hero() {
  return (
    <>
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="flex flex-col overflow-hidden bg-transparent mt-0 relative">
        <ContainerScroll
          titleComponent={
            <>
              <FlipWordsDemo/>
              <h1 className="cinzel-bold-header mt-28">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Ideas to Take Shape
                </span>
              </h1>
            </>
          }
        >
          <img
            src={image}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
        
      </div>

      
    </>
  )
}


export function FlipWordsDemo() {
  const words = ["Ui/Ux", "Mern Stack Website", "React Native Apps", "Futter App"];
 
  return (
    <div className="h-[10rem] flex flex-col justify-center items-center px-4 relative">
      <div className="text-5xl mx-auto cinzel-bold-header">
        We Build
        <FlipWords words={words} /> <br />
        One place for all services
      </div>
      <div className='flex gap-[30px] mt-[50px]'>
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Login
        </button>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Explore
        </button>

      </div>
    </div>
  );
}

export default Hero




        // Button code
        
  