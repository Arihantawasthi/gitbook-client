import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RepoContainer from "./pages/Repo";
import Tree from "./pages/Tree";
import Commits from "./pages/Commits";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "repo/:repoName/:branch",
        element: <RepoContainer />
    },
    {
        path: "repo/:repoName/tree",
        element: <Tree />
    },
    {
        path: "repo/:repoName/commits",
        element: <Commits />
    }
]);


export default router;
