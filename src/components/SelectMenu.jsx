import { useState } from "react";
import Dropdown from "./Dropdown";

function SelectMenu() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="relative flex items-center justify-between mt-8 p-2 max-w-36 bg-surface-bright text-on-surface rounded-md shadow-md cursor-pointer"
            onClick={() => setIsActive(prev => !prev)}
        >
            <div className="flex gap-x-2 items-center">
                <div className="h-6 w-6">
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/public/icons/commit-filled.png"
                    />
                </div>
                <p>master</p>
            </div>
            <div className="h-6 w-6">
                <img
                    className="h-full w-full object-center object-cover"
                    src="/public/icons/arrow-drop-down.png"
                />
            </div>
            {isActive ? <Dropdown /> : ""}
        </div>
    );
}


export default SelectMenu;
