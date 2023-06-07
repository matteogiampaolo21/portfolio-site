export const Skills = () => {
    const boxStyle = "bg-slate-800 font-bold text-lg text-center break-word shadow-lg h-12 items-center flex justify-center rounded-sm"
    return(
      <div className='bg-emerald-500 w-full py-12 '>
        <div className='grid grid-cols-5 gap-5  w-my-xl mx-auto xl:w-my-lg'>        
  
          <div className={boxStyle}>HTML</div>
          <div className={boxStyle}>CSS</div>
          <div className={boxStyle}>JavaScript</div>
          <div className={boxStyle}>React</div>
          <div className={boxStyle}>Tailwind</div>
  
          <div className={boxStyle}>NodeJS</div>
          <div className={boxStyle}>Express</div>
          <div className={boxStyle}>MongoDB</div>
          <div className={boxStyle}>Firebase</div>
          <div className={boxStyle}>REST API</div>
          
  
        </div>
      </div>
    )
  }