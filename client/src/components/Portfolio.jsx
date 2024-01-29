import React from 'react';
import chat from '../assets/chat.jpg';
import food from '../assets/chat.jpg'; // Please make sure this is correct
import password from '../assets/password.jpg';
import social from '../assets/social.jpg';
import ai from '../assets/ai.png';

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: chat },
    { id: 2, src: food },
    { id: 3, src: password },
    { id: 4, src: social },
    { id: 5, src: ai },
    { id: 6, src: chat },
  ];

  return (
    <div id="portfolio" className='bg-gradient-to-b  w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4  border-cyan-200 text-blue-600'>My recent Projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 rounded'>
          {portfolios.map(({ id, src }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={src}
                  alt={`Project ${id}`}
                  className='object-cover w-full h-full rounded-md duration-200 hover:scale-105'
                />
              </div>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
