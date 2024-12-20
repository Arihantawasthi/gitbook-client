function DiffFileBlock({ object }) {
    return (
        <div className="bg-code rounded-2xl">
            <div className="p-4 rounded-t-2xl bg-surface-container">
                <div className="underline">{ object.file_path }</div>
            </div>
            <div className="p-4">
                { object.code_lines.map((line, idx) => <DiffLine key={idx} line={ line } />) }
            </div>
        </div>
    )
}

function DiffLine({ line }) {
    const added = line.startsWith("+")
    const deleted = line.startsWith('-')

    return (
        <div className={`${added && 'text-green-400'} ${deleted && 'text-error'}`}>
            { line }
        </div>
    )
}


export default DiffFileBlock;
