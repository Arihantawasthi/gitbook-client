function HeroSection({ name, desc }) {
    return (
        <div className="flex gap-x-4">
            <div className="h-12 w-12">
                <img className="h-full w-full object-center object-cover" src="/public/icons/repo-icon-fill.png" />
            </div>
            <div>
                <h1 className="text-3xl font-bold row-span-1">{name}</h1>
                <p className="text-sm text-muted row-span-1">By Arihant</p>
                <p className="mt-4 leading-4 row-span-1">{desc}</p>
            </div>
        </div>
    );
}


export default HeroSection;
