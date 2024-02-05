import React from 'react'
import img1 from '../assets/images/bg.avif'
import img2 from '../assets/images/japan1.avif'
import img3 from '../assets/images/japan2.avif'
import img4 from '../assets/images/japan3.avif'
const Gallery = () => {
    return (
        <>
            <div className='p-5'>
                <div className="mx-auto my-8 max-w-screen-sm lg:mb-16 text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Gallery</h2>
                    <p className="font-light text-gray-500 sm:text-xl">Explore the Journey, Capture the Moments with Surplus Education Consultancy's Gallery. </p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className='h-96 overflow-hidden'>
                        <img class="h-full w-full object-cover object-center rounded-lg hover:scale-110 transition-all duration-500 ease-linear" src={img4} alt="" />
                    </div>
                    <div className='row-span-2 overflow-hidden'>
                        <img class="h-full w-full object-cover object-center rounded-lg hover:scale-110 transition-all duration-500 ease-linear" src={img2} alt="" />
                    </div>
                    <div className='h-96 overflow-hidden'>
                        <img class="h-full w-full object-cover object-center rounded-lg hover:scale-110 transition-all duration-500 ease-linear" src={img3} alt="" />
                    </div>
                    <div className='row-span-2 overflow-hidden'>
                        <img class="h-full w-full object-cover object-center rounded-lg hover:scale-110 transition-all duration-500 ease-linear" src={img4} alt="" />
                    </div>
                    <div className='row-span-2 overflow-hidden'>
                        <img class="h-full w-full object-cover object-center rounded-lg hover:scale-110 transition-all duration-500 ease-linear" src={img1} alt="" />
                    </div>
                    <div className='row-span-2 overflow-hidden'>
                        <img class="h-full w-full object-cover object-center rounded-lg hover:scale-110 transition-all duration-500 ease-linear" src={img2} alt="" />
                    </div>
                    <div className='h-96 overflow-hidden'>
                        <img class="h-full w-full object-cover object-center rounded-lg hover:scale-110 transition-all duration-500 ease-linear" src={img3} alt="" />
                    </div>
                    <div className='h-96 overflow-hidden'>
                        <img class="h-full w-full object-cover object-center rounded-lg hover:scale-110 transition-all duration-500 ease-linear" src={img4} alt="" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Gallery