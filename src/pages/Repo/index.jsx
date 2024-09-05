import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import HeroSection from "./HeroSection";
import { SelectMenu, Option } from "../../components/SelectMenu";
import { FileExplorerHeader, FileExplorerObjects } from "../../components/FileExplorer";
import LoadingScreen from "../../components/LoadingScreen";

import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";


function Repo() {
    const { repoName } = useParams("repoName");
    const { data, loading, error } = useFetchRepoObjects(repoName);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        if (data.branches) {
            setSelectedValue(data.branches[0]);
        }
    }, [data.branches])

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Layout>
            {error ? `Error: ${error}` : <HeroSection name={data.name} desc={data.desc} />}
            <div className="flex justify-end">
                <SelectMenu selectedValue={selectedValue}>
                    {data.branches.map((item, idx) => <Option key={idx} item={item} setSelectedValue={setSelectedValue}/>)}
                </SelectMenu>
            </div>
            <div className="mt-4 border border-outline rounded-xl">
                <FileExplorerHeader />
                {data.objects.map((object, idx) => <FileExplorerObjects key={idx} object={object} />) }
            </div>
        </Layout>
    );
}


export default Repo;
