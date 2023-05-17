import React from "react";

const Hero = () => {
  return (
    <header className=' w-full flex justify-between flex-1 items-center my-20 max-w-[1200px] mx-auto '>
      <div className='ml-20'>
        <h1 className='text-primary-primary text-2xl hover:text-primary-secondary'><span className="text-primary-dru_white">My name is </span>Dru<span className="text-primary-dru_white">, and I'm a </span>front-end developer</h1>
      </div>

      <div className='w-96 h-96 bg-hero bg-no-repeat rounded-full bg-center border-4 border-primary-primary justify-center flex'></div>
    </header>
  );
};

export default Hero;
