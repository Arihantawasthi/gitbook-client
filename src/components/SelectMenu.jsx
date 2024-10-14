import { useState } from "react";


function SelectMenu({ children, selectedValue}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="relative flex items-center justify-between p-2 max-w-36 bg-surface-container text-on-surface rounded-xl shadow-md cursor-pointer"
            onClick={() => setIsActive(prev => !prev)}
        >
            <div className="flex gap-x-2 items-center">
                <div className="h-6 w-6">
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/public/icons/commit-filled.png"
                    />
                </div>
                <p>{ selectedValue }</p>
            </div>
            <div className="h-6 w-6">
                <img
                    className="h-full w-full object-center object-cover"
                    src="/public/icons/arrow-drop-down.png"
                />
            </div>
            {isActive && (
                <div className="absolute top-12 right-0 min-w-48 z-10 rounded-xl border border-outline">
                    { children }
                </div>
            )}
        </div>
    );
}

function Option({ item, onClick }) {
    return (
        <div
            className="flex p-3 gap-x-4 items-center bg-surface-container text-on-surface border-b border-outline first:rounded-t-xl last:border-none last:rounded-b-xl cursor-pointer"
            onClick={() => onClick(item)}
        >
            <div className="h-6 w-6">
                <img
                    className="h-full w-full object-center object-cover"
                    src="/public/icons/commit-filled.png"
                />
            </div>
            <p>{ item }</p>
        </div>
    );
}


export { SelectMenu, Option };
