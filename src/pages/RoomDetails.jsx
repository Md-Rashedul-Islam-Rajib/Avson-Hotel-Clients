import {  useContext, useEffect, useState } from "react";
import { FaExpand } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { LuBath } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../context/AuthProvider";
import { BsCashCoin } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
import Location from "../components/Location";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import person from '../assets/person.png'
import toast from "react-hot-toast";

const RoomDetails = () => {
  const data = useLoaderData();
 
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


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
    totalReview,
  } = data.data;


console.log(data.data);



  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const isDateAhead = (selectedDate) => {
    const currentDate = new Date();
    if (selectedDate >= currentDate) {
      return true; 
    } else {
      return false;
    }
  }
  const isAhead = isDateAhead(selectedDate);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleBooking = () => {
    if(!user){
      navigate('/login')
    }else{
      if(!isAhead){
        return toast.error('Please choose a valid date')
      }
      else{
        const bookingDetails = {
          image: image,
          id: _id,
          title: title,
          description: description,
          date: selectedDate,
          email: user?.email,
          name: user?.displayName,
          price: price,
          isAvailable: true,
         
        };
    
        console.log(bookingDetails)
        axios
          .post(
            "https://newassignment-11.vercel.app/bookings",
            bookingDetails
          )
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Your room booked successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
    navigate('/bookings')
      }
    }



  };

  // review part

 const [reviewData, setReviewData] = useState([]);
 useEffect(()=>{
  axios.get(`https://newassignment-11.vercel.app/reviews/${_id}`)
  .then(res=>{
    setReviewData(res.data);
  })
 },[])

  // verify
  const [bookinguser, setBookinguser] = useState("");

  useEffect(() => {
    axios.get(`https://newassignment-11.vercel.app/bookings/${_id}`)
    .then((res) => {
      setBookinguser(res.data);
    });
  }, [_id]);

  // console.log(data?.data?.totalReview)

  return (
    <div>

{/*         <Helmet>
                <title>Room Details| Avson Hotel & Room Services</title>
            </Helmet> */}
      <div className="grid lg:grid-cols-6 gap-6 lg:m-20 my-12">
        <div className="lg:col-span-4 flex flex-col gap-6 md:p-8 lg:p-0 lg:gap-12">
          <div className="flex justify-between font-medium">
            <div className="flex items-center gap-4">
              <FaExpand /> <span>{data?.data?.room_size}</span>
            </div>

            <div className="flex items-center gap-4">
              <MdOutlineBedroomParent /> <span>{data?.data?.bedroom_count} Bedroom(s)</span>
            </div>

            <div className="flex items-center gap-4">
              <LuBath /> <span>{data?.data?.bathroom_count} Bathroom(s)</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">{data?.data?.title}</h2>
            <p className="text-lg">{data?.data?.description}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Amenity</h2>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {data?.data?.amenity.map((item, idx) => (
                <p key={idx} className="flex items-center gap-3">
                  {" "}
                  <GiCheckMark className="text-green-500" />{" "}
                  <span className="font-medium">{item}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="relative">
            <img src={data?.data?.image} alt="" />
            {data?.data?.offer && (
              <div className="bg-gradient-to-r from-[#ad8e3d] via-[#dec75e] via-[#f3ec8d] h-16  to-[#c6a136] w-[850px] clip-path absolute top-5 right-0">
                <p className="text-right font-bold">{data?.data?.offer}</p>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-[#111827] text-white">
            <p className="text-3xl font-bold ml-8 py-9 md:text-center lg:text-left">
              {data?.data?.price}$ / <sub className="text-lg font-normal">Night</sub>
            </p>
          </div>

          <div className="flex justify-center my-4 z-10">
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





            {data?.found===true ? <button className="bg-[#fea116] btn text-white " disabled='disabled'>Unavailable</button>: <button onClick={() => {
                document.getElementById("my_modal_1").showModal();
              }}
              className="bg-[#fea116] btn text-white">Book Now</button>}
            {/* <button
              onClick={() => {
                document.getElementById("my_modal_1").showModal();
              }}
              className="bg-[#fea116] btn text-white"
              disabled={`${availability=='Unavailable'? 'disabled':''}`}
            >
              Book Now
            </button> */}
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
          <dialog
            id="my_modal_1"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box max-h-screen">
              <div>
                <img className="rounded-3xl" src={image} alt="" />
                <h3 className="font-bold text-lg">{title}</h3>
                <div className="flex justify-evenly">
                  <p className="py-4 flex items-center gap-1">
                    <BsCashCoin className="text-[#fea116]" />{" "}
                    <span>{price} $ / Night </span>
                  </p>
                  <p className="py-4 flex items-center gap-1">
                    <MdOutlineBedroomParent className="text-[#fea116]" />{" "}
                    <span>{bedroom_count} Bedroom(s) </span>
                  </p>
                  <p className="py-4 flex items-center gap-1">
                    <LuBath className="text-[#fea116]" />{" "}
                    <span> {bathroom_count} Bathroom(s)</span>
                  </p>
                </div>

                <p className="py-4">
                  Reservation Date & Time : {selectedDate.toString()}
                </p>
              </div>
              <div>
                <form className="flex justify-evenly" method="dialog">
                  <button onClick={handleBooking} className="btn">
                    Yes
                  </button>

                  <button className="btn">No</button>
                </form>
              </div>
            </div>
          </dialog>

          <div className="mt-8 flex justify-center lg:mt-48">
            <Location></Location>
          </div>
        </div>
      </div>

      {/* review section */}

      {reviewData.length > 0 && <div className="my-8">
        <div>
          <h2 className="text-2xl font-bold text-center">Customer Reviews</h2>
        </div>
        <div>
          <Swiper
            navigation={true}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
          >
            {reviewData?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 text-gray-900 bg-gray-100">
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src={
                            item?.photo
                              ? item?.photo
                              : person
                          }
                          alt=""
                          className="object-cover w-12 h-12 rounded-full bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="">{item?.user}</h4>
                        <span className="text-xs text-gray-400">{item?.postingTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold">{item?.rating}</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-gray-800 font-bold">
                    <p>{item?.reviewText}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>}


{
  user?.email!==bookinguser.email && <div className="flex justify-center font-medium">
    <p>Please book this room to add review</p>
  </div>
}


      {/* {user?.email==bookinguser.email && <div className="px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div>
            <h2 className="font-semibold text-2xl mb-4">Leave a Review</h2>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <textarea
                className="input-bordered"
                  value={reviewText}
                  onChange={handleReviewTextChange}
                  rows={4}
                  cols={35}
                />
              </div>

              <div>
                <Rating
                  count={5}
                  onChange={handleRatingChange}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>

              <button className="btn my-8" type="submit">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>} */}



    </div>
  );
};

export default RoomDetails;
