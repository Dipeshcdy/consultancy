import { useState } from 'react'
import Home from './components/Home.jsx'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from './components/layout/Layout.jsx'
import MessageFromCeo from "./components/MessageFronCeo.jsx";
import './App.css'


function App() {
  return (

    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <>
                <section className='mt-[7.8rem]'>
                  <Home />
                </section>
              </>
            } />
            <Route path="/message" element={
              <>
                <section className='mt-[7.8rem]'>
                  <MessageFromCeo />
                </section>
              </>
            } />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
