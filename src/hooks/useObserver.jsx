import { useEffect, useRef, useState } from "react";
import { REPOS_PER_PAGE } from "../utils";


function useObserver(limit) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pageLimit, setPageLimit] = useState(limit);

    const observerRef = useRef();

    const fetchRepos = async limit => {
        try {
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
        fetchRepos(pageLimit);
    }, [pageLimit]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const lastEntry = entries[0];
            if (lastEntry.isIntersecting && !loading && repos.length >= REPOS_PER_PAGE) {
                setPageLimit(prevState => prevState + REPOS_PER_PAGE);
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
