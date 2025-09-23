
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/navbar/navbar'
import Home from './pages/home'
import Yachts from './pages/yachts'
import Services from './pages/services'
import Contact from './pages/contact'
import Yacht from './pages/yacht'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yachts" element={<Yachts />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/indivitual" element={<Yacht/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
