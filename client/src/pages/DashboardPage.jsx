import { UserContext } from "../context/UserContext.jsx";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import DashboardBox from "../components/DashboardBox.jsx";
import { FaPaperPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

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
        <DashboardSideNavbar current={"Dashboard"} />
        <div className="flex" style={{fontFamily: "'Roboto', sans-serif"}}>
            <DashboardSideNavbar placeholder={true} />
            <div className="flex-1 h-fit flex flex-col">
                <div className="bg-blue-500 py-[1.2em] flex items-center justify-end px-10 padding-x">
                    <IoIosNotifications color="white" size={20} className="mr-[1.7em] cursor-pointer hover:brightness-90" />
                    <div className="w-8 h-8 rounded-full border border-white"></div>
                    <p className="text-white font-medium pl-[0.8em] text-[0.9rem]">{user?.name}</p>
                </div>
                <div className="pt-[2em] pb-[5em] bg-blue-500 border-t border-white border-t-[0.1px]">
                    <p className="text-white pl-5 text-[1.25rem] font-medium">Dashboard</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[2em] px-5 gap-4">
                        <DashboardBox title={"JOBS APPLIED"} value={10} Icon={FaPaperPlane} />
                        <DashboardBox title={"JOBS SAVED"} value={10} Icon={FaHeart} />
                        <DashboardBox title={"RESPONSE TIME"} value={10} Icon={FaClock} />
                        <DashboardBox title={"PROFILE VIEWS"} value={10} Icon={FiEye} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )   
}

export default DashboardPage;