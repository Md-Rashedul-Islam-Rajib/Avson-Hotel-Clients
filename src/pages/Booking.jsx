import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import Rating from "react-rating-stars-component";
import toast from "react-hot-toast";
import moment from "moment";
import { Helmet } from "react-helmet-async";






const Booking = () => {




  const {user} = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
 const url='http://localhost:5000/bookings'
 useEffect(()=>{
  axios.get(url,{withCredentials:true})
  .then(res=>{
    const alldata = res.data;
    setBookings(alldata.filter(item=> item.email==user.email))
  })
 },[user.email,selectedDate]);


 

 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

const handleUpdate = (_id) => {
  console.log(_id);
    const updatedDate = {date:selectedDate};
   axios
   .put(`http://localhost:5000/bookings/${_id}`,updatedDate,{withCredentials:true})
   .then(data=>{
    console.log(data.data);
    if(data?.data?.modifiedCount > 0){
      Swal.fire({
        title: "Good job!",
        text: "Your reservation date updated successfully",
        icon: "success"
      });
    }
}).catch((error) => {
    // An error occurred
    // ...
  });
  
}


const handleCancel = (_id) => {
 
  const currentDate = moment();
  const selectedMomentDate = moment(selectedDate);


 
  const differenceInDays = selectedMomentDate.diff(currentDate, 'days');

  
  if (differenceInDays > 1) {
    return toast.error("You can't cancel your reservation only before one day");
  }

  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it'
    }).then((result)=>{
      if(result.isConfirmed){
        axios.delete(`http://localhost:5000/bookings/${_id}`)
    .then(data => {
      console.log(data.data)
      if(data.data.deletedCount > 0){
  
        Swal.fire({
          title: "Deleted!",
          text: "Your reservation canceled successfully!",
          icon: "success"
        })
       
      }
    })
    const remaining = bookings.filter((craft)=>craft._id !== _id);
    setBookings(remaining);
      }
    });
  
  
}



// review


const [rating, setRating] = useState(0);
const [reviewText, setReviewText] = useState("");


const handleRatingChange = (newRating) => {
  setRating(newRating);
};

const handleReviewTextChange = (event) => {
  setReviewText(event.target.value);
};

const handleReview = (id) => {
  
  const formatDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
  
    return `${day}, ${dayOfMonth} ${month}, ${year} ${hours}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;
  }

  const reviewSet = {
    reviewText: reviewText,
    rating : rating,
    user: user?.displayName,
    email: user?.email,
    photo: user?.photoURL,
    id: id,
    postingTime : formatDate(new Date())
  };
 

  axios
    .post(`http://localhost:5000/reviews`, reviewSet)

    .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "You left a review successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    
    .catch((error) => {
      // An error occurred
      // ...
    });
   setRating(0);
    setReviewText("");
};

  return (
    <div>

{/* <Helmet>
                <title>Booking Page | Avson Hotel & Room Services</title>
            </Helmet> */}

      {bookings?.length=== 0? <div className="h-screen w-screen flex justify-center mt-10">
              <h2 className="text-3xl font-semibold"> No room booked yet</h2>
              </div>:<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <p>#</p>
              </th>
              <th>Title</th>
              <th>Customer Info</th>
              <th>Reservation Date </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            
            {bookings.map((item, idx) => (
              <tr key={idx}>
                <th>
                  {idx+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.title}</div>
                      <div className="text-sm opacity-50">{item?.price}$/Night</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item?.name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item?.email}
                  </span>
                </td>
                <td>{moment(item?.date).format('DD-MM-YYYY')}</td>


                {/* button */}
                <th className="flex justify-evenly">
                <button onClick={() => {
              document.getElementById(item._id).showModal();
              }}
               className="btn btn-ghost btn-xs bg-[#fea116] text-white">
                Update Date
                </button>
                

                  <button onClick={()=>{handleCancel(item._id)}}
               className="btn btn-ghost btn-xs bg-[#111827] text-white">
                Cancel
                </button>

                <button onClick={() => {
                document.getElementById(item.id).showModal();
              }}
               className="btn btn-ghost btn-xs bg-[#fea116] text-white">
                  Add Review
                </button>
                
                </th>


                {/* modal */}
                <dialog
            id={item._id}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box h-96">
              <p className="mb-4">Please select the date </p>
            <DatePicker
              showIcon
              icon=<SlCalender className="text-lg mt-2 mr-2" />
              closeOnScroll={true}
              selected={selectedDate}
              className="input input-bordered"
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
            />

              <div className="modal-action">
                <form method="dialog">
                  <button onClick={()=>{handleUpdate(item._id)}} className="btn bg-[#fea116] text-white">
                    Confirm
                  </button>

                  <button className="btn ml-4 bg-[#111827] text-white"> Cancel </button>

                  
                </form>
              </div>
            </div>
                </dialog>

                <dialog
            id={item.id}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box h-96">
            <div className="px-4 md:px-0"> 
        <div className="flex flex-col items-center">
          <div>
            <h2 className="font-semibold text-2xl mb-4">Leave a Review</h2>
          </div>

          <div>
            
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

              
            
          </div>
        </div>
      </div>
              <div className="modal-action">
                <form method="dialog">
                  <button onClick={()=>{handleReview(item.id)}} className="btn">
                    Submit 
                  </button>
                  

                  
                </form>
              </div>
            </div>
                </dialog>
         
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>}
      
    </div>
  );
};

export default Booking;







