import { useEffect, useState } from "react"

export const Navbar = () => {


    // const [smallNavbar, setNavbar] = useState(true)

   

    // useEffect(() => {
    
    //   function handleResize() {
    //     console.log(innerWidth)
    //     if (window.innerWidth <= 640){
    //       setNavbar(true)
          
    //     }else{
    //       setNavbar(false)
          
    //     } 
    //   }
    //   handleResize()
    //   window.addEventListener('resize', handleResize) 
    // });

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
      
      <div >
        <nav className={`active ${show && 'hidden'}`}>
          <ul className=' flex flex-row py-3  mx-auto  gap-x-20 text-xl items-center w-300 sm:w-440 md:w-750 xl:w-1260 '>
              
           
              
            <li className="ml-auto navbar-color px-5 py-2 rounded border-2 border-slate-950 bg-slate-900">
              <div className='flex flex-row gap-5 items-center'>
                <i className="fa-solid  fa-envelope text-3xl hover:text-emerald-400"></i>

                <i className="fa-brands fa-github text-3xl hover:text-emerald-400"></i>

                <i className="fa-solid fa-file-pdf text-3xl hover:text-emerald-400"></i>
              </div>
            </li>
          </ul>
        </nav>
        {/* {!smallNavbar ? 

          <nav >
            <ul className='flex flex-row w-my-xl mx-auto  gap-x-20 text-xl items-center'>
              
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

        :
          <nav >
            <ul className='flex flex-row  mx-auto  gap-x-20 text-xl items-center w-300'>
              
            
              
              <li className="ml-auto">
                <div className='flex flex-row gap-5 items-center'>
                  <i className="fa-solid fa-envelope fa-xl hover:text-emerald-400"></i>
                  <i className="fa-brands fa-github fa-xl hover:text-emerald-400"></i>
                  
                  
                  <button className='border-2 rounded px-4 py-1 hover:bg-emerald-500 hover:text-white border-emerald-400  hover:border-white'> Resume </button>
                
                </div>
              </li>
            </ul>
          </nav>

        } */}
      </div>

      
    )
  }
  