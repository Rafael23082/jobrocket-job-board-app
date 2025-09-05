import { useEffect, useState } from "react";
import DashboardPageTemplate from "../components/DashboardPageTemplate.jsx";
import { FaPaperPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import api from "../api/axios.js";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";

function CandidateDashboardPage(){
    const {user} = useContext(UserContext);

    const fetchCandidateDashboardData = async() => {
        const res = await api.get(`/user/fetchCandidateDashboardData/${user?._id}`);
        return res.data;
    }

    const {data, isLoading} = useQuery({
        queryKey: ["candidateDashboard", user?._id],
        queryFn: () => fetchCandidateDashboardData(),
        keepPreviousData: true,
        enabled: !!user?._id
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
                box1={"JOBS APPLIED"} Box1Icon={FaPaperPlane} box1Value={data?.applicationCount} box2={"JOBS SAVED"} Box2Icon={FaHeart} box2Value={data?.savedJobsCount} box3={"PROFILE PROGRESS"} Box3Icon={FaClock} 
                box3Value={data?.profileProgress}
                lineChartInfo={{
                    title: "Applications overtime",
                    dataset: data?.applicationOvertimeData,
                    dataKeys: ["Applications"]
                }}
                barChartInfo={{
                    title: "Saved jobs per category",
                    dataset: data?.jobCategoryData,
                    dataKeys: ["value"]
                }}
                pieChartInfo={{ 
                    title: "Applications status",
                    dataset: data?.applicationStatusData ,
                    dataKey: "value",
                    nameKey: "name"
                }}
            /> 
        </>
    )   
}

export default CandidateDashboardPage;