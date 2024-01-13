import React from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
import slider4 from "../assets/images/slider4.jpg";
import slider5 from "../assets/images/slider5.jpg";

import image1 from "../assets/images/japan1.avif";
import image2 from "../assets/images/japan2.avif";
import image3 from "../assets/images/japan3.avif";

import why_image1 from "../assets/images/why_image1.webp";
import why_image2 from "../assets/images/why_image2.jpg";
import why_image3 from "../assets/images/why_image3.jpg";
import why_image4 from "../assets/images/why_image4.jpg";
import bg from "../assets/images/bg.avif";

import testimonial_image1 from "../assets/images/image-01.jpg"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import SwiperNavButton from "../components/SwiperNavButton.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {
  Navigation,
  Autoplay,
  Pagination,
  EffectCreative,
  EffectCoverflow
} from "swiper/modules";
const Home = () => {
  return (
    <>
      <section className="lg:h-[80vh]">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          autoHeight={true}
          breakpoints={{
            1024: {
              autoHeight: false,
            },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            // 1024: {
            //   slidesPerView: 5,
            //   spaceBetween: 50,
            // },
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCreative, Pagination, Autoplay, Navigation]}
          className="mySwiper group pb-5"
        >
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center"
              src={slider1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center"
              src={slider2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center"
              src={slider3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center"
              src={slider4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center"
              src={slider5}
            />
          </SwiperSlide>
          <SwiperNavButton />
        </Swiper>
      </section>
      {/* <!-- ====== About Section Start --> */}
      <section className="overflow-hidden lg:px-20 px-5 bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="my-3 sm:my-4 overflow-hidden rounded-2xl">
                    <img
                      src={image1}
                      alt=""
                      className="w-full rounded-2xl transition-all duration-1000 hover:scale-[1.15]"
                    />
                  </div>
                  <div className="my-3 sm:my-4 overflow-hidden rounded-2xl">
                    <img
                      src={image2}
                      alt=""
                      className="w-full rounded-2xl transition-all duration-1000 hover:scale-[1.15]"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <div className=" rounded-2xl overflow-hidden">
                      <img
                        src={image3}
                        alt=""
                        className="w-full rounded-2xl hover:scale-[1.15] transition-all duration-1000"
                      />
                    </div>
                    <span className="absolute -bottom-7 -right-7 z-[-1]">
                      <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3334"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="mb-4 block text-lg font-semibold text-primary">
                  About Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
                <p className="mb-5 text-base text-justify text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  aut impedit veritatis optio vero accusantium velit ipsa
                  voluptate molestiae. Libero autem cupiditate amet dolore qui
                  molestiae ad in, iste mollitia!
                </p>
                <p className="mb-8 text-base text-justify text-body-color dark:text-dark-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto eveniet harum laborum fugiat unde placeat animi,
                  maxime mollitia reiciendis delectus veniam nobis officiis
                  exercitationem quis cum, quia magnam quaerat.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center rounded-md bg-primary border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-500 px-7 py-3 text-center text-base  medium text-white hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== About Section End --> */}

      {/* services section */}
      <section className="lg:px-20 px-5">
        <div>
          <div class="text-center md:mt-14 mt-0">
            <h2 class="text-3xl font-bold">Our Services</h2>
            <div className="flex gap-2 justify-center">
              <FaMinus className="my-auto text-red-500 text-2xl" />
              <h2 class="text-xl">Services We Provide</h2>
              <FaMinus className="my-auto text-red-500 text-2xl" />
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              // 1024: {
              //   slidesPerView: 5,
              //   spaceBetween: 50,
              // },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper mt-10 pb-10"
          >
            <SwiperSlide>
              <div className="bg-[whitesmoke] rounded-xl relative overflow-hidden group">
                <div>
                  <img
                    className="w-full rounded-xl group-hover:scale-110 transition-all duration-1000"
                    src={image1}
                    alt=""
                  />
                </div>
                <div className="mt-5 absolute bottom-0 p-4 bg-[rgba(248,236,237,0.75)] text-black">
                  <h2 className="text-xl font-semibold">
                    Education Counselling
                  </h2>
                  <div className="group-hover:max-h-48 py-1 max-h-0 ease-linear transition-all duration-500  overflow-hidden ">
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nobis, dicta libero dignissimos, perferendis nesciunt
                      eaque in debitis tenetur quis iusto eos nihil amet
                      deleniti ipsam, perspiciatis dolore delectus
                      necessitatibus iste.
                    </p>
                    <div className="mt-5 mb-2 flex">
                      <a className="bg-red-500 cursor-pointer flex font-bold gap-2 justify-between px-4 py-3 border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-500 text-white rounded-xl">
                        Read More
                        <FaRegArrowAltCircleRight className="text-2xl mt-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[whitesmoke] rounded-xl relative overflow-hidden group">
                <div>
                  <img
                    className="w-full rounded-xl group-hover:scale-110 transition-all duration-1000"
                    src={image1}
                    alt=""
                  />
                </div>
                <div className="mt-5 absolute bottom-0 p-4 bg-[rgba(248,236,237,0.75)] text-black">
                  <h2 className="text-xl font-semibold">
                    Education Counselling
                  </h2>
                  <div className="group-hover:max-h-48 py-1 max-h-0 ease-linear transition-all duration-500  overflow-hidden ">
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nobis, dicta libero dignissimos, perferendis nesciunt
                      eaque in debitis tenetur quis iusto eos nihil amet
                      deleniti ipsam, perspiciatis dolore delectus
                      necessitatibus iste.
                    </p>
                    <div className="mt-5 mb-2 flex">
                      <a className="bg-red-500 cursor-pointer flex font-bold gap-2 justify-between px-4 py-3 border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-500 text-white rounded-xl">
                        Read More
                        <FaRegArrowAltCircleRight className="text-2xl mt-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[whitesmoke] rounded-xl relative overflow-hidden group">
                <div>
                  <img
                    className="w-full rounded-xl group-hover:scale-110 transition-all duration-1000"
                    src={image1}
                    alt=""
                  />
                </div>
                <div className="mt-5 absolute bottom-0 p-4 bg-[rgba(248,236,237,0.75)] text-black">
                  <h2 className="text-xl font-semibold">
                    Education Counselling
                  </h2>
                  <div className="group-hover:max-h-48 py-1 max-h-0 ease-linear transition-all duration-500  overflow-hidden ">
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nobis, dicta libero dignissimos, perferendis nesciunt
                      eaque in debitis tenetur quis iusto eos nihil amet
                      deleniti ipsam, perspiciatis dolore delectus
                      necessitatibus iste.
                    </p>
                    <div className="mt-5 mb-2 flex">
                      <a className="bg-red-500 cursor-pointer flex font-bold gap-2 justify-between px-4 py-3 border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-500 text-white rounded-xl">
                        Read More
                        <FaRegArrowAltCircleRight className="text-2xl mt-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[whitesmoke] rounded-xl relative overflow-hidden group">
                <div>
                  <img
                    className="w-full rounded-xl group-hover:scale-110 transition-all duration-1000"
                    src={image1}
                    alt=""
                  />
                </div>
                <div className="mt-5 absolute bottom-0 p-4 bg-[rgba(248,236,237,0.75)] text-black">
                  <h2 className="text-xl font-semibold">
                    Education Counselling
                  </h2>
                  <div className="group-hover:max-h-48 py-1 max-h-0 ease-linear transition-all duration-500  overflow-hidden ">
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nobis, dicta libero dignissimos, perferendis nesciunt
                      eaque in debitis tenetur quis iusto eos nihil amet
                      deleniti ipsam, perspiciatis dolore delectus
                      necessitatibus iste.
                    </p>
                    <div className="mt-5 mb-2 flex">
                      <a className="bg-red-500 cursor-pointer flex font-bold gap-2 justify-between px-4 py-3 border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-500 text-white rounded-xl">
                        Read More
                        <FaRegArrowAltCircleRight className="text-2xl mt-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[whitesmoke] rounded-xl relative overflow-hidden group">
                <div>
                  <img
                    className="w-full rounded-xl group-hover:scale-110 transition-all duration-1000"
                    src={image1}
                    alt=""
                  />
                </div>
                <div className="mt-5 absolute bottom-0 p-4 bg-[rgba(248,236,237,0.75)] text-black">
                  <h2 className="text-xl font-semibold">
                    Education Counselling
                  </h2>
                  <div className="group-hover:max-h-48 py-1 max-h-0 ease-linear transition-all duration-500  overflow-hidden ">
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nobis, dicta libero dignissimos, perferendis nesciunt
                      eaque in debitis tenetur quis iusto eos nihil amet
                      deleniti ipsam, perspiciatis dolore delectus
                      necessitatibus iste.
                    </p>
                    <div className="mt-5 mb-2 flex">
                      <a className="bg-red-500 cursor-pointer flex font-bold gap-2 justify-between px-4 py-3 border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-500 text-white rounded-xl">
                        Read More
                        <FaRegArrowAltCircleRight className="text-2xl mt-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* end of services section */}

      {/* why choose us */}
      <section
        className={`relative my-5 bg-no-repeat bg-cover bg-center overflow-hidden lg:px-20 px-5 pb-12 pt-20  lg:pb-[90px] lg:pt-[120px]`}
      >
        <div className="absolute bg-red-500  lg:-top-1/2 -bottom-1/2 -right-1/2 w-full h-full rotate-[50deg]">
          /
        </div>
        <div className="container mx-auto relative">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="mb-4 block text-lg font-semibold text-primary">
                  Why Choose Us?
                </span>
                <h2 className=" text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
                <p className="mt-5 text-base text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita deserunt neque est, commodi modi magni, libero et
                  eius inventore quae harum. A, quam! Necessitatibus aliquid
                  odio harum! Atque, blanditiis dicta? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Expedita deserunt neque
                  est, commodi modi magni, libero et eius inventore quae harum.
                  A, quam! Necessitatibus aliquid odio harum! Atque, blanditiis
                  dicta?
                </p>
                <div className="relative my-5 py-5 bg-gray-50">
                  <div className="absolute top-0 -left-1 w-1 h-full bg-red-500 rounded-xl"></div>
                  <ul className="ml-5 list-disc flex flex-col gap-2">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta dolorem molestiae, aut{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta dolorem molestiae, aut{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta dolorem molestiae, aut{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta dolorem molestiae, aut{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta dolorem molestiae, aut{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full pl-16 mt-5 xl:pl-0 px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <div className="my-3 sm:my-4  rounded-l-2xl overflow-hidden">
                      <img
                        src={why_image4}
                        alt=""
                        className="w-full hover:scale-[1.15] transition-all duration-1000"
                      />
                    </div>
                    <div className="my-3 sm:my-4  rounded-l-2xl overflow-hidden">
                      <img
                        src={why_image3}
                        alt=""
                        className="w-full hover:scale-[1.15] transition-all duration-1000"
                      />
                    </div>
                    <span className="absolute -top-7 -left-7 z-[-1]">
                      <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="!h-full"
                      >
                        <circle
                          cx="1.66667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3334"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="my-3 sm:my-4 overflow-hidden rounded-r-2xl">
                    <img
                      src={why_image1}
                      alt=""
                      className="w-full transition-all duration-1000 hover:scale-[1.15]"
                    />
                  </div>
                  <div className="my-3 sm:my-4 overflow-hidden rounded-r-2xl">
                    <img
                      src={why_image2}
                      alt=""
                      className="w-full transition-all duration-1000 hover:scale-[1.15]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of why choose us */}

      {/* testimonials section */}
      <section className="relative lg:px-20 px-5 py-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover object-center brightness-75"
            src={bg}
            alt=""
          />
        </div>
        <div className="relative text-white">
          <div className="w-2/3 mx-auto">
            <h2 className="text-3xl font-bold text-center">Testimonial</h2>
            <p className="text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              obcaecati, sed debitis asperiores blanditiis dolor non fuga
              reprehenderit architecto
            </p>
          </div>

          {/* slider section */}

          <div className="relative pb-5">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              navigation={{
                nextEl:'.testimonial-button-next',
                prevEl:'.testimonial-button-prev',
                clickable:true
              }}
              pagination={{ el:'.testimonial-pagination',clickable:true}}
              modules={[EffectCoverflow, Pagination,Navigation]}
              className="mySwiper testimonial-swiper"
            >
              <SwiperSlide>
                <div className="bg-gray-600 rounded-xl backdrop-blur-xl shadow-md py-5 px-10">
                  <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={testimonial_image1} alt="" />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-center text-xl font-semibold text-white">Dipika Shrestha</h2>
                    <h2 className="text-center text-sm text-white">Nagoya, Japan</h2>
                  </div>
                  <div className="mt-5 relative">
                    <div className="absolute top-0 -left-6">
                      <ImQuotesLeft />
                    </div>
                    <div className="absolute bottom-0 -right-6">
                      <ImQuotesRight />
                    </div>
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae, nemo eaque error aperiam soluta necessitatibus illo alias a amet accusamus voluptas unde eius doloremque saepe! Ea delectus aperiam optio.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-600 rounded-xl backdrop-blur-xl shadow-md py-5 px-10">
                  <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={testimonial_image1} alt="" />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-center text-xl font-semibold text-white">Dipika Shrestha</h2>
                    <h2 className="text-center text-sm text-white">Nagoya, Japan</h2>
                  </div>
                  <div className="mt-5 relative">
                    <div className="absolute top-0 -left-6">
                      <ImQuotesLeft />
                    </div>
                    <div className="absolute bottom-0 -right-6">
                      <ImQuotesRight />
                    </div>
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae, nemo eaque error aperiam soluta necessitatibus illo alias a amet accusamus voluptas unde eius doloremque saepe! Ea delectus aperiam optio.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-600 rounded-xl backdrop-blur-xl shadow-md py-5 px-10">
                  <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={testimonial_image1} alt="" />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-center text-xl font-semibold text-white">Dipika Shrestha</h2>
                    <h2 className="text-center text-sm text-white">Nagoya, Japan</h2>
                  </div>
                  <div className="mt-5 relative">
                    <div className="absolute top-0 -left-6">
                      <ImQuotesLeft />
                    </div>
                    <div className="absolute bottom-0 -right-6">
                      <ImQuotesRight />
                    </div>
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae, nemo eaque error aperiam soluta necessitatibus illo alias a amet accusamus voluptas unde eius doloremque saepe! Ea delectus aperiam optio.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-600 rounded-xl backdrop-blur-xl shadow-md py-5 px-10">
                  <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={testimonial_image1} alt="" />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-center text-xl font-semibold text-white">Dipika Shrestha</h2>
                    <h2 className="text-center text-sm text-white">Nagoya, Japan</h2>
                  </div>
                  <div className="mt-5 relative">
                    <div className="absolute top-0 -left-6">
                      <ImQuotesLeft />
                    </div>
                    <div className="absolute bottom-0 -right-6">
                      <ImQuotesRight />
                    </div>
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae, nemo eaque error aperiam soluta necessitatibus illo alias a amet accusamus voluptas unde eius doloremque saepe! Ea delectus aperiam optio.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-600 rounded-xl backdrop-blur-xl shadow-md py-5 px-10">
                  <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={testimonial_image1} alt="" />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-center text-xl font-semibold text-white">Dipika Shrestha</h2>
                    <h2 className="text-center text-sm text-white">Nagoya, Japan</h2>
                  </div>
                  <div className="mt-5 relative">
                    <div className="absolute top-0 -left-6">
                      <ImQuotesLeft />
                    </div>
                    <div className="absolute bottom-0 -right-6">
                      <ImQuotesRight />
                    </div>
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae, nemo eaque error aperiam soluta necessitatibus illo alias a amet accusamus voluptas unde eius doloremque saepe! Ea delectus aperiam optio.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-600 rounded-xl backdrop-blur-xl shadow-md py-5 px-10">
                  <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={testimonial_image1} alt="" />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-center text-xl font-semibold text-white">Dipika Shrestha</h2>
                    <h2 className="text-center text-sm text-white">Nagoya, Japan</h2>
                  </div>
                  <div className="mt-5 relative">
                    <div className="absolute top-0 -left-6">
                      <ImQuotesLeft />
                    </div>
                    <div className="absolute bottom-0 -right-6">
                      <ImQuotesRight />
                    </div>
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae, nemo eaque error aperiam soluta necessitatibus illo alias a amet accusamus voluptas unde eius doloremque saepe! Ea delectus aperiam optio.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-600 rounded-xl backdrop-blur-xl shadow-md py-5 px-10">
                  <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={testimonial_image1} alt="" />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-center text-xl font-semibold text-white">Dipika Shrestha</h2>
                    <h2 className="text-center text-sm text-white">Nagoya, Japan</h2>
                  </div>
                  <div className="mt-5 relative">
                    <div className="absolute top-0 -left-6">
                      <ImQuotesLeft />
                    </div>
                    <div className="absolute bottom-0 -right-6">
                      <ImQuotesRight />
                    </div>
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae, nemo eaque error aperiam soluta necessitatibus illo alias a amet accusamus voluptas unde eius doloremque saepe! Ea delectus aperiam optio.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-600 rounded-xl backdrop-blur-xl shadow-md py-5 px-10">
                  <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={testimonial_image1} alt="" />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-center text-xl font-semibold text-white">Dipika Shrestha</h2>
                    <h2 className="text-center text-sm text-white">Nagoya, Japan</h2>
                  </div>
                  <div className="mt-5 relative">
                    <div className="absolute top-0 -left-6">
                      <ImQuotesLeft />
                    </div>
                    <div className="absolute bottom-0 -right-6">
                      <ImQuotesRight />
                    </div>
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae, nemo eaque error aperiam soluta necessitatibus illo alias a amet accusamus voluptas unde eius doloremque saepe! Ea delectus aperiam optio.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-600 rounded-xl backdrop-blur-xl shadow-md py-5 px-10">
                  <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={testimonial_image1} alt="" />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-center text-xl font-semibold text-white">Dipika Shrestha</h2>
                    <h2 className="text-center text-sm text-white">Nagoya, Japan</h2>
                  </div>
                  <div className="mt-5 relative">
                    <div className="absolute top-0 -left-6">
                      <ImQuotesLeft />
                    </div>
                    <div className="absolute bottom-0 -right-6">
                      <ImQuotesRight />
                    </div>
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae, nemo eaque error aperiam soluta necessitatibus illo alias a amet accusamus voluptas unde eius doloremque saepe! Ea delectus aperiam optio.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-600 rounded-xl backdrop-blur-xl shadow-md py-5 px-10">
                  <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={testimonial_image1} alt="" />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-center text-xl font-semibold text-white">Dipika Shrestha</h2>
                    <h2 className="text-center text-sm text-white">Nagoya, Japan</h2>
                  </div>
                  <div className="mt-5 relative">
                    <div className="absolute top-0 -left-6">
                      <ImQuotesLeft />
                    </div>
                    <div className="absolute bottom-0 -right-6">
                      <ImQuotesRight />
                    </div>
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae, nemo eaque error aperiam soluta necessitatibus illo alias a amet accusamus voluptas unde eius doloremque saepe! Ea delectus aperiam optio.</p>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
          {/*end of slider section */}
          <div className="flex justify-center gap-5">
            <div className="cursor-pointer testimonial-button-prev">
              <FaRegArrowAltCircleLeft className="text-4xl hover:text-primary duration-500" />
            </div>
            <div className="cursor-pointer testimonial-button-next">
              <FaRegArrowAltCircleRight className="text-4xl hover:text-primary duration-500"/>
            </div>
          </div>
        </div>
        <div className="swiper-pagination testimonial-pagination"></div>
      </section>
      {/* end of testimonial section */}
    </>
  );
};

export default Home;
