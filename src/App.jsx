
import './App.css'
import {Navbar} from './sections/Navbar'
import {Hero} from  './sections/Hero'
import {Projects} from './sections/Projects'
import {Skills} from './sections/Skills'
import {About} from './sections/About'
import {Footer} from './sections/Footer'


function App() {
  

  return (
    <div >
      <Navbar/>

      <Hero/>
      <Projects/>
      <Skills/>
      <About/>

      <Footer/>
    </div>
  )
}





export default App
