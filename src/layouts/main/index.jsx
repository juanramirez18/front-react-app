import react from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../../components/Footer";
import NavBarComponent from "../../components/NavBar";

const MainLayout = ()=> {
    return(
        <>
        <NavBarComponent/>
            <Outlet/>
            <FooterComponent/>
        

        </>
    )
};

export default MainLayout