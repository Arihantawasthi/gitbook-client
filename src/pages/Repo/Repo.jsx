import Layout from "../../components/Layout";
import HeroSection from "./HeroSection";
import { SelectMenu, Option } from "../../components/SelectMenu";
import { FileExplorerHeader, FileExplorerObjects } from "../../components/FileExplorer";



function Repo({ data, error, selectedValue, onClick, updateRepo}) {
    return (
        <Layout>
            {error ? `Error: ${error}` : <HeroSection name={data.name} desc={data.desc} />}
            <div className="flex justify-end">
                <SelectMenu selectedValue={selectedValue}>
                    {data.branches.map((item, idx) => <Option key={idx} item={item} onClick={onClick} />)}
                </SelectMenu>
            </div>
            <div className="mt-4 border border-outline rounded-xl">
                <FileExplorerHeader />
                {data.objects.map((object, idx) => <FileExplorerObjects key={idx} object={object} updateRepo={updateRepo} />) }
            </div>
        </Layout>
    );
}


export default Repo;
