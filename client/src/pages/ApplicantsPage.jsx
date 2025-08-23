import { useParams } from "react-router-dom";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState, useContext, useEffect} from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ApplicantCard from "../components/ApplicantCard.jsx";
import { HiArrowLongLeft } from "react-icons/hi2";

function ApplicantsPage(){
    const {jobID} = useParams();
    const [menuOpen, setMenuOpen] = useState(false);
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user){
            navigate("/login");
        }
    }, [user])

    const fetchApplicants = async() => {
        let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/application/getJobApplicants/${jobID}`);
        return res.data;
    }

    const {data: applicants = []} = useQuery({
        queryKey: [jobID],
        queryFn: () => fetchApplicants(),
        keepPreviousData: true
    })

    return(
        <>
            <DashboardSideNavbar current={"Jobs"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="flex bg-[#fffcfc] overflow-hidden" style={{fontFamily: "'Roboto', sans-serif"}}>
                <DashboardSideNavbar placeholder={true} />
                <div className={`${applicants.length == 0 ? "min-h-screen": "h-fit"} flex-1 flex flex-col`}>
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
                    <div className={`padding-x px-10 my-[2em]`}>
                        <span className="flex cursor-pointer hover:underline items-center gap-x-[0.4em] text-blue-500" onClick={() => navigate("/recruiter/job-listings")}>
                            <HiArrowLongLeft color="#3B82F6" />
                            <p className="text-sm">Back to jobs</p>
                        </span>
                        <div className={`${applicants.length == 0 ? "pt-0": "pt-5"}`}>
                            {applicants?.map((applicant) => (
                                <ApplicantCard applicant={applicant} />
                            ))}
                        </div>
                    </div>
                    {applicants.length == 0 && (
                        <div className="w-[100%] grow flex justify-center items-center flex-col gap-y-[1.5em] pb-[2em]">
                            <img className="w-[70px]" src="/magnifying-glass.png" />
                            <p className="text-gray-500">No applicants to be displayed</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ApplicantsPage;