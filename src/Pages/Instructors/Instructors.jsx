import useAllInstructor from "../../Hooks/useAllInstructors";

const Instructors = () => {
    const {instructors} = useAllInstructor();
    console.log(instructors)
    return (
        <div>
            
        </div>
    );
};

export default Instructors;