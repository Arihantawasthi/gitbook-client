import { useEffect, useRef, useState } from "react";
import { REPOS_PER_PAGE } from "../utils";
import { fetchReposRequest } from "../api/config";


function useObserver(limit) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const observerRef = useRef();

    const fetchRepos = async (limit, page) => {
        try {
            const url = fetchReposRequest(limit, page);
            const response = await fetch(url);
            const data = await response.json();
            if (data.request_status != 1) {
                throw new  Error(data.message);
            }
            setRepos(prevState => [...prevState, ...data?.data || []]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRepos(limit, page);
    }, [limit, page]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const lastEntry = entries[0];
            if (lastEntry.isIntersecting && !loading && repos.length >= REPOS_PER_PAGE * page) {
                setPage(prevState => prevState + 1);
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
