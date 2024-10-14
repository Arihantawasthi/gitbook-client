import Layout from "../../components/Layout";
import HeroSection from "./HeroSection";
import { SelectMenu, Option } from "../../components/SelectMenu";
import { FileExplorerHeader, FileExplorerObjects } from "../../components/FileExplorer";


function Repo({ data, path, error, branch, onClick, updateRepo}) {
    const treeObjects = [];
    const blobObjects = [];
    data.objects.forEach(object => {
        if (object.type == "tree") {
            treeObjects.push(object);
            return
        }
        blobObjects.push(object);
    });
    return (
        <Layout>
            {error ? `Error: ${error}` : <HeroSection name={data.name} desc={data.desc} />}
            <div className="flex justify-end">
                <SelectMenu selectedValue={branch}>
                    {data.branches.length > 0 && data.branches.map((item, idx) => <Option key={idx} item={item} onClick={onClick} />)}
                </SelectMenu>
            </div>
            <div className="mt-4 border border-outline rounded-xl">
                <FileExplorerHeader repo={data.name} branch={branch} path={path} />
                {treeObjects.map((object, idx) => <FileExplorerObjects key={idx} object={object} updateRepo={updateRepo} />) }
                {blobObjects.map((object, idx) => <FileExplorerObjects key={idx} object={object} updateRepo={updateRepo} />) }
            </div>
        </Layout>
    );
}


export default Repo;
