import { useState, useEffect } from "react";


const useFetchRepoObjects = (repoName) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepoObjects = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/repo/${repoName}/tree/metadata/master/`);
            if (!response.ok) {
                throw new Error("Failed to fetch the repository objects");
            }
            const data = await response.json();
            setData(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRepoObjects();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, loading, error };
}


export default useFetchRepoObjects;
