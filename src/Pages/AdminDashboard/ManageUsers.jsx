import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAllUser from "../../Hooks/useAllUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCanArrowUp, faUser, faUserGear, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageUsers = () => {
    const [users, refetch] = useAllUser();


    // const handleMakeAdmin = user => {       
    //     useAxiosSecure.patch(`/users/admin/${user._id}`).then(res => {

    //         if (res.data.modifiedCount > 0) {
    //             refetch();
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: `${user.name} is admin now`,
    //                 showConfirmButton: true,
    //             })
    //         }
    //     })
    // }

    const handleMakeAdmin = user => {
        fetch(`https://summer-camp-server-seven-pink.vercel.app/users/admin/${user._id}`, {
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
                    toast.info(`Now ${user.name} is Admin!`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(`https://summer-camp-server-seven-pink.vercel.app/users/instructor/${user._id}`, {
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
                    toast.success(`🦄 Now ${user.name} is Instructor!`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                }
            })
    }
    const handleMakeUser = user => {
        fetch(`https://summer-camp-server-seven-pink.vercel.app/users/makeUser/${user._id}`, {
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
                    toast.success(`🦄 Now ${user.name} is User!`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                }
            })
    }


    const handleDelete = user => {
        fetch(`https://summer-camp-server-seven-pink.vercel.app/user/delete/${user._id}`, {
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
                    toast.error('🦄 User Delete Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });

                }
            })
    }
    return (
        <div className="w-full p-5">
            <Helmet>
                <title>ACADEMIA | manage users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold text-center my-4">MANAGE USERS</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className=" bg-slate-200">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                            <th>Make User</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <th className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.image} alt="User" />
                                    </div>
                                </th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ?  <p className="text-green-600 font-semibold">Admin</p> :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn-ghost bg-sky-600  text-white"><FontAwesomeIcon icon={faUserGear} /></button>
                                }</td>
                                <td>{user.role === 'instructor' ? <p className="text-green-600 font-semibold">Instructor</p> :
                                    <button onClick={() => handleMakeInstructor(user)} className=" btn-ghost bg-cyan-600  text-white"><FontAwesomeIcon icon={faUserPen} /></button>
                                }</td>
                                <td>{user.role === 'user' ?  <p className="text-green-600 font-semibold">User</p>:
                                    <button onClick={() => handleMakeUser(user)} className=" btn-ghost bg-teal-500  text-white"><FontAwesomeIcon icon={faUser} /></button>
                                }</td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className=" btn-ghost bg-error  text-white"><FontAwesomeIcon icon={faTrashCanArrowUp} /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <ToastContainer />
            </div>
        </div>
    );
};
export default ManageUsers;