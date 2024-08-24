import Layout from "../../components/Layout";
import HeroSection from "./HeroSection";
import SelectMenu from "../../components/SelectMenu";
import { FileExplorerHeader, FileExplorerObjects } from "../../components/FileExplorer";


function Repo() {
    return (
        <Layout>
            <HeroSection />
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
