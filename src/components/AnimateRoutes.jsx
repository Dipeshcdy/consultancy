import React from 'react'
import MessageFromCeo from "../components/MessageFronCeo.jsx";
import About from "../components/About.jsx";
import { AnimatePresence, motion } from 'framer-motion'
import Home from '../components/Home.jsx'
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from './Contact.jsx';
import Team from './Team.jsx';
import Gallery from './Gallery.jsx';
import Whychoose from './Whychoose.jsx';
import ScrollToTop from './ScrollToTop.jsx';

const AnimateRoutes = () => {
    const location = useLocation();
    return (
        <>
            <AnimatePresence mode='wait' >
                <Routes location={location} key={location.pathname}>

                    <Route exact path='/consultancy/' element={
                        <>
                            <motion.section
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className='mt-[7.8rem]'
                            >
                                <Home />
                            </motion.section>
                        </>
                    } />
                    <Route exact path="/consultancy/message" element={
                        <>
                            <motion.section
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className='mt-[7.8rem]'>
                                <MessageFromCeo />
                            </motion.section>
                        </>
                    } />
                    <Route exact path="/consultancy/about" element={
                        <>
                            <motion.section
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className='mt-[7.8rem]'>
                                <About />
                            </motion.section>
                        </>
                    } />
                    <Route exact path="/consultancy/contact" element={
                        <>
                            <motion.section
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className='mt-[7.8rem]'>
                                <Contact />
                            </motion.section>
                        </>
                    } />
                    <Route exact path="/consultancy/team" element={
                        <>
                            <motion.section
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className='mt-[7.8rem]'>
                                <Team />
                            </motion.section>
                        </>
                    } />
                    <Route exact path="/consultancy/gallery" element={
                        <>
                            <motion.section
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className='mt-[7.8rem]'>
                                <Gallery />
                            </motion.section>
                        </>
                    } />
                    <Route exact path="/consultancy/why-choose-us" element={
                        <>
                            <motion.section
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className='mt-[7.8rem]'>
                                <Whychoose />
                            </motion.section>
                        </>
                    } />
                    <Route exact path="*" element={
                        <>
                            <section className='mt-[7.8rem]'>
                                <MessageFromCeo />
                            </section>
                        </>
                    } />

                </Routes>
                <ScrollToTop />
            </AnimatePresence>
        </>
    )
}

export default AnimateRoutes