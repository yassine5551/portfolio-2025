import React from 'react'

const Navbar = () => {
    return (
      <div className='h-40 justify-center items-center flex '>
        <div className='flex  gap-8 justify-around items-center bg-[#27391C] h-12 rounded-4xl w-1/2 shadow-inner shadow-[#255F38]'>
          <ul className='flex justify-center items-center gap-6  text-md font-medium'>
          <li className="group hover:text-white transition-all relative">
  <a className='text-white' href="">Accueil</a>
  <span className="absolute bottom-0 left-0 h-0.5 rounded-full bg-[#1F7D53] w-0 transition-all duration-300 group-hover:w-full"></span>
</li>
<li className="group hover:text-white transition-all relative">
  <a href="">Projects</a>
  <span className="absolute bottom-0 left-0 h-0.5 rounded-full bg-[#1F7D53] w-0 transition-all duration-300 group-hover:w-full"></span>
</li>

<li className="group hover:text-white transition-all relative">
  <a href="">About me</a>
  <span className="absolute bottom-0 left-0 h-0.5 rounded-full bg-[#1F7D53] w-0 transition-all duration-300 group-hover:w-full"></span>
</li>
            
          </ul> 
           <div>
            <a className='scale-75 relative group cursor-pointer font-bold px-2 py-1 rounded-xl text-center  hover:text-white transition-all'>
              Get in Touch
              <span className="z-[-1] absolute bottom-0.5 right-0 p-3 h-1 rounded-full  group-hover:right-[6.5rem] bg-[#1F7D53] w-full transition-all duration-800 group-hover:w-0"></span>
              </a>
          </div>
        </div>
      </div>
    );
  };
  

export default Navbar