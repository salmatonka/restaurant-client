import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shares/NavBar/NavBar";
import Footer from "../Pages/Shares/Footer/Footer";


const Root = () => {
    const location  = useLocation();
    // console.log(location)
    const noHeaderFooter = location.pathname.includes('logIn')
    return (
        <div>
            {
                noHeaderFooter || <NavBar />
            }
           <Outlet /> 
           {
            noHeaderFooter || <Footer />
           }
        </div>
    );
};

export default Root;