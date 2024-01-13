import React from 'react'
import { useSwiper } from 'swiper/react'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const SwiperNavButton = () => {
    const swiper=useSwiper();
  return (
    <div className='absolute lg:-left-1/4 top-5 text-white flex gap-5 z-10 lg:group-hover:left-5 transition-all duration-700'>
        <button className='bg-red-500 transition-all duration-500 ease-in-out border-2 border-red-500 hover:text-red-500 hover:bg-transparent md:text-3xl p-2 rounded-full' onClick={()=>swiper.slidePrev()}><FaAngleLeft /></button>
        <button className='bg-red-500 transition-all duration-500 ease-in-out border-2 border-red-500 hover:text-red-500 hover:bg-transparent md:text-3xl p-2 rounded-full' onClick={()=>swiper.slideNext()}><FaAngleRight /></button>
    </div>
  )
}

export default SwiperNavButton