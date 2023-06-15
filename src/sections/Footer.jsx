import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import resume from '../assets/MatteoGiampaoloResume.pdf';


export const Footer = () => {
    const year = new Date().getFullYear();
    const form = useRef();
    const [isBtn, setBtnState] = useState(false)

    
    
    const sendEmail = (e) => {
        setBtnState(true)
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, form.current, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            console.log(result.text);
            document.getElementById("contact-form").reset();
            setBtnState(false);
            alert("form has been sent");
        }, (error) => {
            console.log(error.text);
        });
    } 


    return (
        <div className="pt-5">
            
            {/* <div className="border-b mx-auto  border-slate-600 mt-5 w-300 sm:w-440 md:w-750 xl:w-1260"></div> */}

            <div className="grid  gap-12  mx-auto pb-24 w-300 grid-cols-1 mt-4 sm:w-440 md:w-750 xl:w-1260 xl:grid-cols-2">
                <form id="contact-form" ref={form} onSubmit={sendEmail} className="flex flex-col w-full gap-y-5" action="">
                    <h1 className="text-2xl font-bold">Contact Me</h1>
                    <input required name="user_name" type="text" placeholder="Name" className="py-2 px-3 focus:outline-none bg-slate-800 border-b border-slate-600"/>
                    <input required name="user_email"  type="email" placeholder="Email" className="py-2 px-3 focus:outline-none bg-slate-800 border-b border-slate-600"/>
                    <textarea required name="message"  rows="7" placeholder="Your Message" className="py-2 px-3 focus:outline-none bg-slate-800 border-b border-slate-600"></textarea>
                    <button disabled={isBtn} type="submit"  className="border-2   rounded px-4 py-1 hover:bg-emerald-500 hover:text-white border-emerald-400  hover:border-white">{isBtn?<div className='loader'> </div> :<p>Submit</p> }</button>
                </form>
                <div className="text-justify ml-auto ">
                    
                    <div className="flex gap-5">
                        <a href={resume} target='_blank' rel="noopener noreferrer"><i className="fa-solid fa-file-pdf fa-xl hover:text-emerald-400 my-auto"></i></a>
                        <a href="https://github.com/matteogiampaolo21" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-github fa-xl hover:text-emerald-400 my-auto"></i></a>
                        <p className="mb-auto mr-auto text-gray-400 xl:ml-auto xl:mr-0">&copy; Matteo Giampaolo {year}</p>
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}
