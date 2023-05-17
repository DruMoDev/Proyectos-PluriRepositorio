import React from "react";

const Hero = () => {
  return (
    <div id="hero" className=' w-10/12 flex flex-col items-center justify-center gap-10 lg:gap-20 mx-auto'>
      <div>
        <h1 className='leading-10 md:text-3xl lg:text-[33px] text-primary text-2xl hover:text-secondary text-center'>
          <span className='text-dru_white'>My name is </span>Dru
          <span className='text-dru_white '>, and I'm a </span>
          front-end developer
        </h1>
      </div>

      <div className='rounded-full overflow-hidden border-4 border-primary h-[250px] w-[250px] flex justify-center items-center lg:h-[400px] lg:w-[400px]'>
        <img src='/public/yo.png'/>
      </div>
    </div>
  );
};

export default Hero;
