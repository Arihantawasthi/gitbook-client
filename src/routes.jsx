import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RepoContainer from "./pages/Repo";
import Tree from "./pages/Tree";
import Commits from "./pages/Commits";
import Diff from "./pages/Diff";
import Repos from "./pages/Repos";
import NotFound from "./pages/404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/repos",
        element: <Repos />
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
    },
    {
        path: "/commit/:repoName/:commitHash",
        element: <Diff />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);


export default router;
