import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/home';
import About from './pages/about/about';
// Import other pages as you create them

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/export-regions" element={<div>Export Regions Page</div>} />
            <Route path="/products" element={<div>Products Page</div>} />
            <Route path="/partners" element={<div>Partners Page</div>} />
            <Route path="/how-we-work" element={<div>How We Work Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;