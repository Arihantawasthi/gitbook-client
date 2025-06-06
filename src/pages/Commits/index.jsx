import { useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import RepoDesc from "../../components/RepoDesc";
import LoadingScreen from "../../components/LoadingScreen";
import useFetchRepoCommits from "../../hooks/useFetchRepoCommits";
import CommitCard from "./CommitCard";


function Commits() {
    const { repoName } = useParams("repoName");
    const { branch } = useParams("branch");
    const { data, loading, error } = useFetchRepoCommits(repoName, branch);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Layout>
            { error ? "Error: error fetching commits" : (
                <>
                    <RepoDesc repoName={data.repoName} repoDesc={data.repoDesc} />
                    <h1 className="mt-6 text-xl font-bold">Commits</h1>
                    <div className="mt-4 flex flex-col">
                        {data.logs.map((item, idx) => <CommitCard key={idx} repoName={repoName} commitObject={item} />)}
                    </div>
                </>
            )}
        </Layout>
    );
}


export default Commits;
