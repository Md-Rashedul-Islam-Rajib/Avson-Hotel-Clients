import React, { useState } from "react";
import {  FaExpand } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { LuBath } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const RoomDetails = () => {
  const data = useLoaderData();
  const {
    _id,
    title,
    description,
    price,
    room_size,
    availability,
    image,
    offer,
    bedroom_count,
    bathroom_count,
    amenity
  } = data;

const [selectedDate, setSelectedDate ] = useState(new Date('2024-02-29T00:00:00'));


const handleDateChange = (date) => {
setSelectedDate(date) 
}

  return <div className="grid md:grid-cols-6 gap-6 lg:m-20 mt-12">

                <div className="md:col-span-4 flex flex-col gap-6 lg:gap-12">

                    <div className="flex justify-between font-medium">

                        <div className="flex items-center gap-4">
                        <FaExpand /> <span>{room_size}</span>
                        </div>
                    
                        <div className="flex items-center gap-4">
                        <MdOutlineBedroomParent /> <span>{bedroom_count} Bedroom(s)</span>
                        </div>
                   
                        <div className="flex items-center gap-4">
                        <LuBath /> <span>{bathroom_count} Bathroom(s)</span>
                        </div>

                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">{title}</h2>
                        <p className="text-lg">{description}</p>
                    </div>

                    <div>
                    <h2 className="text-3xl font-bold mb-4">Amenity</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4">
                          {
                            amenity.map((item,idx)=> <p key={idx} className="flex items-center gap-3" > <GiCheckMark className="text-green-500" /> <span className="font-medium">{item}</span></p>)
                          }
                        </div>
                    </div>

                    <div>
                      <img src={image} alt="" />
                    </div>
                    
                </div>




                <div className="col-span-2">

                    <div className="bg-[#111827] text-white">

                      <p className="text-3xl font-bold ml-8 py-9">{price}$ / <sub className="text-lg font-normal">Night</sub></p>
                    </div>

                          <div className="flex justify-center my-4">
                              <DatePicker
                              selected={selectedDate}
                              onChange={handleDateChange}
                              dateFormat="dd/MM/yyyy"
                               />
                          </div>

                          


                </div>

         </div>;
};

export default RoomDetails;
