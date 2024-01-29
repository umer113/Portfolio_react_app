import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
  const FrontendSkill = [
    {
      id: 1,
      skill: 'React.Js',
    },
    {
      id: 2,
      skill: 'HTML',
    },
    {
      id: 3,
      skill: 'CSS',
    },
    {
      id: 4,
      skill: 'Bootstrap',
    },
    {
      id: 5,
      skill: 'Tailwind CSS',
    },
  ];

  const BackendSkill = [
    {
      id: 1,
      skill: 'Node.Js',
    },
    {
      id: 2,
      skill: 'Express.Js',
    },
    {
      id: 3,
      skill: 'MongoDB',
    },
    {
      id: 4,
      skill: 'Restful Api',
    },
    {
      id: 5,
      skill: 'GitHub',
    },
  ];

  return (
    <section id='experience' className=' text-white items p-8'>
      <div className='flex flex-col items-center text-center'>
        <h5 className='text-lg'>What Skills I Have</h5>
        <br />
        <h2 className='mb-6 text-4xl font-bold text-blue-600 sm:text-5xl md:text-4xl'>My Experience</h2>
        <br />
        <div className="container experience_container flex flex-col lg:flex-row justify-around">
          <div className="experience_content frontend bg-gradient-to-r from-cyan-500 to-blue-500 p-10 lg:p-20 rounded-3xl mb-8 lg:mb-0">
            <h5 className='text-xl lg:text-2xl font-bold text-blue-900 pb-5 lg:pb-10 pl-5 pr-5'>Frontend Development</h5>
            {FrontendSkill.map((item) => (
              <div className='text-white flex items-center m-3' key={item.id}>
                <BsPatchCheckFill className='text-blue-900 mr-2' style={{ height: '20px', width: '20px' }} />
                <h3 style={{ margin: 0 }} className='p-2'>{item.skill}</h3>
              </div>
            ))}
          </div>

          <div className="experience_content backend bg-gradient-to-r from-cyan-500 to-blue-500 p-10 lg:p-20 rounded-3xl">
            <h5 className='text-xl lg:text-2xl font-bold text-blue-900 pb-5 lg:pb-10 pl-5 pr-5'>Backend Development</h5>
            {BackendSkill.map((item) => (
              <div className='text-white flex items-center m-3' key={item.id}>
                <BsPatchCheckFill className='text-blue-900 mr-2' style={{ height: '20px', width: '20px' }} />
                <h3 style={{ margin: 0 }} className='p-2'>{item.skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
