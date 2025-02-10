import { highlightCSS } from "./css";
import { highlightGolang } from "./golang";
import highlightHTML from "./html";
import { highlightJavaScript } from "./javascript";
import { highlightPython } from "./python";

export function highlightCode(code, language) {
    switch(language.toLowerCase()) {
        case "html":
            return highlightHTML(code);
        case "python":
            return highlightPython(code);
        case "golang":
            return highlightGolang(code);
        case "css":
            return highlightCSS(code);
        case "javascript":
            return highlightJavaScript(code);
        default:
            return code;
    }
}
