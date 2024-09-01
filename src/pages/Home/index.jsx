import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import RepositoryCard from "./RepositoryCard";


function Home() {
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
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRepositories();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Layout>
            <h1 className="text-3xl font-bold">Repositories</h1>
            {repos.map((repo, idx) => (
                <RepositoryCard key={idx} repo={repo} />
            ))}
        </Layout>
    );
}


export default Home;
