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
    const deletionBoxes = calculatedDeletionBoxes(commitObject.insertions, commitObject.deletions);
    const insertionBoxes = 6 - deletionBoxes;

    const renderBoxes = (range, color) => {
        const boxes = [];
        for (let i = 0; i < range; i++) {
            boxes.push(<div className={`h-2 w-2 ${color}`}></div>)
        }
        return boxes;
    }

    return (
        <>
            <div className="p-4 bg-surface-container rounded-t-2xl shadow-lg">
                <p className="text-lg font-bold">{ commitObject.commit_message }</p>
                <p className="text-sm">By { commitObject.commit_author }</p>
                <div className="mt-4 w-[40%] max-w-[60%]">
                    <p className="flex justify-between">
                        <span className="text-lg font-bold">{ commitObject.files_changed }</span>
                        Files Changed
                    </p>
                    <p className="flex justify-between">
                        <span className="text-lg font-bold text-green-500">{ commitObject.insertions } </span>
                        Insertions (+)
                    </p>
                    <p className="flex justify-between">
                        <span className="text-lg font-bold text-red-500">{ commitObject.deletions } </span>
                        Deletions (-)
                    </p>
                </div>
                <div className="mt-2 flex justify-end items-center gap-x-1">
                    {renderBoxes(insertionBoxes, "bg-green-500")}
                    {renderBoxes(deletionBoxes, "bg-red-500")}
                </div>
            </div>
            <p className="px-3 py-2 text-sm bg-outline rounded-b-2xl">Timestamp: { commitObject.commit_timestamp }</p>
            <CommitSign />
        </>
    );
}

const calculatedDeletionBoxes = (insertions, deletions) => {
    const iInsertions = parseInt(insertions);
    const iDeletions = parseInt(deletions);

    const deletionPercentage = iDeletions / (iInsertions + iDeletions);

    return Math.ceil(deletionPercentage * 6);
}


export default Commits;
