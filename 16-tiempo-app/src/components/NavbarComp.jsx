import { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function NavbarComp() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col justify-center items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row  lg:items-center lg:gap-6 '>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center text-white text-lg'>
          Pages
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center text-white text-lg'>
          Account
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center text-white text-lg'>
          Blocks
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center text-white text-lg'>
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='bg-gradient-to-r from-wattle-500 to-wattle-800 sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          className='mr-4 cursor-pointer py-1.5 font-medium text-white'
        >
          Tiempo App Dru
        </Typography>
        <div className='flex items-center gap-4'>
          <div className='mr-4 hidden lg:block'>{navList}</div>
          <Button
            size='sm'
            className='hidden lg:inline-block bg-wattle-500 text-black shadow-wattle-700'
          >
            <span>Buy Now</span>
          </Button>
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='h-6 w-6 text-white'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <div className={openNav ? "block" : "hidden"}>
        {navList}
        <Button
          className='bg-gradient-to-tr from-wattle-50 to-wattle-200 mb-2 text-black shadow-wattle-700'
          size='sm'
          fullWidth
        >
          <span>Buy Now</span>
        </Button>
      </div>
    </Navbar>
  );
}
