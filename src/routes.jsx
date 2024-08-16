import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Repo from "./pages/Repo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "repo/:repoName",
        element: <Repo />
    }
]);


export default router;
