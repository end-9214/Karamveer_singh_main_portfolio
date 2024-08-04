import React from 'react';
import './App.scss'
import Home from './components/home/Home.jsx';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Hobbies from './components/hobbies/Hobbies';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
    <section>
      <Home />
    </section>
    <section>
      <About />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Hobbies />
    </section>
    </div>
  )
}

export default App;