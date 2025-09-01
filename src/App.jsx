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
import Social from '../components/social/Social';
import Scroll3D from './components/scroll3d/Scroll3D';

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className='main'>
        <Scroll3D variant="parallaxDepth">
          <Home />
        </Scroll3D>
        <Scroll3D variant="rotationTransition">
          <Work />
        </Scroll3D>
        <Scroll3D variant="rotationTransition">
          <Skills />
        </Scroll3D>
        <Scroll3D variant="slideCube">
          <Experience />
        </Scroll3D>
        <Scroll3D variant="parallaxDepth">
          <Qualification />
        </Scroll3D>
        <Scroll3D variant="rotationTransition">
          <About />
        </Scroll3D>
        <Scroll3D variant="scaleFade">
          <Testimonials />
        </Scroll3D>
        <Scroll3D variant="slideCube">
          <Social />
        </Scroll3D>
        <Scroll3D variant="parallaxDepth">
          <Contact />
        </Scroll3D>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;