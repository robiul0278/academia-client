import { Helmet } from "react-helmet";
import Achievements from "../Achievements/Achievements";
import Banner from "../Banner/Banner";
import PopularCourses from "../PopularCourses/PopularCourses";
import ImageGallery from "../ImageGallery/ImageGallery";
import { ToastContainer } from "react-toastify";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>ACADEMIA | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-[1280px] mx-auto">
                <PopularCourses></PopularCourses>
                <ImageGallery/>
                <Achievements></Achievements>
            </div>
            <ToastContainer />
        </>
    );
};

export default Home;