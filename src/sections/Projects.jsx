
import mercury from '../assets/mercury.png';
import charon from '../assets/charon.png';
import bugtracker from '../assets/bug-tracker.png'


export const Projects = () => {
    const imgStyle = "  object-cover shadow-xl  w-full h-img-xs   sm:h-img-sm md:h-img-md xl:w-3/4 xl:h-auto";
    const cardStyle = " flex flex-col  bg-zinc-900 p-5 shadow-xl  h-auto  xl:w-1/4 ";
    return (
        <div className=" project-block py-24 w-full">
            
            <div className='flex flex-col gap-10  mx-auto w-300 sm:w-440 md:w-750 md:gap-16 xl:w-1260'>


                <div className=' flex flex-col xl:flex-row'>
                    <img className={imgStyle} src={mercury} alt="Texting App." />
                    <div className={cardStyle}>
                        <h2 className='mb-5 font-bold text-emerald-300 text-2xl'>Mercury</h2>
                        <p className=' mb-6 text-lg'>A texting app made with Firebase and React. Users can create rooms with multiple people, and can contact individual people through contacts.</p>
                        <div className='mt-auto'>
                            <a href="https://github.com/matteogiampaolo21/chat-app-firebase"><i className="fa-brands fa-github fa-2xl hover:text-emerald-400"></i></a>
                            <i className="ml-3 fa-solid fa-link fa-xl hover:text-emerald-400"></i>
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col xl:flex-row'>
                    <img className={imgStyle} src={charon} alt="Texting App." />
                    <div className={cardStyle}>
                        <h2 className=' mb-5 font-bold text-emerald-300 text-2xl'>Charon</h2>
                        <p className=' mb-6 text-lg'>A ecommerce site made with React and Typescript. Users can browse through products and specific categories, and add them to cart. The site uses the DummyJSON API to show fake products.</p>
                        <div className='mt-auto'>
                            <a href="https://github.com/matteogiampaolo21/TypeScript-Ecommerce"><i className="fa-brands fa-github fa-2xl hover:text-emerald-400"></i></a>
                            <i className="ml-3 fa-solid fa-link fa-xl hover:text-emerald-400"></i>
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col xl:flex-row'>
                    <img className={imgStyle} src={bugtracker} alt="Texting App." />
                    <div className={cardStyle}>
                        <h2 className=' mb-5 font-bold text-emerald-300 text-2xl'>Bug Tracker</h2>
                        <p className=' mb-6 text-lg'>This site was build using the MERN stack and has full CRUD functionalities and authentication. Users can login, create projects and other users to projects. Inside projects users can add tickets to track their work.</p>
                        <div className='mt-auto'>
                            <a href="https://github.com/matteogiampaolo21/MERN-Bug-Tracker"><i className="fa-brands  fa-github fa-2xl hover:text-emerald-400"></i></a>
                        </div>
                    </div>
                </div>  
            
                
            </div>
            
        </div>
    );
}