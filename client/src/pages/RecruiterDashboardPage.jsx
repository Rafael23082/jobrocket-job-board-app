import DashboardPageTemplate from "../components/DashboardPageTemplate.jsx";
import { FaPaperPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useState, useEffect } from "react";
import api from "../api/axios.js";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";

function RecruiterDashboardPage(){
    const {user} = useContext(UserContext);

    const fetchCandidateDashboardData = async() => {
        const res = await api.get(`/user/fetchRecruiterDashboardData/${user?._id}`);
        return res.data;
    }
    
    const {data, isLoading} = useQuery({
        queryKey: [user],
        queryFn: () => fetchCandidateDashboardData(),
        keepPreviousData: true
    })

    return(
        <> 
            {isLoading && (
                <div className={`w-[100%] min-h-[100vh] flex absolute top-0 bg-white left-0 items-center z-[9998]`}>
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
            <DashboardPageTemplate 
                box1={"JOBS POSTED"} Box1Icon={FaPaperPlane} box1Value={data?.jobPostedCount} box2={"TOTAL APPLICANTS"} Box2Icon={FaHeart} box2Value={data?.totalApplicants} box3={"APPLICATIONS PER JOB (AVG)"} Box3Icon={FaClock} box3Value={data?.applicantsPerJob}
                lineChartInfo={{
                    title: "Applicants overtime",
                    dataset: data?.applicationOvertimeData,
                    dataKeys: ["Applicants"]
                }}
                barChartInfo={{
                    title: "Posted jobs per category",
                    dataset: data?.jobCategoryData,
                    dataKeys: ["value"]
                }}
                pieChartInfo={{ 
                    title: "Applicants status",
                    dataset: data?.applicantsStatusData,
                    dataKey: "value",
                    nameKey: "name"
                }}
            /> 
        </>
    )   
}

export default RecruiterDashboardPage;