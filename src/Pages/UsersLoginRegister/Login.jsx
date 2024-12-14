/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from 'react-hook-form';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "./SocialLogin";


const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError,] = useState('')
  const { signIn, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";



  // email password login ====================

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        const saveUser = { name: user.displayName, email: user.email, image: user.photoURL }
        fetch("https://summer-camp-server-seven-pink.vercel.app/users", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then((response) => response.json())
          .then(() => {
            reset();
            toast.success("Login successful!",{
              position: "top-center",
              theme: "light",
              autoClose: 3000,
            })
            navigate(from, { replace: true });
          })
          updateUserProfile()
          .then(() => {
            toast.success("Login successful!",{
              theme: "light",
              autoClose: 3000,
            })
          })
          .catch(error => {
            setError(error.message);
          })
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage);
      });
  };
  return (
    // <section classNameName="pt-20">
    //   <div classNameName="px-4 lg:px-0 max-w-7xl mx-auto">
    //     <div classNameName="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
    //       <div classNameName='hidden lg:flex'>
    //         <img classNameName='w-[100%] h-auto' src="login.svg" alt="" data-aos="zoom-in" />
    //       </div>
    //       {/* From  */}
    //       <div classNameName="py-10">


    //         <form
    //           onSubmit={handleSubmit(onSubmit)}
    //           classNameName="card bg-white flex-shrink-0 w-full max-w-md border-b-8 border-b-error border"
    //         >
    //           <div classNameName="card-body font-bold">
    //             <div classNameName="text-center">
    //               <h1 classNameName="text-error font-bold text-3xl">Login Academia</h1>
    //             </div>
    //             <div classNameName="form-control">
    //               <label classNameName="label">
    //                 <span classNameName="label-text">Email</span>
    //               </label>
    //               <input
    //                 {...register("email", { required: true })}
    //                 name="email"
    //                 type="email"
    //                 placeholder="Your email"
    //                 classNameName="input input-bordered"
    //                 required
    //               />
    //             </div>
    //             <div classNameName="form-control">
    //               <label classNameName="label">
    //                 <span classNameName="label-text">Password</span>
    //               </label>
    //               <input
    //                 {...register("password", { required: true })}
    //                 name="password"
    //                 type="password"
    //                 placeholder="Your password"
    //                 classNameName="input input-bordered"
    //                 required
    //               />
    //               <label classNameName="label">
    //                 <a href="#" classNameName=" text-orange-500">
    //                   {error}
    //                 </a>
    //               </label>
    //             </div>
    //             <div classNameName="form-control">
    //               <button classNameName="btn btn-error text-white font-semibold">Login</button>
    //             </div>
    //             <div>
    //               <h2 classNameName="text-center font-bold">OR</h2>
    //               <h2 classNameName="font-semibold text-center">
    //                 to continue Acamemia
    //               </h2>
    //               <div classNameName="grid grid-cols-2 gap-5 pt-2">
    //                 <button
    //                   onClick={handleGoogle}
    //                   classNameName="btn md:w-44 bg-transparent  hover:bg-slate-100 "
    //                 >
    //                   <FcGoogle className=""></FcGoogle> Google
    //                 </button>
    //                 <button
    //                   onClick={handleGit}
    //                   className="btn md:w-44 bg-transparent  hover:bg-slate-100 "
    //                 >
    //                   <FaGithub className=""></FaGithub> GitHub
    //                 </button>
    //               </div>
    //             </div>
    //             <div className="text-center pt-3">
    //               <div>
    //                 New member ?&ensp;
    //                 <Link to="/register" className=" text-blue-600">
    //                   Create an account.
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
<div className="container mx-auto px-5">
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-[sans-serif] text-[#333] max-w-md mx-auto">
      <div className="relative flex items-center">
        <input {...register("email", { required: true })} type="email" placeholder="Enter Email"
          className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />

        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
          viewBox="0 0 682.667 682.667">
          <defs>
            <clipPath id="a" clipPathUnits="userSpaceOnUse">
              <path d="M0 512h512V0H0Z" data-original="#000000"></path>
            </clipPath>
          </defs>
          <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
            <path fill="none" stroke-miterlimit="10" stroke-width="40"
              d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
              data-original="#000000"></path>
            <path
              d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
              data-original="#000000"></path>
          </g>
        </svg>
      </div>

      <div className="relative flex items-center">
        <input  {...register("password", { required: true })} type="password" placeholder="Enter Password"
          className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />

        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
          className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
          <path
            d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
            data-original="#000000"></path>
        </svg>
      </div>

      <div className="flex items-center">
        <input type="checkbox" className="w-3 h-4 shrink-0" />
        <p className="text-sm ml-4">Remember me</p>
      </div>

      <button type="submit"
        className="px-6 py-2.5 w-full !mt-8 text-sm bg-[#007bff] hover:bg-blue-600 text-white rounded active:bg-[#006bff]">Submit</button>
    <SocialLogin/>
               <div className="text-center pt-3">
               <div>
                    New member ?&ensp;
                  <Link to="/register" className=" text-blue-600">
                    Create an account.
                   </Link>
               </div>
              </div>
    </form>

</div>
  );
};

export default Login;