// import { RotatingLines } from "react-loader-spinner";
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
           <div data-aos="fade-left" className="flex justify-start items-center py-5">
            <h1 className="md:text-xl font-bold mr-1">
              Top Learning Courses
            </h1>
            <span className="text-[15px] font-normal">(8 courses)</span>
          </div>
      {loading ? (
        //   <div className="flex items-center bg-white justify-center my-5 py-32">
        //   <RotatingLines
        //     strokeColor="grey"
        //     strokeWidth="5"
        //     animationDuration="0.75"
        //     width="96"
        //     visible={true}
        //   />
        // </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 px-2 mt-5">
          <div className=" p-5 rounded-md bg-white shadow-md mx-auto max-w-fit">
            <div className="animate-pulse">
              <div className="md:w-[250px] w-[150px] lg:h-52 md:h-52 h-40 rounded-lg bg-gray-300 mb-6"></div>
              <div className="md:w-[120px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="md:w-[260px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="flex justify-between">
              <div className="w-[70px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="w-[30px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              </div>
            </div>
          </div>
          <div className=" p-5 rounded-md bg-white shadow-md mx-auto max-w-fit">
            <div className="animate-pulse">
              <div className="md:w-[250px] w-[150px] lg:h-52 md:h-52 h-40 rounded-lg bg-gray-300 mb-6"></div>
              <div className="md:w-[120px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="md:w-[260px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="flex justify-between">
              <div className="w-[70px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="w-[30px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              </div>
            </div>
          </div>
          <div className=" p-5 rounded-md bg-white shadow-md mx-auto max-w-fit">
            <div className="animate-pulse">
              <div className="md:w-[250px] w-[150px] lg:h-52 md:h-52 h-40 rounded-lg bg-gray-300 mb-6"></div>
              <div className="md:w-[120px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="md:w-[260px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="flex justify-between">
              <div className="w-[70px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="w-[30px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              </div>
            </div>
          </div>
          <div className=" p-5 rounded-md bg-white shadow-md mx-auto max-w-fit">
            <div className="animate-pulse">
              <div className="md:w-[250px] w-[150px] lg:h-52 md:h-52 h-40 rounded-lg bg-gray-300 mb-6"></div>
              <div className="md:w-[120px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="md:w-[260px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="flex justify-between">
              <div className="w-[70px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              <div className="w-[30px] h-4 rounded-lg bg-gray-300 mb-4"></div>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <section className="">
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
            {books?.slice(0, 8).map((course) => (
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
