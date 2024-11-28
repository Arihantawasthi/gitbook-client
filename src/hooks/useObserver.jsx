import { useEffect, useRef, useState } from "react";

function useObserver(limit) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const observerRef = useRef();

    const fetchRepos = async limit => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:8000/api/v1/repos?limit=${limit}`)
            const data = await response.json();
            if (data.request_status != 1) {
                throw new  Error(data.message);
            }
            setRepos(prevState => [...prevState, ...data.data]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRepos(limit);
    }, [limit]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const lastEntry = entries[0];
            if (lastEntry.isIntersecting && !loading) {
                limit += 4
            }
        },
            { threshold: 1.0 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) observer.disconnect();
        }
    }, [loading])

    return {repos, loading, error, observerRef };
}

export default useObserver;
