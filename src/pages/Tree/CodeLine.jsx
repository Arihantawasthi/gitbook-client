function CodeLine({ lineNumber, lineContent, lineNumberWidth }) {
    return (
        <div className="flex font-display">
            <p className={`bg-surface-container w-[${lineNumberWidth}] text-center select-none`}>{ lineNumber }</p>
            <code className="text-sm pl-2 bg-code w-full text-wrap whitespace-break-spaces">{ lineContent }</code>
        </div>
    );
}

export default CodeLine;
