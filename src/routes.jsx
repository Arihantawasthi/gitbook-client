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
        path: "repo/metadata/:repoName/:branch/*",
        element: <RepoContainer />
    },
    {
        path: "repo/tree/:repoName/:branch/*",
        element: <Tree />
    },
    {
        path: "repo/commits/:repoName/:branch",
        element: <Commits />
    }
]);


export default router;
