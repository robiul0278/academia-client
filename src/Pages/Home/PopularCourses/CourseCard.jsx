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
            <div data-aos="fade-up" className="card card-compact w-full border hover:border-2 hover:border-green-600 border-[#1C7455] rounded-none transition duration-500 ease-in-out">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="md:card-title font-semibold text-[14px]">{courseName}</h2>
                    <p className="font-semibold font-sans md:text-[16px] text-[14px]">{title}</p>
                    <div className="card-actions justify-start">
                        <p className="font-bold text-green-600">৳ {price}</p>
                        <Link to='/courses' className="border rounded px-2 bg-[#1C7455] text-white hover:bg-green-600 transition duration-300 ease-in-out"><FontAwesomeIcon icon={faAngleRight} /></Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;