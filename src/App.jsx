import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'


import './App.css'


function App() {

  return (
    <>
      <Navbar />
      {/* <section className='mt-[7.8rem]'>
        <Home />
      </section> */}
      <section className='mt-[7.8rem]'>
        <Home />
      </section>
      <Footer />
    </>
  )
}

export default App
