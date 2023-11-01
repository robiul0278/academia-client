// import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useCourses from "../../Hooks/useCourses";

const ManageCourse = () => {

    const {courses, refetch} = useCourses();
    console.log(courses)

    const handleApproved = user => {
        fetch(`https://summer-camp-server-seven-pink.vercel.app/courses/approved/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
            }  
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course Approved!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDenied = user => {
        fetch(`https://summer-camp-server-seven-pink.vercel.app/courses/denied/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
            }  
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Course Refused!",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const handleDelete = user => {
        fetch(`https://summer-camp-server-seven-pink.vercel.app/courses/delete/${user._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
            }  
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Delete Successful!',
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
                    courses?.map((item) =>
                        <div key={item._id} className="card card-side bg-base-100 shadow-sm">
                            <figure><img className="h-48" src={item.image} alt="Movie" /></figure>
                            <div className="flex justify-around w-full">
                                <div className="p-5">
                                    <h2 className="card-title">{item.courseName}</h2>
                                    <p>Price :৳ {item.price}</p>
                                    <p className="font-bold">Instructor : {item.instructor}</p>
                                    <p>{item.email}</p>
                                    <span className="font-mono">Status: {item.status}</span>
                                </div>
                                <div className="p-5 grid grid-cols-1">                                 
                                        <button onClick={() => handleApproved(item)} className="btn btn-sm text-white bg-green-600">Approve</button>
                                        <button onClick={() => handleDenied(item)} className="btn btn-sm text-white  bg-orange-400 ">Refused</button>
                                        <button onClick={() => handleDelete(item)} className="btn btn-sm text-white  bg-red-600">Delete</button>
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