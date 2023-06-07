export const Hero = () => {

    const clickHereStyle = 'hover:underline cursor-pointer text-emerald-400 hover:text-emerald-300 duration-700'
    return(
        <div className="hero-grid mt-60 mb-60 w-my-xl mx-auto xl:w-my-lg">
            <div className="flex flex-col">
                <div className="h-1/3 w-full left-border rounded-tl-sm"></div>
                <div className="h-3/4"></div>
            </div>

            <div className="flex flex-col my-5 mx-24 xl:mx-12 lg:mx-8">
                <h1 className="text-7xl break-words ">Matteo Giampaolo.</h1>
                <div>
                <p className="text-lg mt-3 text-justify">
                I am 16 years old, and I started coding when I was 13. I thoroughly enjoyed coding, which led me to start
                projects and courses on my own. I have a great passion to continue to learn and develop my skills and
                knowledge.</p>
                <p className="text-lg mt-5">
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


