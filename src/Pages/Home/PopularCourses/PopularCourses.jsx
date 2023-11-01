import { RotatingLines } from "react-loader-spinner";
import useAllCourses from "../../../Hooks/useAllCourses";
import CourseCard from "./CourseCard"; // Make sure this import is correct
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

const PopularCourses = () => {
  const { allCourse, loading } = useAllCourses();
  const books = allCourse.filter(item => item.status === "approved")

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      {loading ? (
      <div className="flex items-center bg-white justify-center my-5 py-32">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
      ) : (
        <section className="p-5 bg-white ">
          <div data-aos="fade-left" className="flex justify-start items-center py-5">
            <h1 className="md:text-xl font-bold mr-1">
              Top Learning Courses
            </h1>
            <span className="text-[15px] font-normal">(8 courses)</span>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-3">
            {books?.slice(0,8).map((course) => (
              <CourseCard
                key={course._id}
                course={course}
              ></CourseCard>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default PopularCourses;
