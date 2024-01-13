"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ChevronLeft, ChevronRight } from "lucide-react"

function HeroBanner() {
  return (
    <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto '>
        <Carousel 
            autoPlay={true} 
            infiniteLoop={true} 
            showThumbs={false}
            showIndicators={false} 
            showStatus={false}
            renderArrowPrev={(clickHandler, hasNext) => (
                <div
                    onClick={clickHandler}
                    className='absolute right-31 md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
                >
                    <ChevronRight className='h-12 w-12 rotate-180'/>
                </div>
            )}
            renderArrowNext={(clickHandler, hasPrev) => (
                <div
                    onClick={clickHandler}
                    className='absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
                >
                    <ChevronLeft className='h-12 w-12 rotate-180'/>
                </div>
            )}
        >
            <div className='h-[550px] relative'>
                <img src="/products/canvas-tote-bag-1.jpg" className='w-full h-full object-contain'/>
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium  cursor-pointer hover:opacity-90'>
                    Shop Now
                </div>
            </div>
            <div className='h-[550px]'>
                <img src="/products/khaki-tote-bag-1.jpg" className='w-full h-full object-contain'/>
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium  cursor-pointer hover:opacity-90'>
                    Shop Now
                </div>
            </div>
            <div className='h-[550px]'>
                <img src="/products/dock-sunglasses-1.jpg" className='w-full h-full object-contain'/>
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium  cursor-pointer hover:opacity-90'>
                    Shop Now
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default HeroBanner