function Dropdown() {
    return (
        <div className="absolute top-12 left-0 min-w-48 rounded-lg">
            <DropdownItem />
            <DropdownItem />
            <DropdownItem />
        </div>
    );
}


function DropdownItem() {
    return (
        <div className="flex p-3 gap-x-4 items-center bg-surface-bright text-on-surface border-b border-b-outline first:rounded-t-lg last:border-none last:rounded-b-lg cursor-pointer">
            <div className="h-6 w-6">
                <img className="h-full w-full object-center object-cover" src="/public/icons/commit-filled.png" />
            </div>
            <p>feat/hello</p>
        </div>
    );
}


export default Dropdown;
