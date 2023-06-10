import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { BallTriangle } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();

    if (loading) {
        return (
          <>
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </>
        );
      }
      

    if(user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;