import Error from "../../components/Error";
import CodeLine from "./CodeLine";
import { getLineNumberWidth } from "../../utils";


const RenderView = ({ path, blob }) => {
    let ext = path.split(".");
    ext = ext[ext.length-1].toLowerCase();
    if (ext === 'png' || ext === 'jpeg' || ext === 'jpg' || ext === 'gif') {
        return (
            <div className="h-96 w-full flex items-center justify-center">
                <Error message={"Media files are not supported!"} />
            </div>
        )
    }

    const codelines = blob.map((item, idx) =>
        <CodeLine
            key={idx}
            lineNumber={idx+1}
            lineContent={item}
            lineNumberWidth={getLineNumberWidth(blob.length)}
        />
    );
    return codelines;
}

export default RenderView;
