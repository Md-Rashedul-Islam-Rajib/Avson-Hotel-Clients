import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { TiStarFullOutline } from 'react-icons/ti';
import { Link, useLoaderData } from 'react-router-dom';

const Room = () => {
    const rooms = useLoaderData();
    return (
        <div className='mx-10'>
            
            <div className="flex justify-center items-center gap-2 mb-6">
                <span><FaFilter className={`text-4xl `} /></span>
              <select  className="select select-info">
                <option value="Default">Select Price Range</option>
                <option value="Yes">100$-149$</option>
                <option value="No">150$-199$</option>
                <option value="Yes">200$-249$</option>
                <option value="No">250$+ </option>
                
              </select>
              </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    rooms.map((room,idx)=> 
                    <div key={idx} className="card lg:card-side ">
                    <Link to={`/room/${room._id}`}>
                    <figure><img className='rounded-xl h-60' src={room.image} alt="Album"/></figure></Link>
                    <div className="card-body">
                        <h2 className="card-title">{room.title}</h2>
                        <p>{room.description.slice(0,60)}</p>
                        <div className='flex justify-between'>
                        <p className='flex items-center gap-2 font-medium'><TiStarFullOutline className='text-xl text-[#ffaf38]' /> <span>{room.rating}</span> <span>({room.review})</span></p>
                        <p className='font-medium'>${room.price}/ <span className='text-xs'>Night</span></p>
                        </div>
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Listen</button> */}
                        </div>
                    </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default Room;