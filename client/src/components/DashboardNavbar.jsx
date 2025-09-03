import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import api from "../api/axios.js";

function DashboardNavbar({menuOpen, setMenuOpen}){
    const [logoutOpened, setLogoutOpened] = useState(false);
    const navigate = useNavigate();

    const {user} = useContext(UserContext);

    const handleLogout = async() => {
        navigate("/");
        await api.post(`/user/logout`, {})
    }

    return(
        <div className="bg-blue-500 py-[1.2em] flex items-center justify-between px-5 w-[100%] z-[9999]">
            <div>
                {menuOpen ? (
                    <IoClose size={30} className="block lg:hidden cursor-pointer mr-10 margin-right" color="white" onClick={() => {setMenuOpen(!menuOpen)}} />
                ): (
                    <IoMdMenu size={30} className="block lg:hidden cursor-pointer mr-10 margin-right" color="white" onClick={() => {setMenuOpen(!menuOpen)}} />
                )}
            </div>
            <div className="flex items-center flex-1 justify-end">
                <div className="w-8 h-8 rounded-full border border-white cursor-pointer relative flex-shrink-0" onClick={() => setLogoutOpened(!logoutOpened)}>
                    {logoutOpened && (
                        <div className="absolute top-[100%] right-0 bg-white p-[1em] text-sm flex items-center gap-x-[0.6em] text-red-500 rounded-[5px] mt-[1em] shadow" onClick={handleLogout}>
                            <IoLogOut />
                            <p>Logout</p>
                        </div>
                    )}
                </div>
                <div className="pl-[0.8em]">
                    <p className="text-white font-medium text-[0.9rem] max-w-[100px] sm:max-w-none truncate">{user?.name}</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardNavbar;