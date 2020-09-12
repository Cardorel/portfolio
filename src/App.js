import React from 'react';
import Header from './Components/HEADER';
import Home from './Components/HOME';
import About from './Components/ABOUT';
import Skills from './Components/SKILLS';
import Project from './Components/PROJECTS';
import Contact from './Components/CONTACT';
import Footer from './Components/FOOTER';


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
