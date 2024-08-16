import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>
            <Repositories />
        </Layout>
    );
}

function Repositories() {
    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold">Repositories</h1>

            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
        </div>
    );
}


function RepositoryCard() {
    return (
        <div className="mt-6 pb-4 w-full text-on-backround rounded-3xl bg-surface-container shadow-lg border-outline">
            <div className="p-4 bg-tertiary text-sm text-on-tertiary rounded-t-3xl">
                <div className="flex gap-x-2">
                    <div className="h-8 w-8">
                        <img className="h-full w-full object-center object-cover" src="/public/icons/repo-icon-fill.png" />
                    </div>
                    <div>
                        <p className="text-xl font-bold">Kata Dojo</p>
                        <p>By Arihant</p>
                    </div>
                </div>
                <div className="mt-2 py-1 flex gap-x-2">
                    <div className="h-4 w-4">
                        <img className="h-full w-full object-center object-cover" src="/public/icons/clock-outline.png" />
                    </div>
                    <p>Created at: Jun 21, 2022 01:28 PM</p>
                </div>
                <div className="flex gap-x-2 items-center">
                    <div className="h-4 w-4">
                        <img className="h-full w-full object-center object-cover" src="/public/icons/clock-outline.png" />
                    </div>
                    <p>Last Commit at: Jun 21, 2022 01:28 PM</p>
                </div>
            </div>
            <p className="mt-4 px-4 text-on-surface-nv">This is a very long description.</p>
        </div>
    );
}


export default Home;
