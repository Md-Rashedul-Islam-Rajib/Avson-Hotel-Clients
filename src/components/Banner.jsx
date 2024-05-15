import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    return (
        <div >

        <Swiper
          navigation={true}
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
          <div className="hero min-h-screen" style={{backgroundImage: 'url(/slide3.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      className="mb-5 text-5xl font-bold">Indulge in Comfort</h1>
      <p
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      className="mb-5">Unwind in your cozy haven. Avson Hotel's room service delivers delicious meals and refreshing beverages straight to your door, 24/7. Explore our extensive menu and savor exquisite flavors without leaving your room</p>
      <button 
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      className="btn bg-[#fea116] border-0 text-white mt-4">Get Started</button>
    </div>
  </div>
</div>
          </SwiperSlide>
  
          
          <SwiperSlide>
          <div className="hero min-h-screen" style={{backgroundImage: 'url(/slide2.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      className="mb-5 text-5xl font-bold">Cravings Conquered</h1>
      <p 
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      className="mb-5">No need to venture out. Avson Hotel's room service caters to your every whim. From breakfast in bed to a late-night snack, our attentive staff ensures a delightful dining experience in the comfort of your room</p>
      <button
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      className="btn bg-[#fea116] border-0 text-white mt-4">Get Started</button>
    </div>
  </div>
</div> 
          </SwiperSlide>




          <SwiperSlide>
          <div className="hero min-h-screen" style={{backgroundImage: 'url(/slide1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      className="mb-5 text-5xl font-bold">Experience unparalleled comfort. </h1>
      <p 
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      className="mb-5"
      > Avson Hotel offers a haven of relaxation with exceptional room service. Order gourmet meals, refreshing drinks, or anything you desire, all at your fingertips. Let us pamper you</p>
      <button
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      className="btn bg-[#fea116] border-0 text-white mt-4">Get Started</button>
    </div>
  </div>
</div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;