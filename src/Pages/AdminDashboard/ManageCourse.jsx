// import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useCourses from "../../Hooks/useCourses";

const ManageCourse = () => {
    // const { data: courses = [], refetch } = useQuery(['courses'], async () => {
    //     const res = await fetch("http://localhost:5000/courses")
    //     return res.json()
    // })

    const [courses, refetch] = useCourses();

    const handleApproved = user => {
        fetch(`http://localhost:5000/courses/approved/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDenied = user => {
        fetch(`http://localhost:5000/courses/denied/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="px-8">
            <Helmet>
                <title>ACADEMIA | Manage Course</title>
            </Helmet>
            <h3 className="text-3xl font-semibold text-center my-4">Manage Courses</h3>
            <div className="grid w-full gap-5">
                {
                    courses.map((item) =>
                        <div key={item._id} className="card card-side bg-base-100 shadow-sm">
                            <figure><img className="h-48" src={item.image} alt="Movie" /></figure>
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
                                    
                                        <button onClick={() => handleApproved(item)} className="btn btn-sm bg-green-600">APPROVED</button>

                                        <button onClick={() => handleDenied(item)} className="btn btn-sm  bg-orange-400 ">DENIED</button>

                                        <button onClick={() => handleDenied(item)} className="btn btn-sm  bg-slate-400 ">Feedback</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default ManageCourse;