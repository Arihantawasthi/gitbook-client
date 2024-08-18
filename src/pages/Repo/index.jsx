import Layout from "../../components/Layout";
import HeroSection from "./HeroSection";
import SelectMenu from "../../components/SelectMenu";


function Repo() {
    return (
        <Layout>
            <HeroSection />
            <div className="flex justify-end">
                <SelectMenu />
            </div>
            <FileExplorer />
        </Layout>
    );
}


function FileExplorer() {
    return (
        <div className="mt-4 border border-outline rounded-t-lg">
            <FileExplorerHeader />
            <FileExplorerObjects />
            <FileExplorerObjects />
            <FileExplorerObjects />
            <FileExplorerObjects />
        </div>
    );
}


function FileExplorerHeader() {
    return (
        <div className="p-4 flex justify-between items-center bg-surface-container rounded-t-lg w-full">
            <p className="font-display w-2/3 overflow-hidden whitespace-nowrap overflow-ellipsis">./go/structures/sub-structures/structures-with-tree</p>
            <div className="flex gap-x-1 items-center">
                <div className="h-5 w-5">
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/icons/history-filled.png"
                    />
                </div>
                <p className="underline cursor-pointer">Commits</p>
            </div>
        </div>
    );
}


function FileExplorerObjects() {
    return (
        <div className="p-4 flex justify-between items-center border-b border-outline last:border-none font-display">
            <div className="flex gap-x-2 items-center">
                <div className="h-5 w-5">
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/icons/dir-filled.png"
                    />
                </div>
                <p className="underline">go/</p>
            </div>
            <p>10B</p>
        </div>
    );
}


export default Repo;
