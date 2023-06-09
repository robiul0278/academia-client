
const CourseCard = ({ course }) => {
    const { courseName, instructor, price, image, rating } = course;
    return (
        <>
            <div className="card w-full bg-base-100 border">
                <figure className="px-10 pt-10"><img src={image} alt="course image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {courseName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Instructor : {instructor}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Rating : {rating}</div>
                        <div className="badge badge-outline">Price : ${price}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;