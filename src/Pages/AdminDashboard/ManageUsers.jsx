import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await fetch("http://localhost:5000/users")
        return res.json()
    })



    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
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

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Make Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-cyan-600  text-white"><FaUserShield></FaUserShield></button> 
                                }</td>
                            <td>{ user.role === 'instructor' ? 'instructor' :
                                <button onClick={() => handleMakeInstructor(user)} className=" btn-ghost bg-cyan-600  text-white"><FaUserShield></FaUserShield></button> 
                                }</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageUsers;