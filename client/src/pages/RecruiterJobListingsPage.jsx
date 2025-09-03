import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../api/axios.js";
import Job from "../components/Job.jsx";
import { BarLoader } from "react-spinners";
import DescriptionSlideOverPanel from "../components/DescriptionSlideOverPanel.jsx";
import { IoIosAdd } from "react-icons/io";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

function RecruiterJobListingsPage(){
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [jobOpened, setJobOpened] = useState({})

    const {user} = useContext(UserContext);
    useEffect(() => {
        if (!user){ 
            navigate("/login");
        }
        if (detailsIsOpen){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        console.log(user);
    }, [user, detailsIsOpen])
    
    const fetchJobs = async() => {
        try{
            const res = await api.get(`/job/getJobsPostedByRecruiter/${user?._id}`);
            return res.data;
        }catch(err){
            console.log(err);
        }
    }

    const {data: allJobs = [], isLoading} = useQuery({
        queryKey: [user?._id, 'jobListing'],
        queryFn: () => fetchJobs(),
        enabled: !!user?._id,
        keepPreviousData: true
    })

    return(
        <>
            <DashboardSideNavbar current={"Job Listings"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="flex bg-[#fffcfc] overflow-hidden" style={{fontFamily: "'Roboto', sans-serif"}}>
                <DashboardSideNavbar placeholder={true} />
                <div className="flex-1 h-fit flex flex-col">
                    <DashboardNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <div className="padding-x px-10 my-[2em]">
                        <div className="flex flex-wrap justify-between items-center mt-5 gap-y-[1em]">
                            <p className="text-[1.25rem] font-medium block">My Job Listings</p>
                            <button className="bg-[#3B82F6] text-white pl-[1em] pr-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s] flex items-center gap-x-[0.3em]" onClick={() => navigate("/recruiter/add-job")}>
                                <IoIosAdd size={20} />
                                <p>Add Job</p>
                            </button>
                        </div>
                        <div className="my-[2em]">
                            {allJobs.map((job, index) => (
                                <div className="py-[1.5em] border-b border-gray-200" key={index}>
                                    <Job job={job} listings={true} jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} />
                                </div> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isLoading && (
                <div className={`w-[100%] h-[100vh] flex absolute top-0 bg-white left-0 justify-center items-center z-0`}>
                    <DashboardSideNavbar placeholder={true} />
                    <BarLoader
                        color={"#3B82F6"}
                        loading={isLoading}
                        height={4}
                        width={100}
                    />
                </div>
            )}
            {
                detailsIsOpen && (
                    <DescriptionSlideOverPanel jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} />
                )
            }
        </>
    )
}

export default RecruiterJobListingsPage;