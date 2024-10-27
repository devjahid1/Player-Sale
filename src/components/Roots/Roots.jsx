import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Foorer from "../Footer/Foorer";

const Roots = () => {
    return (
        <div>
            <div className="lg:w-[1320px] m-auto">
            <Nav/>
            <Header/>
            
            </div>
            <Outlet/>
            <Foorer/>
        </div>
    );
};

export default Roots;