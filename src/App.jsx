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
import GitHubStats from '../components/githubstats/GitHubStats';
import SectionTransition from '../components/sectiontransition/SectionTransition';
import Scroll3D from './components/scroll3d/Scroll3D';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <SectionTransition />
      <main className='main'>
        <Scroll3D variant="fadeUp">
          <Home />
        </Scroll3D>
        <ScrollReveal>
          <Scroll3D variant="slideDown">
            <Work />
          </Scroll3D>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Scroll3D variant="slideLeft">
            <Skills />
          </Scroll3D>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Scroll3D variant="slideRight">
            <Experience />
          </Scroll3D>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Scroll3D variant="zoomIn">
            <Qualification />
          </Scroll3D>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Scroll3D variant="zoomOut">
            <About />
          </Scroll3D>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Scroll3D variant="flip">
            <Testimonials />
          </Scroll3D>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Scroll3D variant="bounce">
            <Social />
          </Scroll3D>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Scroll3D variant="elastic">
            <GitHubStats />
          </Scroll3D>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Scroll3D variant="slideUp">
            <Contact />
          </Scroll3D>
        </ScrollReveal>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;