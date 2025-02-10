import { wrap } from "./utils";

const pythonKeywords = new Set([
    "def", "return", "if", "elif", "else", "while", "for", "break", "continue", "class",
    "import", "from", "as", "try", "except", "finally", "raise", "lambda", "with", "yield",
    "True", "False", "None", "global", "nonlocal", "assert", "async", "await", "pass"
]);

export function highlightPython(code) {
    let result = "";
    let wordBuffer = "";
    let inString = false;
    let inComment = false;

    for (let i = 0; i < code.length; i++) {
        const char = code[i];

        if (char === "#") {
            if (wordBuffer) {
                result += wordBuffer;
                wordBuffer = "";
            }
            inComment = true;
            result += wrap(char, "comment");
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
                result += pythonKeywords.has(wordBuffer) ? wrap(wordBuffer, "keyword") : wordBuffer;
                wordBuffer = "";
            }
            result += char;
        } else {
            wordBuffer += char;
        }
    }

    if (wordBuffer) {
        result += pythonKeywords.has(wordBuffer) ? wrap(wordBuffer, "keyword") : wordBuffer;
    }

    return result;
}

