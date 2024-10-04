import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";


function FileNav({ repoName, selectedBranch }) {
    const navigate = useNavigate();
    const { data, loading, error, fetchRepoObjects } = useFetchRepoObjects(repoName, selectedBranch, "tree", "");

    if (loading) {
        return <LoadingScreen />
    }

    const fetchNewPath = (type, fullPath) => {
        console.log(fullPath);
        if (type === 'tree') {
            return null;
        }
        return null;
    }

    return (
        <div className="absolute py-6 px-4 bottom-0 left-0 w-full h-2/3 bg-surface-container z-10 rounded-t-3xl shadow-md overflow-y-scroll">
            {data.objects.map((object, idx) => <FileNavItem key={idx} object={object} fetchNewPath={fetchNewPath} />)}
        </div>
    );
}


function FileNavItem({ object, fetchNewPath }) {
    return (
        <section
            className="flex my-1 gap-x-4 py-3 px-2 hover:bg-outline rounded-xl"
            onClick={() => fetchNewPath(object.type, object.fullPath)}
        >
            <div className="flex gap-x-1 items-center">
                <div className="h-5 w-5">
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/icons/arrow-right.png"
                    />
                </div>
                <div className="h-6 w-6">
                    <img
                        className="h-full w-full object-center object-cover"
                        src={object.type == "tree" ? "/icons/dir-filled.png" : "/icons/file-filled.png"}
                    />
                </div>
            </div>
            <p>{ object.path }</p>
        </section>
    );
}



export default FileNav;
