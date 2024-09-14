import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import MapSection from "../components/MapSection";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import popup from '../assets/popup.jpg'
import { FaTimes } from "react-icons/fa";



const Home = () => {

    const [modalOpen, setModalOpen] = useState(true);

    useEffect(() => {
       
        const hasSeenModal = sessionStorage.getItem('hasSeenModal');
        if(!hasSeenModal){
        setModalOpen(true);
        sessionStorage.setItem("hasSeenModal","true");
        }
      
        // return () => setModalOpen(false);
    }, []);

    return (
        <div>
            {modalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto z-50">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white ">
                                {/* Your modal content here */}
                                
                                    
                                    
                                        <img src={popup} alt="" />
                                    
                                
                            </div>
                            <div className="absolute top-0 right-0 ">
                                <button
                                    type="button"
                                    className="text-gray-400 hover:text-gray-500"
                                    onClick={() => setModalOpen(false)} // Close button functionality
                                >
                                    <FaTimes className="w-6 h-6 text-[#111827]" /> {/* Use FaTimes icon */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            
            <Banner></Banner>
            <MapSection></MapSection>
            <Newsletter></Newsletter>
            <FeaturedSection></FeaturedSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;