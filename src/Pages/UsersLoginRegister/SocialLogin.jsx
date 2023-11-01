import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const SocialLogin = () => {
  const { googleSignIn ,updateUserProfile} = useContext(AuthContext);
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
  return (
    <div>
      <div className="divider"></div>
      <div className='w-full align-middle text-center'>
        <button onClick={handleGooglePop} className="btn btn-circle border mb-4">
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;