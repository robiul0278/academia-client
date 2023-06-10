import useInstructors from "../../Hooks/useInstructors";
import AllInstructorCard from "./AllInstructorCard";

const Instructors = () => {
    const [instructors] = useInstructors();
    console.log(instructors)
    return (
        <section className="pt-52">
            <div className="text-center leading-loose">
                <h1 className="text-5xl font-semibold">Explore Our All <br /> Instructors</h1>
                <h4 className="text-xl font-semibold">Join our community of students around the world helping you succeed</h4>
            </div>
            <div className="grid p-5 md:grid-cols-3 grid-cols-1 gap-10 md:px-32 my-16">
                {
                    instructors.map(instructor =>
                        <AllInstructorCard
                            key={instructor.id}
                            instructor={instructor}
                        ></AllInstructorCard>
                    )
                }
            </div>
        </section>
    );
};

export default Instructors;