import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/HomePages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Oder from "../Pages/Oder/Oder";
import LogIn from "../Pages/Forms/LogIn";
import Register from "../Pages/Forms/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: < Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Oder />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            }
        ]
    }
])