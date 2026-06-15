import Navbar from './Nav/Navbar'
import Hero from './HERO/Hero'
import About from './ABOUT/About'
import Projects from './PROJECTTS/Project'
import Education from "./EDUCATION/Education";
import Contact from './CONTACT/Contact'
import Footer from './FOOTER/Footer'

import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Education />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
