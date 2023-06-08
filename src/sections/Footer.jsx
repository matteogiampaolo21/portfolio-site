import { Navbar } from "./Navbar";
export const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <div className="pt-5">
            <Navbar/>
            <div className="border-b mx-auto  border-slate-600 mt-5 w-300"></div>

            <div className="grid  gap-12  mx-auto pb-24 w-300 grid-cols-1 mt-4">
                <form className="flex flex-col w-full gap-y-5" action="">
                    <h1 className="text-2xl font-bold">Contact Me</h1>
                    <input type="text" placeholder="Name" className="py-2 px-3 focus:outline-none bg-slate-800 border-b border-slate-600"/>
                    <input type="email" placeholder="Email" className="py-2 px-3 focus:outline-none bg-slate-800 border-b border-slate-600"/>
                    <textarea rows="7" placeholder="Your Message" className="py-2 px-3 focus:outline-none bg-slate-800 border-b border-slate-600"></textarea>
                    <button className="border-2   rounded px-4 py-1 hover:bg-emerald-500 hover:text-white border-emerald-400  hover:border-white">Submit</button>
                </form>
                <div className="text-justify flex flex-col gap-3">
                    <h1 className="text-xl"></h1>
                    <p></p>
                    <p className="mb-auto ml-auto text-gray-400 ">&copy; Matteo Giampaolo {year}</p>
                </div>
                
            </div>
            
            
        </div>
    )
}