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
