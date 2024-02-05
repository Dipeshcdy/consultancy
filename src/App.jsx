import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimateRoutes from './components/AnimateRoutes.jsx';
import './App.css'

function App() {
  return (

    <>
      <Router>
        <Navbar />
          <AnimateRoutes/>
        <Footer />
      </Router>

    </>
  )
}

export default App
