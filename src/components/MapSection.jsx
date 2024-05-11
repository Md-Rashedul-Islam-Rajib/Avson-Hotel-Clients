import { ImLocation } from 'react-icons/im';
import Location from './Location';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';

const MapSection = () => {
    return (
        <div className='text-center md:text-left flex flex-col-reverse md:flex-row gap-16 lg:mx-[25%] md:my-20'>
            <div className='flex justify-center'>
                <Location></Location>
            </div>
            <div className='my-auto'>
                <h2 className='text-[#FEA116] font-bold mb-4'> <span>Have a coffee?</span></h2>
                <h1>Don't Hesitate To Visit With Us</h1>
                <div className=' border-4 border-[#fea116] p-12 mx-3 md:mx-0 mt-6'>
                        <div >
                            <h2 className='flex items-center justify-center gap-1'> <ImLocation className='text-[#fea116]' /><span>205, Main Road, New York</span></h2>
                            <h2 className='flex items-center justify-center gap-1'> <HiOutlineMailOpen className='text-[#fea116]' /> <span>supportinfo@gmail.com</span></h2>
                            <h2 className='flex items-center justify-center gap-1'> <FaPhone className='text-[#fea116]' /> <span>+89 (456) 789 999</span></h2>
                        </div>
                </div>
            </div>


        </div>
    );
};

export default MapSection;