import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import MapSection from "../components/MapSection";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";



const Home = () => {
    return (
        <div>

            {/* <Helmet>
                <title>Home | Avson Hotel & Room Services</title>
            </Helmet> */}

            <Banner></Banner>
            <MapSection></MapSection>
            <Newsletter></Newsletter>
            <FeaturedSection></FeaturedSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;