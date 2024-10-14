import Header from "./Header";

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="mx-auto px-4 my-10 md:w-[90%] lg:w-3/4">
                { children }
            </div>
        </>
    );
}


export default Layout;
