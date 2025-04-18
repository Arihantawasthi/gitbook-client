import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout"

function NotFound () {
    const navigate = useNavigate();

    const goBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/");
        }
    }
    return (
        <Layout>
            <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2">
                <h1 className="text-6xl font-bold">4 0 4</h1>
                <p className="text-3xl font-semibold mt-4">Oops, Page Not Found!</p>
                <p className="mt-2 text-xl font-thin">Sorry, I don&apos;t know what place is this.</p>
                <p className="underline mt-8 cursor-pointer" onClick={goBack}>Go Back</p>
            </div>
        </Layout>
    )
}

export default NotFound;
