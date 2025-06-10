import React from 'react'

const Navbar = () => {
    return (
      <div className='h-40 justify-center items-center flex '>
        <div className='flex  gap-8 justify-around items-center bg-gray-600 h-10 rounded-4xl w-1/2'>
          <ul className='flex justify-center items-center gap-6  text-md font-medium'>
          <li className="group hover:text-white transition-all relative">
  <a href="">Accueil</a>
  <span className="absolute bottom-0 left-0 h-0.5 bg-green-500 w-0 transition-all duration-300 group-hover:w-full"></span>
</li>
<li className="group hover:text-white transition-all relative">
  <a href="">Projects</a>
  <span className="absolute bottom-0 left-0 h-0.5 bg-green-500 w-0 transition-all duration-300 group-hover:w-full"></span>
</li>

<li className="group hover:text-white transition-all relative">
  <a href="">About me</a>
  <span className="absolute bottom-0 left-0 h-0.5 bg-green-500 w-0 transition-all duration-300 group-hover:w-full"></span>
</li>
            
          </ul> 
           <div >
            <a className='cursor-pointer font-bold'>Get in Touch</a>
          </div>
        </div>
      </div>
    );
  };
  

export default Navbar