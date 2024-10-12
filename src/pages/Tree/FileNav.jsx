import { useEffect, useState } from "react";

import LoadingScreen from "../../components/LoadingScreen";


const useFetchFileNavObjects = (repoName, branch, type, path) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const tailPath = path? path + "/" : ""

    const fetchFileNavObjects = async (repoName, branch, type, tailPath, objectId='') => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/repo/${repoName}/${type}/metadata/${branch}/${tailPath}`);
            if (!response.ok) {
                throw new Error("Failed to fetch the repository objects")
            }
            const data = await response.json();
            let objects = createFileNavState(data.data.objects)
            if (objectId === '') {
                setData(objects)
                return
            }
            objects = addNewObjectsInFileNav(objectId, objects, data)
            setData([...data, data.data.objects])
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchFileNavObjects(repoName, branch, type, tailPath);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    return { data, loading, error, fetchFileNavObjects };
}

const createFileNavState = (objects) => {
    const nestedFileObjects = [];
    objects.forEach((obj) => {
        const nestedFileObject = {}
        nestedFileObject.id = Math.random().toString(36).substring(2, 10)
        nestedFileObject.type = obj.type
        nestedFileObject.path = obj.path
        nestedFileObject.fullPath = obj.fullPath
        nestedFileObject.size = obj.size
        nestedFileObject.objects = []
        nestedFileObjects.push(nestedFileObject);
    })
    return nestedFileObjects;
}

const addNewObjectsInFileNav = (objectId, newObjects, objects) => {
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].id === objectId) {
            objects[i].objects = newObjects
            return objects
        }
        addNewObjectsInFileNav(objectId, newObjects, objects[i].objects)
    }
    return objects
}

function FileNav({ repoName, selectedBranch }) {
    const { data, loading, error, fetchFileNavObjects } = useFetchFileNavObjects(repoName, selectedBranch, "tree", "");

    console.log(data);
    if (loading) {
        return <LoadingScreen />
    }

    const fetchNewPath = async (objectId, type, fullPath) => {
        if (type === 'tree') {
            const tailPath = fullPath ? fullPath + "/" : "";
            await fetchFileNavObjects(repoName, selectedBranch, type, tailPath, objectId)
        }
        return null;
    }

    return (
        <div className="fixed py-6 px-4 bottom-0 left-0 w-full h-2/3 bg-surface-container z-10 rounded-t-3xl shadow-md overflow-y-scroll">
            {data.map((object, idx) => <FileNavItem key={idx} object={object} fetchNewPath={fetchNewPath} />)}
        </div>
    );
}


function FileNavItem({ object, fetchNewPath }) {
    return (
        <div>
            <section
                className="flex my-1 gap-x-4 py-3 px-2 hover:bg-outline rounded-xl"
                onClick={() => fetchNewPath(object.id, object.type, object.fullPath)}
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
            {object.objects.map((object, idx) => <FileNavItem key={idx} object={object} fetchNewPath={fetchNewPath} />)}
        </div>
    );
}



export default FileNav;
