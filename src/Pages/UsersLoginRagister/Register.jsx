import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet";

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
            <div className="hero min-h-screen py-32 bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full border bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                        <div className="text-center">
                                <h1 className="text-5xl font-semibold">Please Register !</h1>
                            </div>
                            <div className="flex">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered w-full" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered w-full ml-4" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/
                                    })} placeholder="password" className="input input-bordered w-full" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case and one special character.</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password"  {...register("confirmPassword", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/
                                    })} placeholder="confirm password" className="input input-bordered w-full ml-4" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case and one special character.</p>}
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                <h4 className="text-yellow-400">{error}</h4>

                            </div>
                            <div className="form-control">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center">Already have an account ? <span className="text-blue-600"><Link to="/login">Login</Link></span> </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;