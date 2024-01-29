// Navbar.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Add this line
import { toggleMode } from '../feature/ThemeSlice';


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);


  const Links = [
    {
      id: 1,
      link: <BsFillMoonStarsFill onClick={() => dispatch(toggleMode())} />,
    },
    {
      id: 2,
      link: (
        <a
          href="/Resume.pdf"
          download
          className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
          Resume
        </a>
      ),
    },
    {
      id: 3,
      link: (
        <ScrollLink to="home" smooth={true} duration={900}>
          Home
        </ScrollLink>
      ),
    },
    {
      id: 4,
      link: (
        <ScrollLink to="about-section" smooth={true} duration={900}>
          About
        </ScrollLink>
      ),
    },
    {
      id: 5,
      link: (
        <ScrollLink to="contact-section" smooth={true} duration={900}>
          Contact
        </ScrollLink>
      ),
    },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true });
  };

  return (
    <div className="bg-gradient-to-r from-violet-950 to-fuchsia-950 flex items-center justify-between w-full h-20 text-white fixed z-10">
      <div className="flex items-center">
        <h1 className="text-2xl md:text-5xl font-signature ml-2" onClick={scrollToTop}>
          Umer
        </h1>
      </div>

      <ul className="hidden md:flex items-center">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-2 md:px-4 cursor-pointer capitalize transition duration-300 ${
              hoveredLink === id
                ? 'text-cyan-400 underline'
                : 'text-white hover:text-cyan-500 hover:underline'
            }`}
            onMouseEnter={() => setHoveredLink(id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link}
          </li>
        ))}
      </ul>

      <div onClick={() => setNavbar(!navbar)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navbar && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-500">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-2 md:px-4 cursor-pointer capitalize transition duration-300 ${
                hoveredLink === id
                  ? 'text-cyan-400 underline'
                  : 'text-white hover:text-cyan-500 hover:underline'
              }`}
              onMouseEnter={() => setHoveredLink(id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
