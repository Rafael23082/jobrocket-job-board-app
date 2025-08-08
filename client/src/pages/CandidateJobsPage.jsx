import { useState } from "react";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Pagination from "../components/Pagination.jsx";
import DescriptionSlideOverPanel from "../components/DescriptionSlideOverPanel.jsx";
import ApplicationFormModal from "../components/ApplicationFormModal.jsx";

function CandidateJobsPage(){
    const [menuOpen, setMenuOpen] = useState(false);
    const {user} = useContext(UserContext);
    const [current, setCurrent] = useState("All");
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [applyIsOpen, setApplyIsOpen] = useState(false);
    const [jobOpened, setJobOpened] = useState({});

    const navigate = useNavigate();
    useEffect(() => {
        if (!user){
            navigate("/login");
        }

        if (detailsIsOpen){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [user, detailsIsOpen])
    
    return(
        <>
            <DashboardSideNavbar current={"Jobs"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="flex bg-[#fffcfc] overflow-hidden" style={{fontFamily: "'Roboto', sans-serif"}}>
                <DashboardSideNavbar placeholder={true} />
                <div className="flex-1 h-fit flex flex-col">
                    <div className="bg-blue-500 py-[1.2em] flex items-center justify-between px-5 z-10">
                        <div className="flex-1">
                            <IoMdMenu size={30} className="block lg:hidden cursor-pointer mr-10 margin-right" color="white" onClick={() => {setMenuOpen(!menuOpen)}} />
                        </div>
                        <div className="flex items-center">
                            <IoIosNotifications color="white" size={20} className="mr-[1.7em] cursor-pointer hover:brightness-90" />
                            <div className="w-8 h-8 rounded-full border border-white"></div>
                            <p className="text-white font-medium pl-[0.8em] text-[0.9rem]">{user?.name}</p>
                        </div>
                    </div>
                    <div className="mt-[2em]">
                        <div className="text-[0.9rem] mx-10 relative pb-[1em] relative z-10">
                            <p className="inline-block w-20 text-center cursor-pointer" onClick={() => setCurrent("All")}>All</p>
                            <p className="inline-block w-20 text-center cursor-pointer" onClick={() => setCurrent("Saved")}>Saved</p>
                            <p className="inline-block w-20 text-center cursor-pointer" onClick={() => setCurrent("Applications")}>Applied</p>
                            <div className={`absolute top-5 h-[3px] w-20 bg-blue-500 mt-[0.7em] ${current == "All" && "translate-x-0"} ${current == "Saved" && "translate-x-full"} ${current == "Applications" && "translate-x-[200%]"} transition-all duration-300`}></div>
                        </div>
                        <div className="flex">
                            <div className={`border-box overflow-x-hidden w-[100%] padding-x px-10 pt-[0.5em] pb-[2em]`}>
                                <Pagination category={"All"} jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} applyIsOpen={applyIsOpen} setApplyIsOpen={setApplyIsOpen} dashboard={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                detailsIsOpen && (
                    <DescriptionSlideOverPanel jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} />
                )
            }
            {
                applyIsOpen && (
                    <ApplicationFormModal jobOpened={jobOpened} setJobOpened={setJobOpened} applyIsOpen={applyIsOpen} setApplyIsOpen={setApplyIsOpen} />
                )
            }
        </>
    )
}

export default CandidateJobsPage;