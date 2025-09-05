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
import api from "../api/axios.js";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

function CandidateJobsPage(){
    const [menuOpen, setMenuOpen] = useState(false);
    const {user} = useContext(UserContext);
    const [category, setCategory] = useState("All");
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [applyIsOpen, setApplyIsOpen] = useState(false);
    const [jobOpened, setJobOpened] = useState({});

    const navigate = useNavigate();
    useEffect(() => {
        if (!user){
            navigate("/login");
        }

        if (detailsIsOpen || applyIsOpen){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [user, detailsIsOpen, applyIsOpen])
    
    const fetchJobs = async() => {
        let res;
        let filteredJobs;
        if (category == "All"){
            res = await api.get(`/job/getNotAppliedJobs/${user._id}`)
            filteredJobs = res.data;
        } else if (category == "Saved"){
            res = await api.get(`/job/getSavedJobs/${user._id}`)
            filteredJobs = res.data;
        } else if (category == "Applications"){
            res = await api.get(`/job/getAppliedJobs/${user._id}`)
            filteredJobs = res.data;
        }
        return filteredJobs;
    }

    const {data: allJobs = [], refetch, isLoading} = useQuery({
        queryKey: ["candidateJobsPage", category],
        queryFn: () => fetchJobs(),
        keepPreviousData: true
    })

    return(
        <>
            <DashboardSideNavbar current={"Jobs"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="flex bg-[#fffcfc] overflow-hidden" style={{fontFamily: "'Roboto', sans-serif"}}>
                <DashboardSideNavbar placeholder={true} />
                <div className={`${allJobs.length == 0 ? "min-h-screen": "h-fit"} flex-1 flex flex-col`}>
                    <DashboardNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <div className="my-[2em]">
                        <div className="text-[0.9rem] mx-10 relative pb-[1em] relative z-10">
                            <p className="inline-block w-20 text-center cursor-pointer" onClick={() => setCategory("All")}>All</p>
                            <p className="inline-block w-20 text-center cursor-pointer" onClick={() => setCategory("Saved")}>Saved</p>
                            <p className="inline-block w-20 text-center cursor-pointer" onClick={() => setCategory("Applications")}>Applied</p>
                            <div className={`absolute top-5 h-[3px] w-20 bg-blue-500 mt-[0.7em] ${category == "All" && "translate-x-0"} ${category == "Saved" && "translate-x-full"} ${category == "Applications" && "translate-x-[200%]"} transition-all duration-300`}></div>
                        </div>
                        <div className={`${allJobs.length == 0 ? "hidden": "flex"}`}>
                            <div className={`border-box overflow-x-hidden w-[100%] padding-x px-10 pt-[0.5em]`}>
                                <Pagination data={allJobs} field={category} jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} applyIsOpen={applyIsOpen} setApplyIsOpen={setApplyIsOpen} dashboard={true} refetch={refetch} />
                            </div>
                        </div>
                    </div>
                    {allJobs.length == 0 && (
                        <div className="w-[100%] grow flex justify-center items-center flex-col gap-y-[1.5em] pb-[2em]">
                            <img className="w-[70px]" src="/magnifying-glass.png" />
                            <p className="text-gray-500">No jobs to be displayed</p>
                        </div>
                    )}
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
            {isLoading && (
                <div className={`w-[100%] min-h-[100vh] flex absolute top-0 bg-white left-0 items-center z-0`}>
                    <DashboardSideNavbar placeholder={true} />
                    <div className="flex grow justify-center">
                        <BarLoader
                            color={"#3B82F6"}
                            loading={isLoading}
                            height={4}
                            width={100}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default CandidateJobsPage;