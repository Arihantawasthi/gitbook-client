import { wrap } from "./utils";

export function highlightCSS(code) {
    let result = "";
    let currentProperty = "";
    let insideProperty = false;
    let insideSelector = true;

    for (let i = 0; i < code.length; i++) {
        const char = code[i];

        if (char === "{") {
            result += wrap(currentProperty.trim(), "selector") + " " + wrap("{", "bracket");
            currentProperty = "";
            insideSelector = false;
            insideProperty = true;
        } else if (char === "}") {
            if (currentProperty.trim()) {
                result += wrap(currentProperty.trim(), "property");
            }
            result += " " + wrap("}", "bracket") + "\n";
            currentProperty = "";
            insideSelector = true;
            insideProperty = false;
        } else if (char === ":") {
            result += wrap(currentProperty.trim(), "property") + wrap(":", "operator");
            currentProperty = "";
        } else if (char === ";") {
            result += wrap(currentProperty.trim(), "value") + wrap(";", "operator") + "\n";
            currentProperty = "";
        } else {
            currentProperty += char;
        }
    }

    return result;
}

