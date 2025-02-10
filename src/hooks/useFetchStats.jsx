import { useState, useEffect } from "react";
import { FETCH_STATS } from "../api/config";


const useFetchStats = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchStats = async () => {
        try {
            const response = await fetch(FETCH_STATS);
            if (!response.ok) {
                throw new Error("Failed to fetch the stats");
            }
            const data = await response.json();
            setStats(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchStats();
    }, []);

    return { stats, loading, error };
}

export default useFetchStats;
