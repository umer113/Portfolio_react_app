import React from 'react';
import { FaCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const services = [
    {
        icon: <FaDatabase />,
        name: 'Database Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis nisi iure officia animi omnis optio ea quidem quae ipsam!',
      },
  {
    icon: <FaDatabase />,
    name: 'Database Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis nisi iure officia animi omnis optio ea quidem quae ipsam!',
  },
  {
    icon: <FaDatabase />,
    name: 'Database Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis nisi iure officia animi omnis optio ea quidem quae ipsam!',
  },
  {
    icon: <FaDatabase />,
    name: 'Database Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis nisi iure officia animi omnis optio ea quidem quae ipsam!',
  },
];

const Services = () => {
  return (
    <section className='w-full min-h-screen  text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-5xl font-bold mb-5'>
            What I do for clients
          </h1>
          <p className='text-center mt-5 mb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis nisi iure officia animi omnis optio ea quidem quae ipsam!
          </p>
        </div>
        <div className='flex lg:flex-col-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div key={index} className='bg-gradient-to-r from-cyan-400 to to-blue-600 p-6 rounded-2xl w-full h-full'>
                <div className='text-white rounded-sm w-12 h-12 flex justify-center items-center mb-4 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
