
import './App.css'

function App() {
  

  return (
    <div >
      <Navbar/>
    </div>
  )
}


const Navbar = () => {
  return(
    <nav className='p-3 mx-5 '>
      <ul className='flex flex-row gap-x-10 text-xl items-center'>
        <li><h1 className='text-3xl ml-5'>Brand</h1></li>
        <li className='ml-auto'><a className='' href="">Projects</a></li>
        <li><a className='' href="">About</a></li>
        <li className='mr-5'><a className='' href="">Contact</a></li>
      </ul>
    </nav>
  )
}

export default App
