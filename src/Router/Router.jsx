import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import UserCart from "../Pages/UserCart/UserCart";
import ForgetPassword from "../Pages/Authentication/ForgetPassword/ForgetPassword";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element:<Home/>
            },
            {
                path: "home",
                element:<Home/>
            },
            {
                path: "products",
                element:<Products/>
            },
            {
                path: "about",
                element:<About/>
            },
            {
                path: "contact",
                element:<Contact/>
            },
            {
                path: "my-cart",
                element:<UserCart/>
            },
            {
                path: "login",
                element:<Login/>
            },
            {
                path: "register",
                element:<Register/>
            },
            {
                path: "forget-password",
                element:<ForgetPassword/>
            }

        ]
    }
]) 