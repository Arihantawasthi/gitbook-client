export const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000/api/v1"
export const FETCH_STATS = `${BASE_URL}/stats`;
export const FETCH_REPOS = `${BASE_URL}/repos`;
export const FETCH_REPO_OBJECTS = `${BASE_URL}/repo`;
export const FETCH_REPO_COMMITS = `${BASE_URL}/repo/logs`;
export const FETCH_DIFF = `${BASE_URL}/repo/commit`;


export const fetchReposRequest = query => {
    return `${FETCH_REPOS}?limit=${query}`;
}

export const fetchRepoObjectsRequest = (repoName, type, branch, tailPath) => {
    return `${FETCH_REPO_OBJECTS}/${repoName}/${type}/metadata/${branch}/${tailPath}`;
}

export const fetchRepoCommitsRequest = (repoName, branch) => {
    return `${FETCH_REPO_COMMITS}/${repoName}/${branch}`;
}

export const fetchDiffRequest = (repoName, commitHash) => {
    return `${FETCH_DIFF}/${repoName}/${commitHash}`;
}
