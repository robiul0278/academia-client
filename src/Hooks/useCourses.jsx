import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useCourses = () => {
    // const [courses, setCourses] = useState([]);
    // const [loading, setLoading] = useState();

    // useEffect(() => {
    //     fetch('http://localhost:5000/courses')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCourses(data);
    //             setLoading(false);
    //         });
    // }, [])
    const { data: courses = [], refetch } = useQuery(['courses'], async () => {
        const res = await fetch("http://localhost:5000/courses")
        return res.json()
    })
    return [courses, refetch];
};

export default useCourses;