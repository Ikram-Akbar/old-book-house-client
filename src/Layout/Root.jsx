import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer />
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    );
};

export default Root;