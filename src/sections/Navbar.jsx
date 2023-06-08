import { useEffect, useState } from "react"

export const Navbar = () => {


    const [smallNavbar, setNavbar] = useState(true)

   

    useEffect(() => {
    
      function handleResize() {
        console.log(innerWidth)
        if (window.innerWidth <= 640){
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
        {!smallNavbar ? 

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

        }
      </div>

      
    )
  }
  