import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";



  const handleGooglePop = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const saveUser = { name: user.displayName, email: user.email, image: user.photoURL }
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then((response) => response.json())
          .then(() => {
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
      <div className='w-full text-center'>
        <button onClick={handleGooglePop} className="btn btn-circle btn-outline">
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;