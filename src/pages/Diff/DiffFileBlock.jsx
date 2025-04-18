import { useNavigate } from "react-router-dom"

function DiffFileBlock({ object }) {
    const navigate = useNavigate();

    const goBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        }
    }

    return (
        <>
            <div
                className="h-8 w-8 cursor-pointer"
                onClick={goBack}
            >
                <img
                    className="h-full w-full object-center object-cover"
                    src="/icons/arrow-back.png"
                />
            </div>
            <div className="bg-code rounded-2xl">
                <div className="p-4 rounded-t-2xl bg-surface-container">
                    <div className="underline">{ object.file_path }</div>
                </div>
                <div className="p-4">
                    { object.code_lines.map((line, idx) => <DiffLine key={idx} line={ line } />) }
                </div>
            </div>
        </>
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
