import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { FaQuoteRight } from "react-icons/fa";
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'

const Testimonials = () => {
    return (
        <div>
                <h2 className="text-3xl font-bold my-8 text-center">Testimonials </h2>
            <div>
                <Swiper
            
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            >
            <SwiperSlide>
            <section className="p-6">
        <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 text-gray-900 bg-gray-100">
                <img src={user1} alt="" className="w-20 h-20 rounded-full bg-gray-500" />
                <div>
                <FaQuoteRight className="text-3xl text-[#111827]" />
                </div>
                <blockquote className="max-w-lg text-2xl italic font-medium text-center">"The Avson Hotel was a true oasis in the bustling city. My room was impeccably clean and beautifully decorated, offering a calming retreat after long days of meetings.  But the real star was the room service!  The menu had a wide variety of options, from healthy choices to indulgent treats.  Everything arrived promptly and piping hot (or refreshingly cold, depending on the dish).  The staff was incredibly friendly and attentive, even customizing a vegetarian option for me one night.  Overall, the Avson exceeded my expectations and provided a much-needed escape. Highly recommend!"</blockquote>
                <div className="text-center text-gray-400">
                    <p>Sarah Jones</p>
                    <p>Marketing Manager</p>
                </div>
                
            </div>
        </div>
            </section>
            </SwiperSlide>
    
            
            <SwiperSlide>
            <section className="p-6">
        <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 text-gray-900 bg-gray-100">
                <img src={user3} alt="" className="w-20 h-20 rounded-full bg-gray-500" />
                <div>
                <FaQuoteRight className="text-3xl text-[#111827]" />
                </div>
                <blockquote className="max-w-lg text-2xl italic font-medium text-center">"As a frequent business traveler, I rely on hotels that understand efficiency and comfort.  The Avson ticks all the boxes. The check-in process was smooth and seamless, and my room was well-equipped for productivity. Strong Wi-Fi and a comfortable desk made working late a breeze.  When hunger struck, room service was a lifesaver.  The food was delicious, portions were generous, and delivery was always within the promised timeframe.  This hotel truly gets what business travelers need - a hassle-free experience that allows them to focus on work"</blockquote>
                <div className="text-center text-gray-400">
                    <p>David Lee</p>
                    <p>Software Engineer</p>
                </div>
                
            </div>
        </div>
            </section>
            </SwiperSlide>




            <SwiperSlide>
            <section className="p-6">
        <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 text-gray-900 bg-gray-100">
                <img src={user2} alt="" className="w-20 h-20 rounded-full bg-gray-500" />
                <div>
                <FaQuoteRight className="text-3xl text-[#111827]" />
                </div>
                <blockquote className="max-w-lg text-2xl italic font-medium text-center">"My husband and I recently celebrated our anniversary with a stay at the Avson Hotel, and it couldn't have been more perfect. The hotel staff went above and beyond to make our stay special, from a complimentary bottle of champagne in the room to rose petals scattered on the bed. Room service was the icing on the cake!  We indulged in a decadent in-room breakfast complete with fresh pastries and sparkling juice.  Later, we enjoyed a delicious charcuterie board and a bottle of wine delivered straight to our room.  The Avson provided the perfect ambiance for a romantic getaway, and the room service just added to the luxurious experience"</blockquote>
                <div className="text-center text-gray-400">
                    <p>Emily Garcia</p>
                    <p>CEO of Company Co.</p>
                </div>
                
            </div>
        </div>
            </section>
            </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;