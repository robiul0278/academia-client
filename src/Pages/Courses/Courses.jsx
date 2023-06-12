import { Helmet } from "react-helmet";
import useCourses from "../../Hooks/useCourses";
import AllCourseCard from "./AllCourseCard";

const Courses = () => {
    const [courses] = useCourses()
    // console.log(courses)
    return (
        <section className="pt-48">
            <Helmet>
                <title>ACADEMIA | Courses</title>
            </Helmet>
            <div className="text-center">
                <h1 className="text-5xl font-semibold">Explore Our All Online <br />Courses</h1>
                <h4 className="text-xl font-semibold">Limitless learning, more possibilities</h4>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:px-32 my-16 p-5">
                {
                    courses.map(course =>
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