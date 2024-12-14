import useAllInstructor from "../../Hooks/useAllInstructors";
import InstructorCard from "./instructorCard";

const Instructors = () => {
    const {instructors} = useAllInstructor();
    console.log(instructors)
    return (
        <section className="container mx-auto my-10">
          <div className="grid md:grid-cols-6 sm:grid-cols-3 md:gap-5 gap-3">
            {instructors?.slice(0, 8).map((person) => (
              <InstructorCard
                key={person._id}
                person={person}
              ></InstructorCard>
            ))}
          </div>
        </section>
    );
};

export default Instructors;