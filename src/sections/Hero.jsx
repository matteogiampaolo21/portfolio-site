export const Hero = () => {

    const clickHereStyle = 'hover:underline cursor-pointer text-emerald-400 hover:text-emerald-300 duration-700'
    return(
        <div className="hero-grid my-48 px-300">
            <div className="flex flex-col">
                <div className="h-1/3 w-full left-border rounded-tl-sm"></div>
                <div></div>
            </div>

            <div className="hero-block my-5 mx-24 2xl:mx-10">
                <h1 className="text-8xl break-words ">Matteo <br /> Giampaolo.</h1>
                <p className="text-lg mt-5">
                    I am a web developer passionate about learning and improving my skill set. <br /> <span className={clickHereStyle}>Click here</span> for a quick overview of my projects.
                </p>
            </div>

            <div className="flex flex-col">
                <div className="h-3/4"></div>
                <div className="w-full h-1/3 right-border rounded-br-sm"></div>
            </div>
        </div>
    );
}


