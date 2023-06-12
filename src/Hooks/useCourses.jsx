import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useCourses = () => {
    // const [courses, setCourses] = useState([]);
    // const [loading, setLoading] = useState();

    // useEffect(() => {
    //     fetch('https://summer-camp-server-seven-pink.vercel.app/courses')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCourses(data);
    //             setLoading(false);
    //         });
    // }, [])
    const { data: courses = [], refetch } = useQuery(['courses'], async () => {
        const res = await fetch("https://summer-camp-server-seven-pink.vercel.app/courses")
        return res.json()
    })
    return [courses, refetch];
};

export default useCourses;