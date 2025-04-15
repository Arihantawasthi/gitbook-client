import { Link } from "react-router-dom";

function Header() {
    return (
        <Link
            to={"/"}
            className="flex gap-x-2 items-center bg-surface-container px-4 py-3 cursor-pointer"
        >
            <div className="h-8 w-8">
                <img
                    className="h-full w-full object-center object-cover"
                    src="/gitbook-logos/gitbook-logo.png"
                    alt="logo"
                />
            </div>
            <p className="uppercase text-xl text-on-surface font-display font-bold tracking-wide">Gitbook</p>
        </Link>
    );
}


export default Header;
