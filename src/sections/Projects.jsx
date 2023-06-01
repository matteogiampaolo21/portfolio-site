
import mercury from '../assets/mercury.png';
import charon from '../assets/charon.png';
import bugtracker from '../assets/bug-tracker.png'


export const Projects = () => {

    return (
        <div className="bg-emerald-500 project-block ">

                

            
            <div className='project-grid gap-10 '>


                <div className='grid-area-1 flex flex-col h-full'>
                    <img className=' w-full h-full object-cover shadow-xl ' src={mercury} alt="Texting App." />
                    <div className="bg-zinc-700 h-full p-5 shadow-xl ">
                        <h2 className='text-4xl mb-5 font-bold text-emerald-300'>Mercury</h2>
                        <p className='text-2xl'>A texting app made with <span className=''> Firebase </span>and <span className=''>React</span>. Users can create rooms with multiple people, and can contact individual people through contacts.</p>
                    </div>
                </div>

                <div className=' grid-area-2 flex flex-col h-full'>
                    <img className=' w-full h-full object-cover shadow-xl ' src={charon} alt="Texting App." />
                    <div className="bg-zinc-700 h-full p-5 shadow-xl ">
                        <h2 className='text-4xl mb-5 font-bold text-emerald-300'>Charon</h2>
                        <p className='text-2xl'>A ecommerce site made with React and Typescript. Users can browse through products and specific categories, and add them to cart. The site uses the DummyJSON API to show fake products.</p>
                    </div>
                </div>

                <div className=' grid-area-3 flex flex-col h-full'>
                    <img className=' w-full h-full object-cover shadow-xl ' src={bugtracker} alt="Texting App." />
                    <div className="bg-zinc-700 h-full p-5 shadow-xl ">
                        <h2 className='text-4xl mb-5 font-bold text-emerald-300'>Bug Tracker</h2>
                        <p className='text-2xl'>This site was build using the MERN stack and has full CRUD functionalities and authentication. Users can login, create projects and other users to projects. Inside projects users can add tickets to track their work.</p>
                    </div>
                </div>  
                
                
            </div>
            
        </div>
    );
}