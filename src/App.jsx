import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import ExportRegions from './pages/export-regions/ExportRegions';
import WhatWeOffer from './pages/products/WhatWeOffer';
import OurPartners from './pages/partners/OurPartners';
import HowWeWork from './pages/how-we-work/HowWeWork';
import Contact from './pages/contact/Contact';  // ADD THIS LINE

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/export-regions" element={<ExportRegions />} />
            <Route path="/products" element={<WhatWeOffer />} />
            <Route path="/partners" element={<OurPartners />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/contact" element={<Contact />} />  {/* ADD THIS LINE */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;