import { useState, useEffect } from "react";


const useFetchRepositories = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepositories = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/repos");
            if (!response.ok) {
                throw new Error("Failed to fetch the repositories");
            }
            const data = await response.json();
            setRepos(data.data);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRepositories();
    }, []);

    return { repos, loading, error };
}


export default useFetchRepositories;
