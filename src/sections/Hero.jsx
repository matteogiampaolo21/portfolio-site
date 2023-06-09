export const Hero = () => {

    const clickHereStyle = 'hover:underline cursor-pointer text-emerald-400 hover:text-emerald-300 duration-700'
    return(
        <div className="hero-grid mx-auto w-300 my-24 sm:w-440 md:w-750 md:mb-44 xl:w-1260 xl:mt-48 xl:mb-60">
            <div className="flex flex-col">
                <div className="h-1/3 w-full left-border rounded-tl-sm"></div>
                <div className="h-3/4"></div>
            </div>

            <div className="flex flex-col my-5 mx-2 ">
                <h1 className=" text-2xl sm:text-3xl md:text-4xl">Matteo Giampaolo.</h1>
                <div>
                    <p className="text-gray-300 text-lg mt-3 md:text-xl">
                        I am 16 years old, and I started coding when I was 13. I thoroughly enjoyed coding, which led me to start
                        projects and courses on my own. I have a great passion to continue to learn and develop my skills and
                        knowledge.
                        <br /><br />
                        <span className={clickHereStyle}>Click here</span> for a quick overview of my projects.
                    </p>
                    
                        
                    
                </div>
            </div>


            <div className="flex flex-col">
                <div className="h-3/4"></div>
                <div className="w-full h-1/3 right-border rounded-br-sm"></div> 
            </div>

        </div>
    );
}


