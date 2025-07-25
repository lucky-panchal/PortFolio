import './App.css';
import { useState } from 'react';

import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Qualification from '../components/qualification/Qualification';
import Work from '../components/work/Work';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';
import CustomCursor from './components/cursor/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className='main'>
        <Home />
        <Work />
        <Skills />
        <Experience />
        <Qualification />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;