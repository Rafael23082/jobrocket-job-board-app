import { UserContext } from "../context/UserContext.jsx";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";

function DashboardPage(){
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user){
            navigate("/login");
        }
    }, [user])

    return(
        <>
        <DashboardSideNavbar />
        <div className="flex">
            <div className="flex-1">
                <div className="bg-blue-500 py-[1.2em] flex items-center justify-end px-10 padding-x" style={{fontFamily: "'Roboto', sans-serif"}}>
                    <IoIosNotifications color="white" size={20} className="mr-[1.7em] cursor-pointer hover:brightness-90" />
                    <div className="w-8 h-8 rounded-full border border-white"></div>
                    <p className="text-white font-medium pl-[0.8em] text-[0.9rem]">{user?.name}</p>
                </div>
            </div>
        </div>
        </>
    )   
}

export default DashboardPage;