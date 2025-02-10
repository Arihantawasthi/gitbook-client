import { useState, useEffect } from "react";
import { createFileNavState, addNewObjectsInFileNav } from "../utils";
import { fetchRepoObjectsRequest } from "../api/config";

const useFetchFileNavObjects = (repoName, branch, type, path) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const tailPath = path? path + "/" : ""

    const fetchFileNavObjects = async (repoName, branch, type, tailPath, objectId='', prevObjects=[]) => {
        try {
            const url = fetchRepoObjectsRequest(repoName, type, branch, tailPath);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch the repository objects")
            }
            const data = await response.json();
            let objects = createFileNavState(data.data.objects)
            console.log(objects);
            if (objectId === '' || prevObjects.length == 0) {
                setData(objects)
                return
            }
            objects = addNewObjectsInFileNav(objectId, objects, prevObjects)
            setData([...objects])
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

export default useFetchFileNavObjects;
