import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import SignOut from "./SignOut";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-gray-800 fixed w-full top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <span className='h-8 w-8 text-white' >Estudio de Nuria Casals</span>
          </div>
          <div className='md:hidden'>
            <button
              onClick={handleMenuToggle}
              className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-xl'
            >
              {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <a
                href='#'
                className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
              >
                Inicio
              </a>
              <a
                href='#'
                className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
              >
                Acerca de
              </a>
              <a
                href='#'
                className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
              >
                Servicios
              </a>
              <a
                href='#'
                className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className='md:hidden flex flex-col items-center justify-center pb-6 space-y-1'>            
              <a
                href='#'
                className='text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium'
              >
                Inicio
              </a>
              <a
                href='#'
                className='text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium'
              >
                Acerca de
              </a>
              <a
                href='#'
                className='text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium'
              >
                Servicios
              </a>
              <a
                href='#'
                className='text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium'
              >
                Contacto
              </a>
              <SignOut />
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
