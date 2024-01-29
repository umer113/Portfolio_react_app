import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import TypeWriter from 'typewriter-effect';
import heroImg from '../assets/black.png';
import "../index.css";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Home = () => {

  
  return (
    <div id="home" className=' text-white min-h-screen flex items-center'>
      <div className='container mx-auto flex flex-col md:flex-row pt-16 md:pt-0'>
        <div className='flex-1 flex-center flex-col lg:items-start mb-8 md:mb-0 md:mr-8'>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10'>
            Hi I'm <span className='text-blue-500'>Umer</span>
          </h2>
          <span className='text-lg md:text-4xl'>
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('A MERN Stack Developer')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('A Full Stack Developer')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('An Emerging Software Engineer')
                  .pauseFor(1500)
                  .start();
              }}
              cursor={{ show: true, blink: true }}
              options={{
                delay: 50,
                deleteSpeed: 70,
                typeSpeed: 90,
                loop: true,
              }}
            />
          </span>

          <p className='text-sm md:text-base lg:text-lg mb-4 mt-3 md:mt-5'>
            Emerging Software Engineer with a strong foundation in Python, JavaScript, and Web Development technologies.
            Currently pursuing a Bachelor's degree in Software Engineering at UBIT Computer Science Department
          </p>

          <ScrollLink to="portfolio" smooth={true} duration={900}>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md flex items-center group mt-3 md:mt-5'>
              Portfolio
              <span className='transition-transform p-1 pt-2 pb-2 duration-300 group-hover:rotate-90'>
                <HiArrowNarrowRight />
              </span>
            </button>
          </ScrollLink>
        </div>

        <div className='md:w-1/2'>
          <img src={heroImg} alt="ProfilePic" className='md:rounded-md max-h-96' />
        </div>
      </div>
    </div>
  );
};

export default Home;
