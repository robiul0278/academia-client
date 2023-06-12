import { useEffect, useState } from "react";

const useInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState()

    useEffect(() => {
        fetch('https://summer-camp-server-seven-pink.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
                setLoading(false);
            });
    }, [])
    return [instructors, loading];
};

export default useInstructors;