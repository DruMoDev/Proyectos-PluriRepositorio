import React, { useState } from "react";
// import logo from "/src/assets/logo-no-background.png"
import menu from "/src/assets/menu-icon.svg";
import close from "/src/assets/close-icon.svg";



const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex sm:shadow-md static  sm:shadow-primary h-16 items-center'>
      {/* <img src={logo} alt='dru-logo' className='w-auto h-9 pl-20'></img> */}
      <ul className='list-none sm:flex hidden justify-center gap-16 items-center flex-1 '>
        <li className='hover:text-dru_white cursor-pointer text-xl text-primary p-2 transition1 hover:-translate-y-1'>
          <a href="hero" className="underline1">About Me</a>
        </li>
        <li className='hover:text-dru_white cursor-pointer text-xl text-primary p-2 transition1 hover:-translate-y-1'>
          <a href="#skills" className="underline1">Skills</a>
        </li>
        <li className='cursor-pointer text-lg text-dark bg-primary p-2 px-3 rounded-xl hover:bg-dark hover:text-primary border-2 border-dark hover:border-primary font-bold uppercase transition1'>
          <a href='#projects' >Projects</a>
        </li>
        <li className='hover:text-dru_white  cursor-pointer text-xl text-primary p-2 transition1 hover:-translate-y-1'>
          <a href='#contact' className="underline1">Contact</a>
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
          }  absolute top-20 right-7 min-w-[140px] rounded-lg overflow-hidden sidebar border-2 border-primary bg-dark bg-opacity-95 w-[250px] justify-center`}
        >
          <ul className="w-full h-full">
            <li className='py-6 w-full text-center cursor-pointer text-2xl text-primary transition1'>
              <a href='#home' className="underline1">About Me</a>
            </li>
            <li className='w-full text-center py-6 cursor-pointer text-2xl text-primary transition1'>
              <a href='#features' className="underline1">Skills</a>
            </li>
            <li className='w-full text-center py-2 cursor-pointer text-2xl '>
              <a href='#product' className="text-dark p-4 px-7 rounded-lg font-semibold bg-primary border-2 border-dark hover:border-primary hover:bg-dark hover:text-primary transition1">Projects</a>
            </li>
            <li className='w-full text-center py-6 cursor-pointer text-2xl text-primary transition1 '>
              <a href='#clients' className="underline1">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
