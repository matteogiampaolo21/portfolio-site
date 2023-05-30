
import './App.css'
import {Hero} from  './Hero'
import {Projects} from './Projects'

function App() {
  

  return (
    <div >
      <Navbar/>
      <Hero/>
      <Projects/>
    </div>
  )
}


const Navbar = () => {
  return(
    <nav className='px-300 pt-50'>
      <ul className='flex flex-row gap-x-20 text-xl items-center'>
        <li><h1 className='text-4xl '>MG  </h1></li>
        <li className='ml-auto'><a className='text-emerald-400' href="">Home</a></li>
        <li><a className='text-emerald-400 ' href="">Projects</a></li>
        <li className='mr-auto'><a className='text-emerald-400 ' href="">Contact</a></li>
        <li><h1 className='text-4xl '>MG  </h1></li>
      </ul>
    </nav>
  )
}

export default App
