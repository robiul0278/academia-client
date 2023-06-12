
const CourseCard = ({ course }) => {
    const { courseName,availableSeats, enrolled, instructor, price, image} = course;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-sm">
                <figure className="px-10 pt-10"><img src={image} alt="course image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {courseName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Instructor : {instructor}</p>
                    <p>Available Seat : {availableSeats}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Price : ${price}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Enrolled : {enrolled}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;