
import './App.css'
import {Hero} from  './sections/Hero'
import {Projects} from './sections/Projects'


function App() {
  

  return (
    <div >
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
    </div>
  )
}


const Navbar = () => {
  return(
    <nav className='px-300 pt-50'>
      <ul className='flex flex-row gap-x-20 text-xl items-center'>
        <li><h1 className='text-4xl '>MG  </h1></li>
        <li className='ml-auto'><a className='hover:text-emerald-400' href="">Home</a></li>
        <li><a className='hover:text-emerald-400 ' href="">Projects</a></li>
        <li className='mr-auto'><a className='hover:text-emerald-400 ' href="">Contact</a></li>
        <li>
          <div className='flex flex-row gap-5 items-center'>
            <i className="fa-solid fa-envelope fa-xl hover:text-emerald-400"></i>
            <i className="fa-brands fa-github fa-xl hover:text-emerald-400"></i>
            
            
            <button className='border-2 rounded px-4 py-1 hover:bg-emerald-500 hover:text-white border-emerald-400  hover:border-white'> Resume </button>
          
          </div>
        </li>
      </ul>
    </nav>
  )
}

const Skills = () => {
  return(
    <div>
      
    </div>
  )
}

export default App
