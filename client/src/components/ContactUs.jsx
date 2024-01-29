import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactUs = () => {
  const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm();
  const selectedItems = watch('interests', []);

  const [isMessageSent, setIsMessageSent] = useState(false);

  const onSubmit = async (data) => {
    try {
      await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setIsMessageSent(true);
      reset();
      setTimeout(() => {
        setIsMessageSent(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleItemClick = (item) => {
    const currentItems = selectedItems.slice();
    const index = currentItems.indexOf(item);

    if (index === -1) {
      currentItems.push(item);
    } else {
      currentItems.splice(index, 1);
    }

    setValue('interests', currentItems);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id='contact-section' className='bg-gradient-to-r from-violet-950 to-fuchsia-950 text-white w-full rounded-2xl mt-20 pt-10'>
        <div className='flex flex-col md:flex-row justify-between p-8 rounded-xl text-black'>
          <div className='items-center mb-6 md:mb-0'>
            <p className='text-2xl font-bold mb-4 text-white pr-5 pl-10'>
              Let’s discuss on something <span className='text-fuchsia-800'>cool</span> together
            </p>
            <div>
              <button className='text-white space-y-20 hover:bg-black p-3 pl-10 pr-5 rounded-xl'>
                umerqadir113@gmail.com
              </button>
            </div>
            <button className='pt-5 text-white mt-15 hover:bg-black p-3 pl-10 pr-5 rounded-xl'>
              +92 316 2809943
            </button>
            <div className='flex flex-row space-x-10 mt-5'>
              <button className='hover:bg-blue rounded-full pl-10'>
                <FaLinkedin style={{ color: 'white', fontSize: '1.5em' }} />
              </button>
              <button className='hover:bg-blue rounded-full'>
                <FaGithub style={{ color: 'white', fontSize: '1.5em' }} />
              </button>
            </div>
          </div>
          <div className='bg-white rounded-xl flex flex-col w-full p-10'>
            <p className='mb-5'>I'm interested in...</p>
            <div className='mb-4 flex flex-wrap gap-4 pb-10'>
              {['Frontend', 'Backend', 'Web Scraping', 'Bug fix'].map((item) => (
                <button
                  key={item}
                  type='button'
                  className={`border p-2 border-cyan-800 rounded-xl ${
                    selectedItems.includes(item) ? 'bg-gradient-to-r from-purple-900 to-fuchsia-800 text-white' : ''
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <input
              type='text'
              placeholder='Your name'
              className='mb-4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-fuchsia-950'
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

            <input
              type='text'
              placeholder='Your Email'
              className='mb-4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-fuchsia-950'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

            <input
              type='text'
              placeholder='Your message'
              className='mb-4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-fuchsia-950'
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className='text-red-500'>{errors.message.message}</p>}

            {isMessageSent && <p className='text-green-500 mb-4'>Message is sent! Thank you for reaching out.</p>}

            <div>
              <button
                type='submit'
                className='bg-fuchsia-800 text-white p-2 rounded-xl flex items-center gap-2 transition-all duration-300 hover:bg-fuchsia-950'
              >
                <RiSendPlaneFill />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
