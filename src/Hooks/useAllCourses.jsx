import { useQuery } from "@tanstack/react-query";

const useAllCourses = () => {
    const { data: allCourse = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allCourse'],
        queryFn: async () => {
            const res = await fetch("https://summer-camp-server-seven-pink.vercel.app/courses");
            const data = await res.json();
            // console.log(data)
            return data;
        }
    });

    return {allCourse, loading, refetch};
}

export default useAllCourses;



