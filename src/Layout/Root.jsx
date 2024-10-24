import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;