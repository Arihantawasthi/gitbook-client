import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import RepoDesc from "../../components/RepoDesc";
import DiffFileBlock from "./DiffFileBlock";
import LoadingScreen from "../../components/LoadingScreen";

import useFetchDiff from "../../hooks/useFetchDiff";


function Diff() {
    const { repoName } = useParams("repoName");
    const { commitHash } = useParams("hash");
    const { data, loading, error } = useFetchDiff(repoName, commitHash);

    if (loading) {
        return <LoadingScreen />
    }
    if (error) {
        return <div>Oops! An Error occured</div>
    }

    return (
        <Layout>
            <RepoDesc repoName={repoName} repoDesc={commitHash} />
            <div className="mt-6 flex flex-col gap-y-4">
                { data.map((object, idx) => <DiffFileBlock key={idx} object={object} />) }
            </div>
        </Layout>
    )
}

export default Diff;
