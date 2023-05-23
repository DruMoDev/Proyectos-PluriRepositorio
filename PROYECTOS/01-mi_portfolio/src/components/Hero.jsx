/* eslint-disable react/no-unescaped-entities */
import React from "react";
import imagen1 from "../assets/yo.png";

const Hero = () => {
  return (
    <div
      id='hero'
      className='w-10/12 flex flex-col items-center justify-center gap-16 lg:gap-20 mx-auto h-[80vh] lg:mt-16 '
    >
      <div>
        <h1 className='leading-10 md:text-3xl lg:text-[33px] text-primary text-2xl text-center'>
          <span className='text-dru_white'>My name is </span>Dru, <br />
          <span className='text-dru_white '>and I'm a </span>
          Front-end Developer
        </h1>
      </div>

      <div className='rounded-full overflow-hidden border-4 border-primary h-[250px] w-[250px] flex justify-center items-center lg:h-[400px] lg:w-[400px]'>
        <img src={imagen1} />
      </div>
      <p className='text-gray-300 text-xl sm:text-3xl lg:text-4xl lg:mt-20 text-center w-9/12'>
        I have a <span className='text-primary'>double degree</span> in physical
        activity and sport sciences and physiotherapy.
      </p>
    </div>
  );
};

export default Hero;
