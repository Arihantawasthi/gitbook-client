import Layout from "../../components/Layout";
import HeroSection from "./HeroSection";
import { SelectMenu, Option } from "../../components/SelectMenu";
import { FileExplorerHeader, FileExplorerObjects } from "../../components/FileExplorer";
import { useNavigate } from "react-router-dom";


function Repo({ data, path, branch, onClick, updateRepo }) {
    const navigate = useNavigate();

    const goBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        }
    }

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
            <HeroSection name={data.name} desc={data.desc} />
            <div className="mt-6 flex justify-between items-center">
                <div
                    className="h-8 w-8 cursor-pointer"
                    onClick={goBack}
                >
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/icons/arrow-back.png"
                    />
                </div>
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
