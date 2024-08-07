import React, { useState } from 'react'
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex py-5 justify-between items-center`}>
      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <Link
              activeClass="active"
              spy to={`${nav.id}`}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {nav.title}
            </Link>
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
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute z-[10] top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
              >
                <Link
                  activeClass="active"
                  spy to={`${nav.id}`}
                  smooth={true}
                  offset={-140}
                  duration={500}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar