import { useState } from "react";

import LoadingScreen from "../../components/LoadingScreen";
import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";


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
    const { data, loading, error, fetchRepoObjects } = useFetchRepoObjects(repoName, selectedBranch, "tree", "");

    if (loading) {
        return <LoadingScreen />
    }

    let objects = createFileNavState(data.objects);
    const fetchNewPath = async (objectId, type, fullPath) => {
        if (type === 'tree') {
            try {
                const tailPath = fullPath ? fullPath + "/" : "";
                const response = await fetch(`http://localhost:8000/api/v1/repo/${repoName}/${type}/metadata/${selectedBranch}/${tailPath}`)
                if (!response.ok) {
                    throw new Error("Failed to fetch the repository objects");
                }
                const data = await response.json();
                console.log(data.data.objects);
                const newObjects = createFileNavState(data.data.objects)
                objects = addNewObjectsInFileNav(objectId, newObjects, objects)
                console.log("objects", objects);
            } catch (err) {
                console.log(err);
            }
        }
        return null;
    }

    return (
        <div className="fixed py-6 px-4 bottom-0 left-0 w-full h-2/3 bg-surface-container z-10 rounded-t-3xl shadow-md overflow-y-scroll">
            {objects.map((object, idx) => <FileNavItem key={idx} object={object} fetchNewPath={fetchNewPath} />)}
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
