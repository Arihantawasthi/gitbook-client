import Header from "./Header";

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="px-4 my-10">
                { children }
            </div>
        </>
    );
}


export default Layout;
