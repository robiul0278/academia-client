import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
  
    let from = location.state?.from?.pathname || "/";



    const handleGooglePop =  () => {
        googleSignIn()
        .then((result) => {
          const user = result.user;
          console.log(user);
          const saveUser = {name: user.displayName, email: user.email}
          fetch("", {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
          .then( (response) => response.json() )
          .then(() => {
          navigate(from, { replace: true });
          })

          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorCode, errorMessage, email, credential )
          // ...
        });
    }
    return (
        <div>
            <div className="divider"></div>
        <div className='w-full text-center'>
        <button onClick={handleGooglePop} className="btn btn-circle btn-outline">
                <FaGoogle/>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;