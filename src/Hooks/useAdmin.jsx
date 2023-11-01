

import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading:adminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/admin/${user?.email}`);
            
            return response.data.admin;      
        }
       })
       return [isAdmin,adminLoading];
};

export default useAdmin;