import { wrap } from "./utils";

const goKeywords = new Set([
    "package", "import", "func", "return", "var", "const", "if", "else", "for",
    "switch", "case", "break", "struct", "interface", "type", "map", "range",
    "defer", "go", "select", "chan", "fallthrough", "continue", "goto", "nil",
    "true", "false", "make", "new", "append", "len", "cap", "copy", "delete",
    "panic", "recover"
]);

export function highlightGolang(code) {
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
                result += goKeywords.has(wordBuffer) ? wrap(wordBuffer, "keyword") : wordBuffer;
                wordBuffer = "";
            }
            result += char;
        } else {
            wordBuffer += char;
        }
    }

    if (wordBuffer) {
        result += goKeywords.has(wordBuffer) ? wrap(wordBuffer, "keyword") : wordBuffer;
    }

    return result;
}

