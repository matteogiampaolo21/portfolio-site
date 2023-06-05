import { useEffect, useState } from "react"

export const Navbar = () => {

    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    

    const controlNavbar = () => {
      
      if (typeof window !== 'undefined') { 
        if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
        } else { // if scroll up show the navbar
          setShow(true);  
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };

    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);

  

    return(
      <nav className={`navbar px-300 py-3 bg-slate-900 active ${show && 'hidden'}`}>
        <ul className='flex flex-row gap-x-20 text-xl items-center'>
          <li><h1 className='text-4xl '>MG  </h1></li>
          <li className='ml-auto'><a className='hover:text-emerald-400' href="">Home</a></li>
          <li><a className='hover:text-emerald-400 ' href="">Projects</a></li>
          <li><a className='hover:text-emerald-400 ' href="">About Me</a></li>
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
  