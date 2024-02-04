import React from 'react'
import img from "../assets/images/bg.avif";
import img1 from "../assets/images/slider2.jpg"
import img2 from "../assets/images/why_image4.jpg"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const About = () => {
    return (
        <>
            <div className="xl:h-[40vh] sm:h-[20vh] h-[25vh] relative">
                <div className='overflow-hidden w-full h-full'>
                    <img className='w-full h-full object-cover object-center brightness-75' src={img} />
                </div>
                <div className="absolute flex top-0 bottom-0 right-0 left-0 wow animate__animated animate__zoomIn">
                    <h2 className="mt-auto ml-auto mr-auto mb-10 md:text-5xl text-3xl uppercase text-white font-bold " >About Us</h2>
                </div>
            </div>
            <div className="xl:px-20  md:px-20 px-5 lg:px-5  py-20">
                <div>
                    <div className="grid lg:grid-cols-2 gap-10">
                        <div className="pr-10 flex items-center wow animate__animated animate__zoomIn">
                            <div>
                                <h2 className="sm:text-4xl text-3xl font-semibold text-[#DF4838]">About Us</h2>
                                <p className="text-justify mt-5 font-semibold text-lg text-gray-500">
                                    Surplus Education Consultancy, a burgeoning education consultancy, has been a beacon of guidance since 2078 B.S (2021 A.D). Our seasoned and real-time faculties, driven by a passion for education, have established this venture. Founded by a team of dedicated professionals, Surplus Education Consultancy envisions facilitating affordable and accessible opportunities for aspiring students to pursue foreign studies in Japan and Korea. Our mission is to guide and empower individuals in their educational journey, opening doors to global learning experiences and fostering cultural exchange. Join us at Surplus Education Consultancy, where we transform dreams into international academic realities.
                                </p>

                            </div>
                        </div>
                        <div>
                            <img className="w-full h-full object-cover object-center rounded-xl sm:rounded-none sm:rounded-tl-[150px] sm:rounded-br-[150px] " src={img1} alt="" />
                        </div>
                    </div>
                </div>


                <div className="mt-20 ">
                    <div className="grid lg:grid-cols-2 gap-10">
                        <div className="order-2 lg:order-1">
                            <img className="w-full h-full object-cover object-center rounded-xl sm:rounded-none sm:rounded-tr-[150px] sm:rounded-bl-[150px] " src={img2} alt="" />
                        </div>
                        <div className="order-1 lg:order-2 pr-10 flex items-center wow animate__animated animate__zoomIn">
                            <div>
                                <h2 className="sm:text-4xl text-3xl font-semibold text-[#DF4838]">Our Mission & Vision</h2>
                                <div className="mt-8 ml-5">
                                    <h2 className="text-2xl font-semibold text-gray-600">Our Vision</h2>

                                    <p className="text-justify mt-2  font-semibold text-lg text-gray-500">
                                        Our vision is to empower aspiring students with the essential guidance and resources to not only navigate but excel in foreign studies, ensuring their success and distinctiveness from other educational opportunities.
                                    </p>
                                </div>
                                <div className="mt-5 ml-5">
                                    <h2 className="text-2xl font-semibold text-gray-600">Our Mission</h2>

                                    <p className="text-justify mt-2  font-semibold text-lg text-gray-500">
                                        We empower individuals seeking international education by providing the essential guidance and resources to turn their academic aspirations into reality, fostering a path for them to pursue and achieve their educational goals abroad.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='xl:px-20  md:px-20 px-5 lg:px-5  py-20'>
                <h2
                    className="font-heading mb-4 text-center font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl wow animate__animated animate__fadeInUp">
                    FAQS
                </h2>
                <div className="flex justify-center">
                    <div className=" relative lg:w-1/2 w-full wow animate__animated animate__zoomIn">
                        <div className="flex justify-center relative z-10">
                            <h2 className="bg-white px-2 text-primary text-lg font-bold">Frequently Asked Questions</h2>
                        </div>
                        <div className="h-0.5 bg-gray-500 absolute left-0 w-full top-1/2">
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <AccordionCustomIcon />
                </div>
            </div>

        </>
    )
}

export default About



function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function AccordionCustomIcon() {
    const [open, setOpen] = React.useState(0);
    const CUSTOM_ANIMATION = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(1)}> What services does Surplus Education Consultancy offer?</AccordionHeader>
                <AccordionBody>
                    Surplus Education Consultancy provides a comprehensive range of services, including assistance with university admissions, visa processing, language proficiency preparation, and cultural integration support for students aspiring to study in Japan and Korea.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    How can I apply for foreign studies through Surplus Education Consultancy?
                </AccordionHeader>
                <AccordionBody>
                    Applying is a simple process! Visit our website to explore available programs, submit your application online, and our expert team will guide you through the necessary steps, ensuring a smooth and hassle-free application process.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    What sets Surplus Education Consultancy apart from other educational consultants?
                </AccordionHeader>
                <AccordionBody>
                    Surplus Education Consultancy stands out for its personalized approach, experienced faculty, and a commitment to providing affordable solutions. We go beyond standard services, offering tailored guidance to each student, ensuring a unique and enriching experience.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    How does Surplus Education Consultancy assist in cultural integration?
                </AccordionHeader>
                <AccordionBody>
                    Our consultancy goes beyond academics. We provide cultural orientation sessions, language classes, and ongoing support to help students adapt seamlessly to the cultural nuances of Japan and Korea, fostering a holistic and immersive international education experience.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                    Can Surplus Education Consultancy help with post-graduation opportunities in Japan and Korea?
                </AccordionHeader>
                <AccordionBody>
                    Absolutely! We offer post-graduation guidance, including networking events, job placement assistance, and insights into career opportunities, to ensure that students can leverage their international education for a successful professional journey in Japan or Korea.
                </AccordionBody>
            </Accordion>
        </>
    );
}