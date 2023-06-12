import useInstructors from "../../../Hooks/useInstructors";
import InstructorCard from "./InstructorCard";

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    // console.log(instructors)
    return (
        <section>
            <div className="text-center">
                <h1 className="md:text-5xl text-2xl font-semibold">Explore Our Popular <br />Instructors</h1>
                <h4 className="md:text-xl font-semibold">Join our community of students around the world helping you succeed</h4>
            </div>
            <div className="grid p-5 md:grid-cols-3 grid-cols-1 gap-10 md:px-32 md:my-16">
                {
                    instructors.slice(0, 6).map(instructor =>
                        <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                        ></InstructorCard>
                    )
                }
            </div>
        </section>
    );
};

export default PopularInstructors;