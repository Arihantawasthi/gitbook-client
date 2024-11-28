function Header() {
    return (
        <div className="flex gap-x-2 items-center bg-surface-container px-4 py-3 cursor-pointer">
            <div className="h-8 w-8">
                <img
                    className="h-full w-full object-center object-cover"
                    src="/public/gitbook-logos/gitbook-logo.png"
                    alt="logo"
                />
            </div>
            <p className="uppercase text-xl text-on-surface font-display font-bold tracking-wide">Gitbook</p>
        </div>
    );
}


export default Header;
