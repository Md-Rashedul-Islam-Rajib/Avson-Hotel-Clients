import React, { forwardRef, useContext, useState } from "react";
import { FaExpand } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { LuBath } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../context/AuthProvider";
import { BsCashCoin } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
import Location from "../components/Location";

const RoomDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
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
    amenity,
  } = data;

  const [selectedDate, setSelectedDate] = useState(
    new Date("2024-02-29")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBooking = () => {
    const bookingDetails = {
      image: image,
      
      title: title,
      description: description,
      date: selectedDate,
      email: user?.email,
      name: user?.displayName,
    };

    console.log(bookingDetails);
    axios
    .post('http://localhost:5000/bookings',bookingDetails)
    .then(res=>{
      if(res.data.insertedId){
        Swal.fire({
          
          icon: "success",
          title: "Your room booked successfully",
          showConfirmButton: false,
          timer: 1500
        });
      };
    }
    )
  };

  return (
    <div className="grid lg:grid-cols-6 gap-6 lg:m-20 my-12">
      <div className="lg:col-span-4 flex flex-col gap-6 md:p-8 lg:p-0 lg:gap-12">
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
            {amenity.map((item, idx) => (
              <p key={idx} className="flex items-center gap-3">
                {" "}
                <GiCheckMark className="text-green-500" />{" "}
                <span className="font-medium">{item}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="relative">
          <img src={image} alt="" />
          {offer && <div className="bg-gradient-to-r from-[#ad8e3d] via-[#dec75e] via-[#f3ec8d] h-16  to-[#c6a136] w-[850px] clip-path absolute top-5 right-0">
            <p className="text-right font-bold">{offer}</p>
            </div>}
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-[#111827] text-white">
          <p className="text-3xl font-bold ml-8 py-9 md:text-center lg:text-left">
            {price}$ / <sub className="text-lg font-normal">Night</sub>
          </p>
        </div>

            

        <div className="flex justify-center my-4">
          <DatePicker
            showIcon
            icon=<SlCalender className="text-lg mt-2 mr-2" />
            closeOnScroll={true}
            selected={selectedDate}
            className="input input-bordered"
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </div>

{/* booking button + modals */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              
              document.getElementById("my_modal_1").showModal();
            }}
            className="bg-[#fea116] btn text-white"
          >
            Book Now
          </button>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
        <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box max-h-screen">
            
              
            
            
            
            <div>
            <img className="rounded-3xl" src={image} alt="" />
            <h3 className="font-bold text-lg">{title}</h3>
            <div className="flex justify-evenly">
            <p className="py-4 flex items-center gap-1"><BsCashCoin className="text-[#fea116]" /> <span>{price} $ / Night </span></p>
            <p className="py-4 flex items-center gap-1"><MdOutlineBedroomParent className="text-[#fea116]" /> <span>{bedroom_count} Bedroom(s) </span></p>
            <p className="py-4 flex items-center gap-1"><LuBath className="text-[#fea116]" /> <span> {bathroom_count} Bathroom(s)</span></p>
            </div>
            
            <p className="py-4">Reservation Date & Time : {selectedDate.toString()}</p>
            </div>
              <div >
              <form className="flex justify-evenly" method="dialog">
                <button onClick={handleBooking} className="btn">Yes</button>
                
                <button className="btn">No</button>
                </form>
              </div>

          </div>
        </dialog>

            <div className="mt-8 flex justify-center "><Location></Location></div>


      </div>
    </div>
  );
};

export default RoomDetails;
