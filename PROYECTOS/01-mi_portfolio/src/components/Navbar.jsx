import React, { useState } from "react";
// import logo from "/src/assets/logo-no-background.png"
import menu from "/src/assets/menu-icon.svg";
import close from "/src/assets/close-icon.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='max-w-[1200px] m-auto flex py-6 justify-between items-center bg-slate-500 shadow-md'>
      {/* <img src={logo} alt='dru-logo' className='w-auto h-9 pl-20'></img> */}
      <ul className='list-none sm:flex hidden justify-center gap-16 items-center flex-1 '>
        <li className='hover:text-primary-secondary font-poppins font-normal cursor-pointer bg-black text-xl text-primary-primary'>
          <a href='#home'>Home</a>
        </li>
        <li className='hover:text-primary-secondary font-poppins font-normal cursor-pointer text-xl text-primary-primary '>
          <a href='#features'>Features</a>
        </li>
        <li className='hover:text-primary-secondary font-poppins font-normal cursor-pointer text-xl text-primary-primary '>
          <a href='#product'>Product</a>
        </li>
        <li className='hover:text-primary-secondary font-poppins font-normal cursor-pointer text-xl text-primary-primary '>
          <a href='#clients'>Clients</a>
        </li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-7 h-7 object-contain mr-4'
          onClick={() => setToggle(prev => !prev)}
        ></img>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex justify-end flex-col items-center flex-1 bg-primary-dru_white p-0 m-0 rounded-2xl w-[300px]'>
            <li className='hover:bg-[#1c1c1ce3] p-10 w-full text-center font-poppins font-normal cursor-pointer text-2xl text-primary-primary mb-4'>
              <a href='#home'>Home</a>
            </li>
            <li className='hover:bg-[#1c1c1ce3] w-full text-center p-10 font-poppins font-normal cursor-pointer text-2xl text-primary-primary mb-4'>
              <a href='#features'>Features</a>
            </li>
            <li className='hover:bg-[#1c1c1ce3] w-full text-center p-10 font-poppins font-normal cursor-pointer text-2xl text-primary-primary mb-4'>
              <a href='#product'>Product</a>
            </li>
            <li className='hover:bg-[#1c1c1ce3] w-full text-center p-10 font-poppins font-normal cursor-pointer text-2xl text-primary-primary mr-0'>
              <a href='#clients'>Clients</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
