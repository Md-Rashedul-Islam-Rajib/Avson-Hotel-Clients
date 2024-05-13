import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { TiStarFullOutline } from 'react-icons/ti';
import { Link, useLoaderData } from 'react-router-dom';

const Room = () => {
    const rooms = useLoaderData();

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [products, setProducts] = useState(rooms);
  
console.log(minPrice,maxPrice);
    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const getProducts = () => {
        fetch(`http://localhost:5000/filter/${minPrice}/${maxPrice}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    };
    return (
        <div className='mx-10'>
            

            <div className='my-10'>
            <h1 className='font-semibold mb-8'>Price Filter</h1>
            <div>
            <label htmlFor="minPrice">Min Price</label>
            <input
            className='input input-bordered ml-4'
                type="number"
                id="minPrice"
                name="minPrice"
                value={minPrice}
                onChange={handleMinPriceChange}
                min="0"
            />
            
            <label className='ml-4' htmlFor="maxPrice">Max Price</label>
            <input
            className='input input-bordered ml-4'
                type="number"
                id="maxPrice"
                name="maxPrice"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                min="0"
            />
            <button className='btn ml-4 bg-[#111827] text-white' onClick={getProducts}>Filter Products</button>
            </div>
            
            
        </div>
            

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    products?.map((room,idx)=> 
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