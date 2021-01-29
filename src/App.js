import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Subheader from './components/Subheader';
import NewsTickerAnim from './components/NewsTickerAnim';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <div>
      {loading === false ? (
        <div className="App">
          <Navbar />
          <Hero />
          <Subheader />
          <NewsTickerAnim />
          <About />
          <Skills />
          <Projects />
          <Info />
          <Contact />
          <Footer />
        </div>
      ) : (<Loading />)}
    </div>

  );
}

export default App;
