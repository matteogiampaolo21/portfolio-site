export const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <div>
            <nav className='px-300 pt-50 pb-5'>
                <ul className='flex flex-row gap-x-20 text-xl items-center'>
                
                <li><a className='hover:text-emerald-400' href="">Home</a></li>
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
            <div className="border-b mx-300 border-slate-600 mb-5"></div>

            <div className="grid grid-cols-2 gap-12 px-300 pb-24">
                <div className="text-justify flex flex-col gap-3">
                    <h1 className="text-xl">Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ex sapiente nemo odit possimus incidunt minima, dignissimos fuga, nobis quaerat harum? Labore explicabo optio accusamus illo, in reprehenderit quae modi!</p>
                    <p className="mt-auto text-gray-400">&copy; Matteo Giampaolo {year}</p>
                </div>
                <form className="flex flex-col w-full gap-y-5" action="">
                    <h1 className="text-2xl font-bold">Contact Me</h1>
                    <input type="text" placeholder="Name" className="py-2 px-3 focus:outline-none bg-slate-800 border-b border-slate-600"/>
                    <input type="email" placeholder="Email" className="py-2 px-3 focus:outline-none bg-slate-800 border-b border-slate-600"/>
                    <textarea rows="7" placeholder="Your Message" className="py-2 px-3 focus:outline-none bg-slate-800 border-b border-slate-600"></textarea>
                    <button className="border-2   rounded px-4 py-1 hover:bg-emerald-500 hover:text-white border-emerald-400  hover:border-white">Submit</button>
                </form>
            </div>
            
            
        </div>
    )
}