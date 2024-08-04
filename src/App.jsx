import React, { useRef } from 'react';
import './App.scss'
import Home from './components/home/Home.jsx';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Hobbies from './components/hobbies/Hobbies';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const hobbiesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'Home') {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'About') {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Projects') {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Hobbies') {
        hobbiesRef.current.scrollIntoView({ behavior: 'smooth' });
    }else if (section === 'Contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

};

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <section ref={homeRef} className="section home">
        <Home />
      </section>
      <section ref={aboutRef} className="section about">
        <About />
      </section>
      <section ref={projectsRef} className="section projects">
        <Projects />
      </section>
      <section ref={hobbiesRef} className="section hobbies">
        <Hobbies />
      </section>
      <section ref={contactRef} className="section contact">
        <Contact />
      </section>
    </div>
  )
}

export default App;
