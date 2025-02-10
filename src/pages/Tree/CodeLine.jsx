import { highlightCode } from "../../helpers/synlight";
import useExtractLanguage from "../../hooks/useExtractLanguage";

function CodeLine({ lineNumber, lineContent, lineNumberWidth }) {
    const lang = useExtractLanguage();

    return (
        <div className="flex font-display w-full">
            <p className={`bg-surface-container w-[${lineNumberWidth}] text-center select-none`}>{ lineNumber }</p>
            <pre className="w-full bg-code">
                <code
                    className="text-sm pl-2 w-full text-wrap whitespace-break-spaces language-xml"
                    dangerouslySetInnerHTML={{
                        __html: highlightCode(lineContent, lang),
                    }}
                ></code>
            </pre>
        </div>
    );
}

export default CodeLine;
