const MAX_COMMIT_CARD_BOXES = 6;


export const calculatedDeletionBoxes = (insertions, deletions) => {
    const iInsertions = parseInt(insertions);
    const iDeletions = parseInt(deletions);

    const deletionPercentage = iDeletions / (iInsertions + iDeletions);

    return Math.round(deletionPercentage * MAX_COMMIT_CARD_BOXES);
}


export const getDirPath = (path) => {
    const pathSplits = path.split("/");
    if (pathSplits.length <= 5) {
        return ""
    }
    const codePathSplit = pathSplits.slice(6, pathSplits.length);
    const codePath = codePathSplit.join("/")
    return codePath;
}

export const createFileNavState = (objects) => {
    const nestedFileObjects = [];
    objects.forEach(obj => {
        const nestedFileObject = {};
        nestedFileObject.id = Math.random().toString(36).substring(2, 10);
        nestedFileObject.type = obj.type;
        nestedFileObject.path = obj.path;
        nestedFileObject.full_path = obj.full_path;
        nestedFileObject.size = obj.size;
        nestedFileObject.objects = [];;
        nestedFileObjects.push(nestedFileObject);
    })

    return nestedFileObjects;
}

export const addNewObjectsInFileNav = (objectId, newObjects, objects) => {
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].id == objectId) {
            objects[i].objects = newObjects;
            return objects;
        }
        addNewObjectsInFileNav(objectId, newObjects, objects[i].objects)
    }
    return objects;
}

export const getLineNumberWidth = totalLines => {
    const digits = Math.max(3, totalLines.toString().length)
    return `${digits}ch`
}
