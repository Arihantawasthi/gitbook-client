import { useState, useEffect } from "react";
import { fetchReposRequest } from "../api/config";


const useFetchRepositories = (limit, page) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepositories = async (limit, page) => {
        try {
            const url = fetchReposRequest(limit, page);
            const response = await fetch(url);
            const data = await response.json();
            if (data.request_status != 1) {
                throw new Error(data.message)
            }
            setRepos(prevState => [...prevState, ...data?.data || []]);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRepositories(limit, page);
    }, [limit, page]);

    return { repos, fetchRepositories, loading, error };
}


export default useFetchRepositories;
