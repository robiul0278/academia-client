import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setLoading(false);
            });
    }, [])
    return [courses, loading];
};

export default useCourses;