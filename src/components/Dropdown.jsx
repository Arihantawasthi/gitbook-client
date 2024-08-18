function Dropdown() {
    return (
        <div className="absolute top-12 right-0 min-w-48 z-10 rounded-lg shadow-lg">
            <DropdownItem />
            <DropdownItem />
            <DropdownItem />
        </div>
    );
}


function DropdownItem() {
    return (
        <div className="flex p-3 gap-x-4 items-center bg-surface-bright text-on-surface border-b border-b-outline first:rounded-t-xl last:border-none last:rounded-b-xl cursor-pointer">
            <div className="h-6 w-6">
                <img className="h-full w-full object-center object-cover" src="/public/icons/commit-filled.png" />
            </div>
            <p>feat/hello</p>
        </div>
    );
}


export default Dropdown;
