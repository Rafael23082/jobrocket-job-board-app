import { useParams } from "react-router-dom";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState, useContext, useEffect} from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js";
import { useQuery } from "@tanstack/react-query";
import ApplicantCard from "../components/ApplicantCard.jsx";
import { HiArrowLongLeft } from "react-icons/hi2";
import { BarLoader } from "react-spinners";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

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
        let res = await api.get(`/application/getJobApplicants/${jobID}`);
        return res.data;
    }

    const {data: applicants = [], refetch, isLoading} = useQuery({
        queryKey: ['applicants', jobID],
        queryFn: () => fetchApplicants(),
        keepPreviousData: true,
        enabled: !!jobID
    })

    return(
        <>
            <DashboardSideNavbar current={"Jobs"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="flex bg-[#fffcfc] overflow-hidden" style={{fontFamily: "'Roboto', sans-serif"}}>
                <DashboardSideNavbar placeholder={true} />
                <div className={`${applicants.length == 0 ? "min-h-screen": "h-fit"} flex-1 flex flex-col`}>
                    <DashboardNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <div className={`padding-x px-10 my-[2em]`}>
                        <span className="flex cursor-pointer hover:underline items-center gap-x-[0.4em] text-blue-500" onClick={() => navigate("/recruiter/job-listings")}>
                            <HiArrowLongLeft color="#3B82F6" />
                            <p className="text-sm">Back to jobs</p>
                        </span>
                        <div className={`${applicants.length == 0 ? "pt-0": "pt-5"}`}>
                            {applicants?.map((applicant) => (
                                <ApplicantCard applicant={applicant} jobID={jobID} refetch={refetch} />
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

export default ApplicantsPage;