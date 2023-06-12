import { Fade } from "react-awesome-reveal";
import useCourses from "../../../Hooks/useCourses";
import CourseCard from "./CourseCard";

const PopularCourses = () => {

const [courses] = useCourses();
    // console.log(courses);
    return (
        <section className="mt-16">
            <div className="text-center">
                <Fade>
                <h1 className="md:text-5xl text-2xl font-semibold">Explore Our Popular Online <br />Courses</h1>
                </Fade>
                <Fade>
                <h4 className="md:text-xl font-semibold">Limitless learning, more possibilities</h4>
                </Fade>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:px-32 md:my-16 p-5">
                {
                    courses?.map(course =>
                        <CourseCard
                            key={course._id}
                            course={course}
                        ></CourseCard>
                    )
                }
            </div>
        </section>
    );
};

export default PopularCourses;