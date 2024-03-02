import Carousel from "../Carousel/Carousel";
import About from "../../about/About/About";
import Tours from "../../tours/Tours/Tours";
import Destinations from "../../destination/Destinations/Destinations";
import Testimonials from "../../testimonials/Testimonials/Testimonials";
import Blogs from "../../blogs/Blogs/Blogs";

const Home = () => {
    return (
        <>
            <Carousel />
            <About />
            <Tours />
            <Destinations />
            <Testimonials />
            <Blogs />
        </>
    );
};

export default Home;