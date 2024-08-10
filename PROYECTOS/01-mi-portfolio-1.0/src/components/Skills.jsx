import React from "react";

function Skills() {
  return (
    <div
      id='skills'
      className=' w-10/12 flex flex-col  justify-center items-center gap-10 lg:gap-20 mx-auto mb-28'
    >
      <p className='text-gray-300 text-xl sm:text-3xl lg:text-4xl lg:mt-20 text-center'>
        But the most important are <br />
        <span className='text-primary text-2xl'>
          my web development skills.
        </span>
      </p>
      <div className='grid grid-cols-3 gap-5 lg:gap-16'>
        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
          className='h-28 w-28 lg:w-40 lg:h-40 p-2 hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out'
        />
        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
          className='h-28 w-28 lg:w-40 lg:h-40 p-2 hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out'
        />
        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
          className='h-28 w-28 lg:w-40 lg:h-40 p-2 hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out'
        />
        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
          className='h-28 w-28 lg:w-40 lg:h-40 p-2 hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out'
        />
        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
          className='h-28 w-28 lg:w-40 lg:h-40 p-2 hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out'
        />
      </div>
    </div>
  );
}

export default Skills;
