import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import MessageFromCeo from "./components/MessageFronCeo.jsx";
import './App.css'


function App() {
  const location = useLocation();
  return (

    <>
      <Router>
      <Navbar />
        <Routes key={location.pathname} location={location} >
          <Route exact path='/' element={
            <>
              <section className='mt-[7.8rem]'>
                <Home />
              </section>
            </>
          } />
          <Route exact path="/message" element={
            <>
              <section className='mt-[7.8rem]'>
                <MessageFromCeo />
              </section>
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
      <Footer />
      </Router>

    </>
  )
}

export default App
