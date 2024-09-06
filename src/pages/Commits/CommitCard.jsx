import { calculatedDeletionBoxes } from "../../utils";


function CommitCard({ commitObject }) {
    const deletionBoxes = calculatedDeletionBoxes(commitObject.insertions, commitObject.deletions);
    const insertionBoxes = 6 - deletionBoxes;

    const renderBoxes = (range, color) => {
        const boxes = [];
        for (let i = 0; i < range; i++) {
            boxes.push(<div key={i} className={`h-2 w-2 ${color}`}></div>)
        }
        return boxes;
    }

    return (
        <>
            <div className="p-4 bg-surface-container rounded-t-2xl shadow-lg">
                <p className="text-lg font-bold">{ commitObject.commit_message }</p>
                <p className="text-sm">By { commitObject.commit_author }</p>
                <div className="mt-4 w-[40%] max-w-[60%]">
                    <CardStatInfo value={commitObject.files_changed} label="Files Changed" />
                    <CardStatInfo value={commitObject.deletions} label="Deletions (--)" color="text-red-500" />
                    <CardStatInfo value={commitObject.insertions} label="Insertions (+)" color="text-green-500" />
                </div>
                <div className="mt-2 flex justify-end items-center gap-x-1">
                    {renderBoxes(insertionBoxes, "bg-green-500")}
                    {renderBoxes(deletionBoxes, "bg-red-500")}
                </div>
            </div>
            <p className="px-3 py-2 text-sm bg-outline rounded-b-2xl">Timestamp: { commitObject.commit_timestamp }</p>
            <CommitSign />
        </>
    );
}


function CardStatInfo({ value, label, color="" }) {
    return (
        <p className="flex justify-between">
            <span className={`text-lg font-bold ${color}`}>{ value }</span>
            { label }
        </p>
    );
}


function CommitSign() {
    return (
        <div className="ml-4 flex flex-col items-center w-4">
            <div className="w-1 rounded-t-2xl h-6 bg-primary"></div>
            <div className="w-4 h-4 rounded-full bg-primary"></div>
            <div className="w-1 rounded-b-2xl h-6 bg-primary"></div>
        </div>
    );
}


export default CommitCard;
