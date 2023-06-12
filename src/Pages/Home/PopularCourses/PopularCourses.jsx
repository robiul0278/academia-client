import useCourses from "../../../Hooks/useCourses";
import CourseCard from "./CourseCard";

const PopularCourses = () => {

const [courses] = useCourses();
    // console.log(courses);
    return (
        <section className="mt-16">
            <div className="text-center">
                <h1 className="text-5xl font-semibold">Explore Our Popular Online <br />Courses</h1>
                <h4 className="text-xl font-semibold">Limitless learning, more possibilities</h4>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:px-32 my-16 p-5">
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