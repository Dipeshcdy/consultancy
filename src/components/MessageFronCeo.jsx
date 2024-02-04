import React, { useState } from 'react'
import img from "../assets/images/bg.avif";
const MessageFronCeo = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <>
      <section className="messageFromCeo-section">
        <div className="xl:h-[40vh] sm:h-[20vh] h-[25vh] relative">
          <div className='overflow-hidden w-full h-full'>
            <img className='w-full h-full object-cover object-center brightness-75' src={img} />
          </div>
          <div className="absolute flex top-0 bottom-0 right-0 left-0 wow animate__animated animate__zoomIn">
            <h2 className="mt-auto ml-auto mr-auto mb-10 md:text-5xl text-3xl font-bold uppercase text-white" >Message From CEO</h2>
          </div>
        </div>
        <div className="content relative overflow-hidden lg:py-32 py-20">
          <div className="grid lg:grid-cols-2 gap-10 ">

            <div className="">
              <div className=" relative mt-28  ml-auto w-[500px] h-[350px]">
                <div className="absolute left-0 w-full h-full  bottom-0 hover:-left-[50px]  duration-500 cursor-pointer hover:-bottom-[50px] z-20">
                  <img className="rounded-lg shadow-lg shadow-gray-300 object-cover object-center w-full h-full " src="https://mms.businesswire.com/media/20200218005271/en/773989/5/Odilon_Almeida_Headshot_1.jpg?download=1&_gl=1*tfqw0p*_ga*NDI3OTQ2Mzc0LjE2OTIzNTA1NTc.*_ga_ZQWF70T3FK*MTY5MjM1MDU1Ny4xLjAuMTY5MjM1MDU1Ny42MC4wLjA." alt="" />
                </div>
                <div className="absolute w-full h-full z-10 -left-[50px] -bottom-[50px]">
                  <img className="w-full h-full object-cover object-center" src="https://img.freepik.com/premium-vector/abstract-black-line-diagonal-striped-background-straight-lines-texture-vector-design_116849-728.jpg?w=740" alt="" />
                </div>
              </div>
            </div>
            <div className=" w-full message-div">
              <div className="border-2 border-r-0 z-20 border-[#2E65AF] bg-white relative pl-16 pr-44 py-20 rounded-3xl rounded-r-none">
                <h2 className=" heading text-5xl font-bold">Message From</h2>
                <h2 className=" heading text-5xl font-bold  text-red-600">CEO</h2>
                <p className="text-justify text-md mt-5">
                  At Surplus Education Consultancy, our commitment has always been to provide unparalleled support and guidance to students embarking on their educational journey in Japan and Korea. Our dedicated team is here to ensure your experience is not only academically enriching but also culturally immersive.
                </p>
                <div className="mt-2 text-right">
                  <h2 className=" font-semibold">Name Surname</h2>
                  <h2 className="text-sm">CEO, Surplus Educatin Consultancy</h2>
                </div>
                <div className="absolute w-[50px] bg-white z-10 h-[50px] border-b-2 border-r-2 -bottom-[26px] left-14 rotate-45 border-[#2E65AF]">

                </div>
              </div>
            </div>
          </div>
          <div className={`${isHovered1 ? '' : ''} hidden lg:block absolute circle w-[400px]  opacity-60 h-[400px] rounded-full bg-red-600 -top-[120px] bottom-0 -left-[120px]`}>
          </div>
          <div className="hidden lg:block absolute circle w-[400px] opacity-60 h-[400px] rounded-full bg-red-600 -bottom-[210px]  -right-[210px]">
          </div>
        </div>
      </section>
    </>
  )
}

export default MessageFronCeo