import { wrap } from "./utils";

const jsKeywords = new Set([
    "const", "let", "var", "function", "return", "if", "else", "switch", "case",
    "break", "for", "while", "do", "continue", "new", "this", "class", "extends",
    "super", "import", "export", "default", "try", "catch", "finally", "throw",
    "async", "await", "yield", "typeof", "instanceof", "void", "true", "false",
    "null", "undefined"
]);

export function highlightJavaScript(code) {
    let result = "";
    let wordBuffer = "";
    let inString = false;
    let inComment = false;

    for (let i = 0; i < code.length; i++) {
        const char = code[i];

        if (char === "/" && code[i + 1] === "/") {
            if (wordBuffer) {
                result += wordBuffer;
                wordBuffer = "";
            }
            inComment = true;
            result += wrap("//", "comment");
            i++;
        } else if (char === "\n") {
            inComment = false;
            result += char;
        } else if (inComment) {
            result += wrap(char, "comment");
        } else if (char === '"' || char === "'") {
            if (wordBuffer) {
                result += wordBuffer;
                wordBuffer = "";
            }
            inString = !inString;
            result += wrap(char, "string");
        } else if (inString) {
            result += wrap(char, "string");
        } else if (char === " " || char === "\t") {
            if (wordBuffer) {
                result += jsKeywords.has(wordBuffer) ? wrap(wordBuffer, "keyword") : wordBuffer;
                wordBuffer = "";
            }
            result += char;
        } else {
            wordBuffer += char;
        }
    }

    if (wordBuffer) {
        result += jsKeywords.has(wordBuffer) ? wrap(wordBuffer, "keyword") : wordBuffer;
    }

    return result;
}

