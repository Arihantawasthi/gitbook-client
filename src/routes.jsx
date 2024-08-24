import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Repo from "./pages/Repo";
import Tree from "./pages/Tree";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "repo/:repoName",
        element: <Repo />
    },
    {
        path: "repo/:repoName/tree",
        element: <Tree />
    }
]);


export default router;
