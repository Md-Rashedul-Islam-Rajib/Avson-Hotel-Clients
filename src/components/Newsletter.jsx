import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import newsletterimage from '../assets/newsletter.jpg'

const Newsletter = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        const { email, name } = data;
  
            toast.success("Sign up Successfully by " + email); 
  
          
          
      };

    return (
        <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex-1 md:ml-16'>
                <img className='w-4/5 md:w-auto h-full mx-auto' src={newsletterimage} alt="" />
            </div>
            
            <div className='flex-1 my-auto'> 
                <div className="px-3 md:px-0 md:w-3/4 mx-auto text-center md:text-left">
                <h2>Subscribe to our newsletter</h2>
                <p>We'll send you the best of our blog just once a month. We promise</p>


                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <p className="mb-2 text-left">Email</p>
                <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    {...register("email")}
                  />
                  
                </label>

                <p className="mb-2 text-left">Name</p>
                <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
                  <input
                    type='text'
                    className="grow"
                    placeholder="Name"
                    {...register("name")}
                  />
                  
                  
                </label>

                <button className={`btn text-white bg-[#FEA116] w-full`}>
                  Sign Up
                </button>
              </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;