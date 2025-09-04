import { FiMonitor } from "react-icons/fi";
import { FaBookBookmark } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";

function DashboardSideNavbar({current, placeholder, menuOpen, setMenuOpen}){
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    return(        
        <>
        <div className={`${placeholder && "invisible hidden lg:block relative"} hidden lg:flex flex-col fixed w-fit pb-[1em] h-[100vh] top-0 left-0 bg-white justify-between overflow-y-auto shadow z-[9999]`} style={{fontFamily: "'Roboto', sans-serif"}}>
            <div className="flex flex-col text-[0.9rem]">
                <p className="text-[1.5rem] font-bold text-[#3B82F6] select-none pt-[1em] px-[2.5em]" style={{fontFamily: "'Raleway', sans-serif"}}>JobRocket</p>
                <div className={`mt-[3em] py-[1em] mx-[0.5em] ${current == "Dashboard" ? "bg-gray-100": "bg-white text-gray-500"} rounded-[5px] pl-[1em] cursor-pointer flex items-center gap-x-[0.8em]`} onClick={() => {navigate(`/${user?.role?.toLowerCase()}/dashboard`)}}><FiMonitor size={16} color="#3B82F6" /> Dashboard</div>
                <div className={`py-[1em] mx-[0.5em] pl-[1em] ${current == "Jobs" || current == "Job Listings" ? "bg-gray-100": "bg-white text-gray-500"} cursor-pointer rounded-[5px] flex items-center gap-x-[0.8em]`} onClick={() => {
                    if (user?.role?.toLowerCase() == "candidate"){
                        navigate("/candidate/jobs")
                    }else if (user?.role?.toLowerCase() == "recruiter"){
                        navigate("/recruiter/job-listings");
                    }
                }}><FaBookBookmark size={16} color="#FF8C00" /> {user?.role?.toLowerCase() == "candidate" ? "Jobs": "Job Listings"}</div>
            </div>
            <div className={`py-[1em] text-[0.9rem] mx-[0.5em] pl-[1em] ${current == "Settings" ? "bg-gray-100": "bg-white text-gray-500"} rounded-[5px] cursor-pointer flex items-center gap-x-[0.8em]`} onClick={() => navigate(`/${user?.role?.toLowerCase()}/profile`)}><IoSettings size={16} color="#000000" /> Settings</div>
        </div>

        <div className={`flex flex-col lg:hidden fixed w-[100%] pb-[1em] h-[100vh] top-0 left-0 ${menuOpen ? "translate-x-0": "-translate-x-full"} transition-transform ease duration-300 lg:translate-x-0 bg-white justify-between overflow-y-auto shadow z-[9999]`} style={{fontFamily: "'Roboto', sans-serif"}}>
            <IoClose className="absolute cursor-pointer right-7 top-7 lg:hidden" size={30} onClick={() => setMenuOpen(!menuOpen)} />
            <div className="flex flex-col text-[0.9rem]">
                <p className="text-[1.5rem] font-bold text-[#3B82F6] select-none pt-[1em] px-[2.5em]" style={{fontFamily: "'Raleway', sans-serif"}}>JobRocket</p>
                <div className={`mt-[3em] py-[1em] mx-[0.5em] ${current == "Dashboard" ? "bg-gray-100": "bg-white text-gray-500"} rounded-[5px] pl-[1em] cursor-pointer flex items-center gap-x-[0.8em]`} onClick={() => {navigate(`/${user?.role?.toLowerCase()}/dashboard`)}}><FiMonitor size={16} color="#3B82F6" /> Dashboard</div>
                <div className={`py-[1em] mx-[0.5em] pl-[1em] ${current == "Job Listings" ? "bg-gray-100": "bg-white text-gray-500"} cursor-pointer rounded-[5px] flex items-center gap-x-[0.8em]`} onClick={() => {
                    if (user?.role?.toLowerCase() == "candidate"){
                        navigate("/candidate/jobs")
                    }else if (user?.role?.toLowerCase() == "recruiter"){
                        navigate("/recruiter/job-listings");
                    }
                }}><FaBookBookmark size={16} color="#FF8C00" /> {user?.role?.toLowerCase() == "candidate" ? "Jobs": "Job Listings"}</div>
            </div>
            <div className={`py-[1em] text-[0.9rem] mx-[0.5em] pl-[1em] ${current == "Settings" ? "bg-gray-100": "bg-white text-gray-500"} rounded-[5px] cursor-pointer flex items-center gap-x-[0.8em]`} onClick={() => {navigate(`/${user?.role?.toLowerCase()}/profile`)}}><IoSettings size={16} color="#000000" /> Settings</div>
        </div>
    </>
    )
}

export default DashboardSideNavbar;