import "./Navbar.css";
import { useState, Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Open, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <div className=' fixed top-0 left-0 w-full z-20 bg-black block md:flex flex-row justify-between border-black text-white'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-4xl font-semibold italic p-4 ml-3'>JebobFood</h1>
          <div className={Open? 'navclose' : null}>
              <button className='md:hidden p-5 mr-2 ' onClick={open}>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
          </div>
          <div className={Open? null:'navclose'} onClick={close}>
              <button className='md:hidden p-5 mr-2'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
          </div>
        </div>
        <div className={Open ? null : "navclose"}>
          <ul className='block md:flex flex-row text-white font-medium md:mr-6'>
            <li>
              <Link className='p-6 flex items-center hover:bg-gray-900 text-2xl' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='p-6 flex items-center hover:bg-gray-900 text-2xl' to='/menu'>
                Menu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
