import { useQuery } from "@tanstack/react-query";

const useAllInstructor = () => {
    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch("https://summer-camp-server-seven-pink.vercel.app/instructor");
            const data = await res.json();
            // console.log(data)
            return data;
        }
    });

    return {instructors, loading, refetch};
}

export default useAllInstructor;

