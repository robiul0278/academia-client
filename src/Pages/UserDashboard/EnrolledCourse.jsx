import { Link } from "react-router-dom";
import usePayments from "../../Hooks/usePayments";
import { Helmet } from "react-helmet";

const EnrolledCourse = () => {
    const [payment] = usePayments();
    return (
        <div className="w-full p-5">
            <Helmet>
                <title>ACADEMIA | My Enrolled Courses</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">My Enrolled Course</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-slate-200">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Enrolled Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment?.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-bold">
                                    {item.courseName}
                                </td>
                                <td className="">{item.instructor}</td>
                                <td className="">{item.date}</td>
                                <td className="">${item.price}</td>
                                <td>
                                    <Link><button className="btn btn-accent btn-sm">{item.status}</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledCourse;