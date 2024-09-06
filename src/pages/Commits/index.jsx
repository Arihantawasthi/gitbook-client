import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import RepoHeroSection from "../../components/RepoHeroSection";
import LoadingScreen from "../../components/LoadingScreen";


function Commits() {
    const { repoName } = useParams("repoName");
    const { branch } = useParams("branch");

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepoCommits = async (repoName, branch) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/repo/logs/${repoName}/${branch}`);
            if (!response.ok) {
                throw new Error("Failed to fetch the repository commits");
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
        fetchRepoCommits(repoName, branch);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Layout>
            <RepoHeroSection />
            <h1 className="mt-6 text-xl font-bold">Commits</h1>
            <div className="mt-4">
                {data.map((item, idx) => <CommitCard key={idx} commitObject={item} />)}
            </div>
        </Layout>
    );
}


function CommitSign() {
    return (
        <div className="ml-4 flex flex-col items-center w-4">
            <div className="w-1 rounded-t-2xl h-8 bg-primary"></div>
            <div className="w-4 h-4 rounded-full bg-primary"></div>
            <div className="w-1 rounded-b-2xl h-8 bg-primary"></div>
        </div>
    );
}


function CommitCard({ commitObject }) {
    return (
        <>
            <div className="p-4 bg-surface-container rounded-t-2xl shadow-lg">
                <p className="text-lg font-bold">{ commitObject.commit_message }</p>
                <p className="text-sm">By { commitObject.commit_author }</p>
                <div className="mt-4">
                    <p>
                        <span className="text-lg font-bold">{ commitObject.files_changed } </span>
                        Files Changed
                    </p>
                    <p>
                        <span className="text-lg font-bold text-green-500">{ commitObject.insertions } </span>
                        Insertions (+)
                    </p>
                    <p>
                        <span className="text-lg font-bold text-red-500">{ commitObject.deletions } </span>
                        Deletions (-)
                    </p>
                </div>
            </div>
            <p className="px-3 py-2 text-sm bg-outline rounded-b-2xl">Timestamp: 21 July, 2024</p>
            <CommitSign />
        </>
    );
}


export default Commits;
