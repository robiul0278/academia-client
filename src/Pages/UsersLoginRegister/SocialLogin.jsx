import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
const SocialLogin = () => {
  const { googleSignIn ,updateUserProfile, gitHubSignIn} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";



  const handleGooglePop = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
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
            updateUserProfile()
              .then(() => {
                toast.success("Login successful!",{
                  position: "top-center",
                  theme: "light",
                  autoClose: 3000,
                })
              })
            navigate(from, { replace: true });
          })
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }


  

  // GitHub Login ===========================

  const handleGit = () => {
    gitHubSignIn()
      .then((result) => {
        toast.success("Login successful!",{
          position: "top-center",
          theme: "light",
          autoClose: 3000,
        })
        navigate(from, { replace: true })
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }


  return (
<div>
<div>
<div className="divider">OR</div>
</div>
    <div className="flex items-center justify-center gap-2">
        <button onClick={handleGooglePop}
        className="flex items-center justify-center px-6 py-2.5 w-full text-sm bg-[#007bff] hover:bg-blue-600 text-white rounded active:bg-[#006bff]" >
        <FcGoogle />
        </button>
        <button onClick={handleGit}
        className="flex items-center justify-center px-6 py-2.5 w-full text-sm bg-[#007bff] hover:bg-blue-600 text-white rounded active:bg-[#006bff]"> <FaGithub/></button>
    </div>
</div>
  );
};

export default SocialLogin;