import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useMyCourses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: myCourse = [] } = useQuery({
        queryKey: ['courses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/courses/${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [myCourse, refetch]
};

export default useMyCourses;