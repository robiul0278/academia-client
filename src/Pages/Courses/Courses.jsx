import { Helmet } from "react-helmet";
import AllCourseCard from "./AllCourseCard";
import useAllCourses from "../../Hooks/useAllCourses";

const Courses = () => {
    const {allCourse} = useAllCourses()
    const book = allCourse.filter(item => item.status === "approved")
    // console.log(courses)
    return (
        <section className="max-w-[1200px] mx-auto my-10">
            <Helmet>
                <title>ACADEMIA | Courses</title>
            </Helmet>
            <div className="text-center mb-5">
                <h1 className="text-4xl font-semibold">Explore Our All Online Courses</h1>
                <h4 className="text-xl font-semibold">Limitless learning, more possibilities</h4>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-10 p-5 ">
                {
                    book.map(course =>
                        <AllCourseCard
                            key={course._id}
                            course={course}
                        ></AllCourseCard>
                    )
                }
            </div>
        </section>
    );
};

export default Courses;