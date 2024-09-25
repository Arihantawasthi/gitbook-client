import Layout from "../../components/Layout";
import { FileExplorerHeader } from "../../components/FileExplorer";
import { SelectMenu } from "../../components/SelectMenu";
import FileNav from "./FileNav";
import RepoDesc from "../../components/RepoDesc";


function Tree() {
    return (
        <Layout>
            <RepoDesc repoName={"Dummy Name"} repoDesc={"Dummy Description"} />
            <div className="mt-6 flex justify-between items-center">
                <div className="h-8 w-8 cursor-pointer">
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/icons/menu-filled.png"
                    />
                </div>
                <SelectMenu />
            </div>
            <div className="mt-2">
                <FileExplorerHeader />
                <CodeLine />
            </div>
            <FileNav />
        </Layout>
    );
}


function CodeLine() {
    return (
        <div className="flex font-display">
            <p className="px-2 bg-surface-container">1</p>
            <p className="pl-2 bg-[#000] w-full">package arrays</p>
        </div>
    );
}


export default Tree;
