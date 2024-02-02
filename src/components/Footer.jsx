import React from 'react'
import logo from '../assets/images/logo.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="text-gray-600 body-font md:px-20 px-5">
        <div className="container px-5 py-24 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className='w-[200px]'>
              <img className='w-full' src={logo} alt="" />
            </div>
            <p className="mt-2 text-sm text-gray-500">Surplus Education Consultancy is a premier provider of abroad study services, offering comprehensive support and guidance for students interested in studying in Japan.</p>

          </div>
          <div>
            <h2 className="title-font  text-gray-900 tracking-widest text-xl font-bold mb-3">Quick Links</h2>
            <nav className="list-disc list-inside mb-10 ml-8">
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">Our Team</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">Our Services</a>
              </li>
             
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </nav>
          </div>

          <div>
            <h2 className="title-font  text-gray-900 tracking-widest text-xl font-bold mb-3">Corporate Office</h2>
            <nav className="list-none mb-10 flex flex-col gap-2">
              <li className="flex items-center">
                <div className=" mr-2">
                  <IoLocationOutline className='text-xl' />
                </div>
                <a className="text-gray-600 hover:text-gray-800">Ratnanagar-2,
                  Chitwan, Nepal </a>
              </li>
              <li className="flex items-center">
                <div className=" mr-2">
                  <IoPhonePortraitOutline className='text-xl' />
                </div>
                <a className="text-gray-600 hover:text-gray-800">9748292615</a>
              </li>
              <li className="flex items-center">
                <div className=" mr-2">
                  <FiPhone className='text-xl' />
                </div>
                <a className="text-gray-600 hover:text-gray-800">056-494791</a>
              </li>
              <li className="flex items-center">
                <div className=" mr-2">
                <CiMail className='text-xl' />
                </div>
                <a className="text-gray-600 hover:text-gray-800">oceanheartedu2023@gmail.com</a>
              </li>
              <li className="flex gap-5 mt-2 ">
                <a href="https://www.facebook.com/bhim.lamichhane.754"><i className="fa-brands text-2xl hover:text-blue-600 hover:-translate-y-1.5 transition-all duration-500  fa-facebook"></i></a>
                <a href="https://www.instagram.com/lamichhane_bhim?igsh=MXd3Z21sc2NobHdxZQ%3D%3D&fbclid=IwAR3N-51t83OgBVZ6MfRavRhb2srI9_4lEgQYFp-HZ7WOCAYJJnjyYj9pPTI"><i className="fa-brands text-2xl hover:text-pink-600 hover:-translate-y-1.5 transition-all duration-500 fa-instagram"></i></a>
              </li>

            </nav>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
            <p className="text-gray-500 text-sm text-center sm:text-left">©  {currentYear}—
              <a href="https://www.facebook.com/profile.php?id=61550801589681" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@ Surplus Education Consultancy </a>
            </p>
            <p className="text-gray-500 text-sm text-center sm:text-left">Powered By :
              <a href="https://www.facebook.com/profile.php?id=100017930170031" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Dipesh Chaudhary</a>
            </p>

          </div>
        </div>
      </footer >
    </>
  )
}

export default Footer