import DashboardPageTemplate from "../components/DashboardPageTemplate.jsx";
import { FaPaperPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { data } from "react-router-dom";

function RecruiterDashboardPage(){
    return(
        <> 
            <DashboardPageTemplate 
                box1={"JOBS APPLIED"} Box1Icon={FaPaperPlane} box1Value={10} box2={"JOBS SAVED"} Box2Icon={FaHeart} box2Value={10} box3={"RESPONSE TIME"} Box3Icon={FaClock} box3Value={10} box4={"PROFILE VIEWS"} 
                Box4Icon={FiEye} box4Value={10}
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

export default RecruiterDashboardPage;