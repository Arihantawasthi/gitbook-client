import { useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import RepoHeroSection from "../../components/RepoHeroSection";
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
                    <RepoHeroSection />
                    <h1 className="mt-6 text-xl font-bold">Commits</h1>
                    <div className="mt-4">
                        {data.map((item, idx) => <CommitCard key={idx} commitObject={item} />)}
                    </div>
                </>
            )}
        </Layout>
    );
}


export default Commits;
