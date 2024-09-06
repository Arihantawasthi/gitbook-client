import Layout from "../../components/Layout";
import HeroSection from "./HeroSection";
import { SelectMenu, Option } from "../../components/SelectMenu";
import { FileExplorerHeader, FileExplorerObjects } from "../../components/FileExplorer";



function Repo({ data, error, selectedValue, onClick }) {
    return (
        <Layout>
            {error ? `Error: ${error}` : <HeroSection name={data.name} desc={data.desc} />}
            <div className="flex justify-end">
                <SelectMenu selectedValue={selectedValue}>
                    {data.branches.map((item, idx) => <Option key={idx} item={item} onClick={onClick} />)}
                </SelectMenu>
            </div>
            <div className="mt-4 border border-outline rounded-xl">
                <FileExplorerHeader repo={data.name} branch={selectedValue} />
                {data.objects.map((object, idx) => <FileExplorerObjects key={idx} object={object} />) }
            </div>
        </Layout>
    );
}


export default Repo;
