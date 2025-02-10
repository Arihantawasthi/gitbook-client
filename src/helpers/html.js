import { wrap } from "./utils";

export default function highlightHTML(code) {
    let result = "";
    let inTag = false;
    let inString = false;
    let tagBuffer = "";
    let attrBuffer = "";
    let currentAttr = "";
    let isAttribute = false;

    for (let i = 0; i < code.length; i++) {
        const char = code[i];

        if (char === "<") {
            inTag = true;
            result += wrap(char, "tag"); // Wrap `<`
        } else if (char === ">") {
            inTag = false;
            if (tagBuffer.trim()) {
                result += wrap(tagBuffer.trim(), "tag");
                tagBuffer = "";
            }
            result += wrap(char, "tag"); // Wrap `>`
        } else if (inTag) {
            if (char === " " && !isAttribute) {
                result += wrap(tagBuffer.trim(), "tag") + " ";
                tagBuffer = "";
                isAttribute = true;
            } else if (char === "=" && isAttribute) {
                currentAttr = tagBuffer.trim();
                result += wrap(currentAttr, "attribute") + "=";
                tagBuffer = "";
            } else if (char === '"' || char === "'") {
                if (inString) {
                    inString = false;
                    result += wrap(attrBuffer + char, "string");
                    attrBuffer = "";
                } else {
                    inString = true;
                    attrBuffer += char;
                }
            } else {
                if (inString) {
                    attrBuffer += char;
                } else {
                    tagBuffer += char;
                }
            }
        } else {
            result += char;
        }
    }

    return result;
}
