import React, { useState } from 'react'
import styles from '../style';
import { close, menu } from '../assets';
import { navLinks } from '../constants';

const NavbarScroll = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full ${styles.flexCenter}  py-4 fixed top-0 z-[10]`}>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins 
            font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-ppoppins 
              font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default NavbarScroll