import { Helmet } from "react-helmet";
import useMyCourses from "../../Hooks/useMyCourses";

const MyCourses = () => {
    const [myCourse] = useMyCourses();
    console.log(myCourse);
    return (
        <div className="px-8">
            <Helmet>
                <title>ACADEMIA | My Courses</title>
            </Helmet>
            <h3 className="text-3xl font-semibold text-center my-4">My Added Courses</h3>
            <div className="grid w-full gap-5">
                {
                    myCourse.map((item) =>
                        <div key={item._id} className="card card-side bg-base-100 shadow-sm">
                            <figure><img className="w-48" src={item.image} alt="Movie" /></figure>
                            <div className="flex justify-around w-full">
                                <div className="p-5">
                                    <h2 className="card-title">{item.courseName}</h2>
                                    <p>Enrolled : {item.enrolled}</p>
                                    <p>Available Seats : {item.availableSeats}</p>
                                    <p>Price : ${item.price}</p>
                                    <p className="font-bold">Instructor : {item.instructor}</p>
                                    <p>{item.email}</p>
                                    <span className="bg-cyan-500 btn-sm btn">{item.status}</span>

                                </div>
                                <div className="p-5 grid grid-cols-1">
                                        {/* <button onClick={() => handleApproved(item)} className="btn btn-sm bg-green-600">APPROVED</button> */}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default MyCourses;