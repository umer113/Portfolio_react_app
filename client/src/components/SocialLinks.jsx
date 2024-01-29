import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/shaikh-umer-qadir-10625a231/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/umer113",
    },
    {
      id: 3,
      child: (
        <>
          Gmail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:umerqadir113@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {Links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gradient-to-r from-cyan-400 to to-blue-600 hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
          >
            <a href={href} className='flex justify-between items-center w-full text-white' target="_blank">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
