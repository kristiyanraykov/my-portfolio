import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

type Props = {};
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    emailjs
      .send('service_jer25j4', 'contact_form', formData, '3uWwrF-_NDIvKOVt3')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact Me
      </h3>
      <div className='flex flex-col space-y-5 xl:space-y-10 mt-28'>
        <h4 className='text-xl xl:text-2xl font-semibold text-center'>
          Don&apos;t hesitate to{' '}
          <span className='underline decoration-[#F7AB0A]/50'>reach out.</span>{' '}
        </h4>
        <div className='space-y-3 xl:space-y-5'>
          <div className='flex items-center justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-5 w-5 xl:h-7 xl:w-7 animate-pulse' />
            <p className='text-xl'>+359895600878</p>
          </div>
          <div className='flex items-center space-x-1 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-5 w-5 xl:h-7 xl:w-7 animate-pulse' />
            <p className='text-xl'>craykov@yahoo.com</p>
          </div>
          <div className='flex items-center space-x-1 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-5 w-5 xl:h-7 xl:w-7 animate-pulse' />
            <p className='text-xl'>Ruse</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-1 w-80 md:w-fit mx-auto'
        >
          <div className='flex flex-col space-y-1 md:space-y-0 md:flex-row md:space-x-1'>
            <input
              {...register('name')}
              placeholder='Name'
              type='text'
              className='contactInput'
            />
            <input
              {...register('email')}
              placeholder='Email'
              type='email'
              className='contactInput'
            />
          </div>
          <input
            {...register('subject')}
            placeholder='Subject'
            type='text'
            className='contactInput'
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          />
          <button
            type='submit'
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
