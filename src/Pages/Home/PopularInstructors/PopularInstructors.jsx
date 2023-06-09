import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])
    console.log(instructors)
    return (
        <section>
            <div className="text-center">
                <h1 className="text-5xl font-semibold">Explore Our Popular <br />Instructors</h1>
                <h4 className="text-xl font-semibold">Join our community of students around the world helping you succeed</h4>
            </div>
            <div className="grid p-5 md:grid-cols-3 grid-cols-1 gap-10 md:px-32 my-16">
                {
                    instructors.map(instructor =>
                        <InstructorCard
                        key={instructor.id}
                        instructor={instructor}
                        ></InstructorCard>
                    )
                }
            </div>
        </section>
    );
};

export default PopularInstructors;