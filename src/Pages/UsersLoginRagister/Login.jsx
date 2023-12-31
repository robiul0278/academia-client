import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from './SocialLogin';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState();
    const [error, setError] = useState('');

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.log(errorMessage);
            });
    }


    return (
        <>
            <Helmet>
                <title>ACADEMIA | Login</title>
            </Helmet>
            <div className="hero min-h-screen w-full py-32 bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card  border bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                            <div className="text-center">
                                <h1 className="text-5xl font-semibold"> Login Now !</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered w-full" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    type={show ? 'text' : 'password'}
                                    name="password"  {...register("password", { required: true })} placeholder="password" className="input input-bordered w-full" />
                                <p onClick={() => setShow(!show)}>
                                    <>
                                        {show ? <FaEye /> : <FaEyeSlash />}
                                    </>
                                </p>
                                {errors.password && <span className="text-red-600">Password is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <h4 className="text-yellow-400">{error}</h4>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center">Create a new account ? <span className="text-blue-600"><Link to="/register">register</Link></span> </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;