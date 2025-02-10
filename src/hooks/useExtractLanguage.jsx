import { useLocation } from "react-router-dom";

function useExtractLanguage() {
    const location = useLocation();
    let language = ""

    const url = location.pathname;
    const parts = url.split("/");
    const lastParts = parts[parts.length - 1];

    if (lastParts.includes(".")) {
        const ext = lastParts.split(".").pop();
        const langMap = {
            py: "python",
            go: "golang",
            html: "html",
            css: "css",
            js: "javascript"
        };
        language = langMap[ext] || "unknown";
    } else {
        language = "unknown";
    }

    return language;
}

export default useExtractLanguage;
