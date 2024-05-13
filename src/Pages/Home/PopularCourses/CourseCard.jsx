import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const CourseCard = ({ course }) => {
    useEffect(() => {
        AOS.init();
      }, []);
    const { courseName, title, price, image } = course;
    return (
        <>
<div data-aos="fade-up" className="card card-compact p-2 w-full border border-[#1C7455] rounded-none transition duration-300 ease-in-out transform hover:bg-white hover:shadow-lg hover:animate-pulse">
    <figure><img src={image} alt="course" /></figure>
    <div className="card-body">
        <h2 className="md:card-title font-semibold text-[14px]">{courseName}</h2>
        <p className="font-semibold font-sans md:text-[16px] text-[14px]">{title}</p>
        <div className="card-actions justify-start">
            <p className="font-bold text-green-600">৳ {price}</p>
            <Link to='/courses' className="border rounded px-2 bg-[#1C7455] text-white transition duration-300 ease-in-out hover:bg-green-600"><FontAwesomeIcon icon={faAngleRight} /></Link>
        </div>
    </div>
</div>


        </>
    );
};

export default CourseCard;