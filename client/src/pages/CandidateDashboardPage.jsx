import { useEffect, useState } from "react";
import DashboardPageTemplate from "../components/DashboardPageTemplate.jsx";
import { FaPaperPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import axios from "axios";

function CandidateDashboardPage(){
    const {user} = useContext(UserContext);
    const [data, setData] = useState({});
    useEffect(() => {
        if (!user?._id) return;

        const fetchCandidateDashboardData = async() => {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/fetchCandidateDashboardData/${user?._id}`, {withCredentials: true});
            setData(res.data);
        }
        fetchCandidateDashboardData();
    }, [user])

    return(
        <> 
            <DashboardPageTemplate 
                box1={"JOBS APPLIED"} Box1Icon={FaPaperPlane} box1Value={data.applicationCount} box2={"JOBS SAVED"} Box2Icon={FaHeart} box2Value={data.savedJobsCount} box3={"PROFILE PROGRESS"} Box3Icon={FaClock} 
                box3Value={data.profileProgress}
                lineChartInfo={{
                    title: "Applications overtime",
                    dataset: [
                                {name: "Q1", product1: 1, product2: 4},
                                {name: "Q2", product1: 3, product2: 9},
                                {name: "Q3", product1: 8, product2: 4},
                                {name: "Q4", product1: 4, product2: 1},
                            ],
                    dataKeys: ["product1", "product2"]
                }}
                barChartInfo={{
                    title: "Saved jobs per category",
                    dataset: [
                                {name: "Tech", value: 4},
                                {name: "Design", value: 9},
                                {name: "Data", value: 4},
                                {name: "Marketing", value: 1},
                            ],
                    dataKeys: ["value"]
                }}
                pieChartInfo={{ 
                    title: "Applications status",
                    dataset: [
                            {name: "Applied", value: 2},
                            {name: "Rejected", value: 2},
                            {name: "Interview", value: 2}
                        ],
                    dataKey: "value",
                    nameKey: "name"
                }}
            /> 
        </>
    )   
}

export default CandidateDashboardPage;