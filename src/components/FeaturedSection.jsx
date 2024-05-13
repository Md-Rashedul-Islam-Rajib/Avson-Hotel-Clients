import { Link, useLoaderData } from "react-router-dom";


const FeaturedSection = () => {
    const rooms = useLoaderData();
    

    
    return (
        <div className="my-16">
            <h2 className="text-center text-3xl font-bold my-8">Our Featured Rooms </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    rooms.map((room,idx)=> <div key={idx} className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100 mx-auto">
                    <img src={room.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{room.title}</h2>
                            <p className="text-gray-100">{room.price}$</p>
                        </div>
                        
                    </div>
                </div>)
                }
            </div>
            <div className="flex justify-center my-8">
            <Link to={`/rooms`}><button type="button" className="w-40 p-3 font-semibold tracking-wide rounded-md bg-[#fea116] text-white">Book Now</button></Link>
            </div>
        </div>
    );
};

export default FeaturedSection;