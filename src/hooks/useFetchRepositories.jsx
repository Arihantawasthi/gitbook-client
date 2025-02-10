import { useState, useEffect } from "react";
import { fetchReposRequest } from "../api/config";


const useFetchRepositories = (limit) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepositories = async limit => {
        try {
            const url = fetchReposRequest(limit);
            const response = await fetch(url);
            const data = await response.json();
            if (data.request_status != 1) {
                throw new Error(data.message)
            }
            setRepos(prevState => [...prevState, ...data.data]);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRepositories(limit);
    }, [limit]);

    return { repos, fetchRepositories, loading, error };
}


export default useFetchRepositories;
