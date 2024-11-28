import { useState, useEffect } from "react";


const useFetchRepositories = (limit) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepositories = async limit => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/repos?limit=${limit}`);
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
