import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  '>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex cursor-pointer hover:font-normal'>
        <li className='p-4 text-[#00df9a] text-lg font-bold' href='/'>Home</li>
        <li className='p-4 text-[#00df9a] text-lg font-bold' href='/contact'>Learn</li>
        <li className='p-4 text-[#00df9a] text-lg font-bold' href='/about'>Games</li>
        <li className='p-4 text-[#00df9a] text-lg font-bold' href='/login'>Parents</li>
        <li className='p-4 text-[#00df9a] text-lg font-bold' href='/register'>Register</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] '}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600 text-[#00df9a]' href='/'>Home</li>
          <li className='p-4 border-b border-gray-600 text-[#00df9a]' href='/about'>Learn</li>
          <li className='p-4 border-b border-gray-600 text-[#00df9a]' href='/contact'>Games</li>
          <li className='p-4 border-b border-gray-600 text-[#00df9a]' href='/login'>Parents</li>
          <li className='p-4 text-white' href='/register'>Register</li>
      </ul>
    </div>
  );
};

export default Navbar;