/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet";

const Register = () => {

    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const onSubmit = data => {
        if (data.password === data.confirmPassword) {
            createUser(data.email, data.password)

                .then(result => {
                    setError("");
                    const loggedUser = result.user;
                    console.log(loggedUser);

                    updateUserProfile(data.name, data.photoURL)
                        .then(() => {
                            const saveUser = { name: data.name, email: data.email, image: data.photoURL };
                            fetch('https://summer-camp-server-seven-pink.vercel.app/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    if (data.insertedId) {
                                        reset();
                                        logOut();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User created successfully.',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        navigate('/');
                                    }
                                })
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            console.log(errorMessage);
                        });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);
                    console.log(errorMessage);
                });
        }
        else {
            setError('password dont match')
        }
    }


    return (
        <>
            <Helmet>
                <title>ACADEMIA | Sign Up</title>
            </Helmet>
            <div className="container mx-auto px-5">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-[sans-serif] text-[#333] max-w-md mx-auto">
                        <input {...register("name", { required: true })} type="name" placeholder="Enter Name"
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />
                             {errors.name && <span className="text-red-600">Name is required</span>}
                        <input {...register("email", { required: true })} type="email" placeholder="Enter Email"
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />
                            {errors.email && <span className="text-red-600">Email is required</span>}

                        <input {...register("password", {required: true,minLength: 6})} type="password" placeholder="Enter Password"
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />
                             {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        <input  type="password" placeholder="Enter Confirm Password"
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" 
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value) => {
                                    if (watch('password') != value) {
                                        return 'Passwords do not match';
                                    }
                                }
                             })}  
                            />
                            {errors.confirmPassword && (<span className='text-red-500'>Both password must match!</span>)}
                        <input  {...register("photoURL", { required: true })} type="url" placeholder="Enter Photo URL"
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            <h4 className="text-yellow-400">{error}</h4>
                    <div className="flex items-center">
                        <input type="checkbox" className="w-3 h-4 shrink-0" />
                        <p className="text-sm ml-4">Remember me</p>
                    </div>

                    <button type="submit"
                        className="px-6 py-2.5 w-full !mt-8 text-sm bg-[#007bff] hover:bg-blue-600 text-white rounded active:bg-[#006bff]">Submit</button>
                    <SocialLogin />
                    <div className="text-center pt-3">
                        <div>
                            Already member ?&ensp;
                            <Link to="/login" className=" text-blue-600">
                                Please login.
                            </Link>
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
};

export default Register;