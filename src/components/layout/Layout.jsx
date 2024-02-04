import React from 'react'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />

        </>
    )
}
export default Layout;
