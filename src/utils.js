export const getDirPath = (path) => {
    const pathSplits = path.split("/");
    if (pathSplits.length <= 5) {
        return ""
    }
    const codePathSplit = pathSplits.slice(6, pathSplits.length);
    const codePath = codePathSplit.join("/")
    return codePath;
}
