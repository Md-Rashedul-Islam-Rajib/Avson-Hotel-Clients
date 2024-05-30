import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Favorites = () => {
    // const rooms = useLoaderData();
    // console.log(rooms)
    const {user} = useContext(AuthContext);
    const [rooms, setRooms] = useState([]);
    const url='https://newassignment-11.vercel.app/favorites'
    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res=>{
          const alldata = res.data;
          setRooms(alldata.filter(item=> item.email==user.email))
        })
       },[user.email]);

    return (

        <div className="mx-10">

            <div className='text-center text-3xl font-bold my-8'>
                <h2>Favorites</h2>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    rooms?.map((room,idx)=> 
                    <div key={idx}
                    data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
                    className="card lg:card-side ">
                    <Link to={`/room/${room.id}`}>
                    <figure><img className='rounded-xl h-60' src={room.image} alt="Album"/></figure></Link>
                    <div 
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1500"
                    className="card-body">
                        <h2 className="card-title">{room.title}</h2>
                        <p>{room?.description?.slice(0,60)}</p>
                        <div className='flex justify-between'>
                        <p className='flex items-center gap-2 font-medium'><TiStarFullOutline className='text-xl text-[#ffaf38]' /> <span>{room.rating}</span> <span>({room.review})</span></p>
                        <p className='font-medium'>${room.price}/ <span className='text-xs'>Night</span></p>
                        </div>
                        <div className="card-actions justify-end">
                      
                        </div>
                    </div>
                    </div>)
                }
            </div>
            </div>

    );
};

export default Favorites;