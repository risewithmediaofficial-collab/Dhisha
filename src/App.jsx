import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />}       />
        <Route path="/about"      element={<About />}      />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact"    element={<Contact />}    />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
