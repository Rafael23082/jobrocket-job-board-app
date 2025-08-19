import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Job from "../components/Job.jsx";
import { BarLoader } from "react-spinners";

function RecruiterJobListingsPage(){
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const {user} = useContext(UserContext);
    useEffect(() => {
        if (!user){ 
            navigate("/login");
        }
    }, [user])

    const fetchJobs = async() => {
        try{
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getJobsPostedByRecruiter/${user._id}`);
            return res.data;
        }catch(err){
            console.log(err);
        }
    }

    const {data: allJobs = [], isLoading} = useQuery({
        queryKey: [user],
        queryFn: () => fetchJobs(),
        keepPreviousData: true
    })

    return(
        <>
            <DashboardSideNavbar current={"Job Listings"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
                    <div className="padding-x px-10 my-[2em]">
                        {allJobs.map((job, index) => (
                            <div className="py-[1.5em] border-b border-gray-200" key={index}>
                                <Job job={job} listings={true} />
                            </div> 
                        ))}
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
        </>
    )
}

export default RecruiterJobListingsPage;