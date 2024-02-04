import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MessageFromCeo from "./components/MessageFronCeo.jsx";
import './App.css'


function App() {
  return (

    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/consultancy/' element={
            <>
              <section className='mt-[7.8rem]'>
                <Home />
              </section>
            </>
          } />
          <Route exact path="/consultancy/message" element={
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
