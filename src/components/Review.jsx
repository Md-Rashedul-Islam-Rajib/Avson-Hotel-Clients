import axios from 'axios';
import  { useState } from 'react';
import Rating from 'react-rating-stars-component';

const Review = () => {

    const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const reviewSet = {
        reviewText,
        rating
    }

    axios
    ,post(`/room/${room._id}`,)
    console.log(reviewSet);
    // You can also send this data to a server for permanent storage
    // Reset the form
    setRating(0);
    setReviewText('');
  };

  return (
   
  );
};

export default Review;
