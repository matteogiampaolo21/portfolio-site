
import mercury from '../assets/mercury.png';
import charon from '../assets/charon.png';
import bugtracker from '../assets/bug-tracker.png'


export const Projects = () => {
    const imgStyle = " w-2/3 h-img object-cover shadow-xl rounded-l-sm xl:w-full xl:h-96";
    const cardStyle = " flex flex-col h-img bg-zinc-900 p-5 shadow-xl rounded-r-sm xl:h-full";
    return (
        <div className=" project-block w-full">
            
            <div className='flex flex-col gap-10 w-my-xl mx-auto xl:w-my-lg'>


                <div className=' flex flex-row xl:flex-col'>
                    <img className={imgStyle} src={mercury} alt="Texting App." />
                    <div className={cardStyle}>
                        <h2 className='text-4xl mb-5 font-bold text-emerald-300 xl:text-3xl'>Mercury</h2>
                        <p className='text-2xl mb-6 xl:text-xl'>A texting app made with <span className=''> Firebase </span>and <span className=''>React</span>. Users can create rooms with multiple people, and can contact individual people through contacts.</p>
                        <div className='mt-auto'><i className="fa-brands fa-github fa-2xl hover:text-emerald-400"></i> <i className="ml-3 fa-solid fa-link fa-xl hover:text-emerald-400"></i></div>
                    </div>
                </div>

                <div className=' flex flex-row xl:flex-col'>
                    <img className={imgStyle} src={charon} alt="Texting App." />
                    <div className={cardStyle}>
                        <h2 className='text-4xl mb-5 font-bold text-emerald-300 xl:text-3xl'>Charon</h2>
                        <p className='text-2xl mb-6 xl:text-xl'>A ecommerce site made with React and Typescript. Users can browse through products and specific categories, and add them to cart. The site uses the DummyJSON API to show fake products.</p>
                        <div className='mt-auto'><i className="fa-brands fa-github fa-2xl hover:text-emerald-400"></i> <i className="ml-3 fa-solid fa-link fa-xl hover:text-emerald-400"></i></div>
                    </div>
                </div>

                <div className=' flex flex-row xl:flex-col'>
                    <img className={imgStyle} src={bugtracker} alt="Texting App." />
                    <div className={cardStyle}>
                        <h2 className='text-4xl mb-5 font-bold text-emerald-300 xl:text-3xl'>Bug Tracker</h2>
                        <p className='text-2xl mb-6 xl:text-xl'>This site was build using the MERN stack and has full CRUD functionalities and authentication. Users can login, create projects and other users to projects. Inside projects users can add tickets to track their work.</p>
                        <div className='mt-auto'><i className="fa-brands  fa-github fa-2xl hover:text-emerald-400"></i> <i className="ml-3 fa-solid fa-link fa-xl hover:text-emerald-400"></i></div>
                    </div>
                </div>  
            
                
            </div>
            
        </div>
    );
}