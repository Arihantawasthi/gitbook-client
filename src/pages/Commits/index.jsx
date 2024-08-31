import Layout from "../../components/Layout";
import RepoHeroSection from "../../components/RepoHeroSection";

function Commits() {
    return (
        <Layout>
            <RepoHeroSection />
            <h1 className="mt-6 text-xl font-bold">Commits</h1>
            <div className="mt-4">
                <CommitCard />
                <CommitCard />
                <CommitCard />
                <CommitCard />
                <CommitCard />
            </div>
        </Layout>
    );
}


function CommitSign() {
    return (
        <div className="ml-4 flex flex-col items-center w-4">
            <div className="w-1 rounded-t-2xl h-8 bg-primary"></div>
            <div className="w-4 h-4 rounded-full bg-primary"></div>
            <div className="w-1 rounded-b-2xl h-8 bg-primary"></div>
        </div>
    );
}


function CommitCard() {
    return (
        <>
            <div className="p-4 bg-surface-container rounded-t-2xl shadow-lg">
                <p>Commit Message</p>
                <p>Arihant</p>
                <p>File Changed: 7</p>
                <p>Added (+): 71</p>
                <p>Removed (-): 40</p>
            </div>
            <p className="px-3 py-2 text-sm bg-outline rounded-b-2xl">Timestamp: 21 July, 2024</p>
            <CommitSign />
        </>
    );
}


export default Commits;
