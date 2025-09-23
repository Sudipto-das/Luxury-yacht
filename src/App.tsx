
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/navbar/navbar'
import Home from './pages/home'
import Yachts from './pages/yachts'
import Services from './pages/services'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yachts" element={<Yachts />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
