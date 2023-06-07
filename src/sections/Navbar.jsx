import { useEffect, useState } from "react"

export const Navbar = () => {


    const [smallNavbar, setNavbar] = useState(false)

   

    useEffect(() => {
    
      function handleResize() {
        if (window.innerWidth <= 1300){
          setNavbar(true)
          
        }else{
          setNavbar(false)
          
        } 
      }
      handleResize()
      window.addEventListener('resize', handleResize) 
    });

  

    return(
      
      <div >
        {smallNavbar ? 

          <nav >
            <ul className='flex flex-row w-my-xl mx-auto  gap-x-20 text-xl items-center xl:gap-x-14 xl:w-my-lg lg:w-my-md lg:gap-x-2'>
              
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
              <li><button className="">Click</button></li>
            </ul>
          </nav>

        :
          <nav className={`  py-7 active '}`}>
            <ul className='flex flex-row w-my-xl mx-auto  gap-x-20 text-xl items-center xl:gap-x-14 xl:w-my-lg lg:w-my-md lg:gap-x-2'>
              
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

        }
      </div>

      
    )
  }
  