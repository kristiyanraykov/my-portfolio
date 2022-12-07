import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

type Props = {};
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact Me
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          Don&apos;t hesitate to{' '}
          <span className='underline decoration-[#F7AB0A]/50'>reach out.</span>{' '}
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+359895600878</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>craykov@yahoo.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Ruse, Ruse</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
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
