import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryList from './pages/CountryList';
import CountryDetail from './pages/CountryDetail';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; // ✅ Import your Navbar

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* ✅ Use your custom Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountryList />} />
          <Route path="/countries/:code" element={<CountryDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
