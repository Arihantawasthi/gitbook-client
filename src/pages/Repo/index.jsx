import { useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import HeroSection from "./HeroSection";
import SelectMenu from "../../components/SelectMenu";
import { FileExplorerHeader, FileExplorerObjects } from "../../components/FileExplorer";
import LoadingScreen from "../../components/LoadingScreen";

import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";




function Repo() {
    const { repoName } = useParams("repoName");
    const { data, loading, error } = useFetchRepoObjects(repoName);

    return (
        <Layout>
            { loading && <LoadingScreen /> }
            {error ? `Error: ${error}` : <HeroSection name={data.name} desc={data.desc} />}
            <div className="flex justify-end">
                <SelectMenu />
            </div>
            <div className="mt-4 border border-outline rounded-xl">
                <FileExplorerHeader />
                <FileExplorerObjects />
                <FileExplorerObjects />
                <FileExplorerObjects />
                <FileExplorerObjects />
            </div>
        </Layout>
    );
}


export default Repo;
