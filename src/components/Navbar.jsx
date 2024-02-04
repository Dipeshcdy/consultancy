import React, { useEffect, useState } from "react";
import logo from '../assets/images/logo.jpg';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaFacebookSquare, FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  
  // const [isNavVisible, setNavVisibility] = useState(false);
  const [fix, setFix] = useState(false);
  const [mobNav, setMobNav] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true)
    }
    else
      setFix(false)
  }


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  }, [])

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (title) => {
    // Set the active dropdown
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const menuToggle = () => {
    setMobNav((prev) => !prev);
    setActiveDropdown(null);
  }


  return (
    <>
      {/* this is navbar section */}

      <section className="fixed top-0 z-50 w-full">
        <div className={`${fix ? 'opacity-0 invisible' : 'visible opacity-100'} hidden transition-all bg-white duration-700 md:flex justify-center bg-re-600 text-hite py-1`}>
          <div className="flex gap-5 text-lg">
            <a className="flex gap-2">
              <FaPhone className="my-auto text-xl" /> <span>056-494791</span>
            </a>

            <a className="flex gap-2">
              <IoPhonePortraitOutline className="my-auto text-xl" /> <span>9855076574</span>
            </a>

            <a className="flex gap-2">
              <MdEmail className="my-auto text-2xl" /> <span>info@cse.com</span>
            </a>
            <div className="flex gap-2">
              <a className="my-auto"><FaFacebookSquare className="text-xl" title="facebook" /></a>
              <a className="my-auto"><FaInstagramSquare className="text-xl" title="instagram" /></a>
            </div>

          </div>
        </div>

        <div className={`${fix ? 'top-0 shadow-xl ' : 'md:top-9 '}absolute py-2 transition-all duration-700 bg-white flex w-full z-[999] justify-between lg:px-20 px-5`}>
          <div className="w-[200px]">
            <img className="w-full" src={logo} alt="" />
          </div>
          <div className="my-auto w-full lg:block hidden">
            <ul className="flex text-lg gap-5 justify-center">
              <li><Link to="/consultancy" className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Home</Link></li>
              <li className="group relative">
                <a className="flex cursor-default gap-1 relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">About us <FaAngleDown className="mt-1.5 duration-500 group-hover:scale-y-[-1]" /></a>
                <div className="group-hover:z-10 pointer-events-none group-hover:pointer-events-auto z-0 absolute -left-5 opacity-0 invisible -mt-3 transition-all duration-500 pt-4 w-[200px] group-hover:visible group-hover:opacity-100 group-hover:mt-0">
                  <ul className="bg-white rounded-xl shadow-lg shadow-gray-700 p-4">
                    <li className="mt-2 flex"><Link to="/consultancy/about" className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Introduction</Link></li>
                    <li className="mt-2 flex"><Link to="/consultancy/message" className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Message From CEO</Link></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Our Team</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Why us?</a></li>
                  </ul>
                </div>
              </li>
              <li className="group relative">
                <a className="flex gap-1  relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Services<FaAngleDown className="mt-1.5 duration-500 group-hover:scale-y-[-1]" /></a>
                <div className="group-hover:z-10  pointer-events-none group-hover:pointer-events-auto -z-1 absolute -left-5 opacity-0 invisible -mt-3 transition-all duration-500 pt-4 min-w-[250px] w-auto group-hover:visible group-hover:opacity-100 group-hover:mt-0">
                  <ul className="bg-white rounded-xl shadow-lg shadow-gray-700 p-4">
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Education Counseling</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Selection Of Course</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Admission Guidance</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Career Abroad</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Travel Guidance</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Visa Assistance</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Financial Estimation</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Country Information</a></li>
                  </ul>
                </div>
              </li>
              <li className="group relative">
                <a className="flex gap-1  relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Training<FaAngleDown className="mt-1.5 duration-500 group-hover:scale-y-[-1]" /></a>
                <div className="group-hover:z-10  pointer-events-none group-hover:pointer-events-auto -z-1 absolute -left-5 opacity-0 invisible -mt-3 transition-all duration-500 pt-4 min-w-[250px] w-auto group-hover:visible group-hover:opacity-100 group-hover:mt-0">
                  <ul className="bg-white rounded-xl shadow-lg shadow-gray-700 p-4">
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">JLPT</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">NAT</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">JFT</a></li>
                    <li className="mt-2 flex"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">SSW</a></li>
                  </ul>
                </div>
              </li>
              <li className="group relative">
                <a className="flex gap-1 relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Study Abroad<FaAngleDown className="mt-1.5 duration-500 group-hover:scale-y-[-1]" /></a>
                <div className="group-hover:z-10 pointer-events-none group-hover:pointer-events-auto z-0 absolute -left-5 opacity-0 invisible -mt-3 transition-all duration-500 pt-4 min-w-[200px] group-hover:visible group-hover:opacity-100 group-hover:mt-0">
                  <ul className="bg-white rounded-xl shadow-lg shadow-gray-700 p-4">
                    <li className="flex mt-2"><a className="relative before:content-[''] before:rounded-lg before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Japan</a></li>
                  </ul>
                </div>
              </li>
              <li><a className="relative before:rounded-lg before:content-[''] before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Gallery</a></li>
              <li><a className="relative before:rounded-lg before:content-[''] before:h-1 before:bg-red-500 before:absolute before:duration-500 hover:before:w-full before:w-0 before:-bottom-1">Contact Us</a></li>
            </ul>
          </div>
          <div className="flex lg:hidden">
            <IoMdClose onClick={menuToggle} className={`${mobNav ? 'block' : 'hidden'} text-3xl my-auto cursor-pointer hover:text-red-500 duration-100 ease-linear`} />
            <FaBars onClick={menuToggle} className={`${mobNav ? 'hidden' : 'block'} text-2xl my-auto cursor-pointer hover:text-red-500 duration-100 ease-linear`} />
          </div>
        </div>


      </section>

      {/* this is mobile nav */}
      <div className={`${mobNav ? 'left-0' : ' -left-1/2'} transition-all duration-500 ease-linear fixed top-0 pt-36 z-40 flex lg:hidden justify-center h-full bg-white w-1/2`}>
        <ul className="text-lg font-semibold">
          <MobileNavSubMenu title={'Home'} isActive={activeDropdown === 'Home'} onDropdownToggle={handleDropdownToggle} />
          <MobileNavSubMenu title={'About Us'} isActive={activeDropdown === 'About Us'} onDropdownToggle={handleDropdownToggle} list={['Message From Ceo', 'Our Team', 'Why us?']} />
          <MobileNavSubMenu title={'Services'} isActive={activeDropdown === 'Services'} onDropdownToggle={handleDropdownToggle} list={['Education Counseling', 'Selection of Course', 'Admission Guidance', 'Career Abroad', 'Travel Guidance', 'Visa Assistance', 'Financial Estimation', 'Country Information']} />
          <MobileNavSubMenu title={'Study Abroad'} isActive={activeDropdown === 'Study Abroad'} onDropdownToggle={handleDropdownToggle} list={['japan']} />
          <MobileNavSubMenu title={'Gallery'} />
          <MobileNavSubMenu title={'Training'} />
          <MobileNavSubMenu title={'Contact Us'} />
        </ul>
      </div>
      {/* end of mobile nav */}

      {/* end of navbar section */}
      {/* this is go to top section */}
      <a onClick={scrollToTop} title="go to top" className={`${fix ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed cursor-pointer bottom-5 left-5 z-50 bg-red-600 text-white p-3 border-2 border-red-600 hover:bg-transparent hover:-translate-y-2 hover:text-red-600 rounded-full text-xl transition-all duration-500 ease-in-out`}><FaAnglesUp /></a>
      {/* this is end of go to top section */}

      {/* social media icons  */}
      <div className={`${fix ? 'right-0' : '-right-20'} fixed transition-all duration-500 ease-linear py-3 rounded-l-md px-2 flex flex-col gap-1 bg-black z-50 text-white`}>
        <a className="cursor-pointer border-b border-gray-400 pb-2 hover:text-blue-500 transition-all duration-500"><FaFacebookF className="text-3xl" title="facebook" /></a>
        <a className="cursor-pointer hover:text-pink-500 transition-all duration-500"><AiFillInstagram className="text-3xl" title="instagram" /></a>

      </div>
      {/* end of social media icons */}
    </>
  );
}

export default Navbar;


const MobileNavSubMenu = ({ title, isActive, onDropdownToggle, list }) => {

  const handleDropdownToggle = () => {
    onDropdownToggle && onDropdownToggle(title);
  };

  return (
    <>
      <li>
        <a onClick={handleDropdownToggle} className="flex gap-1 cursor-pointer">
          {title}

          {
            list && (
              <>
                <FaPlus className={`${isActive ? 'hidden' : 'block'} mt-1 text-base`} />
                <FaMinus className={`${!isActive ? 'hidden' : 'block'} mt-1 text-base`} />
              </>
            )
          }
        </a>

        {list && (
          <div className={`${isActive ? 'max-h-[30rem] duration-1000' : 'max-h-0 '} transition-all duration-500  text-base ml-2  overflow-hidden`}>
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )

        }

      </li>
    </>
  );
}