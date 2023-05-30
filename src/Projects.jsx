
import mercury from './assets/mercury.png';

export const Projects = () => {

    return (
        <div className="bg-emerald-500 project-block ">

                <div className='flex flex-col mb-10'>
                    <img className=' w-full shadow-xl rounded-t-md' src={mercury} alt="Texting App." />
                    <div className="bg-zinc-700 p-5 shadow-xl rounded-b-md">
                        <h2 className='text-4xl mb-5 font-bold'>Mercury</h2>
                        <p className='text-2xl'>A texting app made with <span className=''> Firebase </span>and <span className=''>React</span>. Users can create &quot;rooms&quot; with multiple people, and the traditional contact system.</p>
                    </div>
                </div>

            
            <div className='flex flex-row gap-10'>
                <div className='flex flex-col '>
                    <img className=' w-full shadow-xl rounded-t-md' src={mercury} alt="Texting App." />
                    <div className="bg-zinc-700 p-5 shadow-xl rounded-b-md">
                        <h2 className='text-4xl mb-5 font-bold'>Mercury</h2>
                        <p className='text-2xl'>A texting app made with <span className=''> Firebase </span>and <span className=''>React</span>. Users can create &quot;rooms&quot; with multiple people, and the traditional contact system.</p>
                    </div>
                </div>

                <div className='flex flex-col '>
                    <img className=' w-full shadow-xl rounded-t-md' src={mercury} alt="Texting App." />
                    <div className="bg-zinc-700 p-5 shadow-xl rounded-b-md">
                        <h2 className='text-4xl mb-5 font-bold'>Mercury</h2>
                        <p className='text-2xl'>A texting app made with <span className=''> Firebase </span>and <span className=''>React</span>. Users can create &quot;rooms&quot; with multiple people, and the traditional contact system.</p>
                    </div>
                </div>  
                
                
            </div>
            
        </div>
    );
}