import { Helmet } from "react-helmet";
import Achievements from "../Achievements/Achievements";
import Banner from "../Banner/Banner";
import PopularCourses from "../PopularCourses/PopularCourses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ACADEMIA | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <PopularInstructors></PopularInstructors>
            <Achievements></Achievements>
        </div>
    );
};

export default Home;