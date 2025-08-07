import DashboardPageTemplate from "../components/DashboardPageTemplate.jsx";
import { FaPaperPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

function DashboardPage(){
    return(
        <> 
            <DashboardPageTemplate 
                box1={"JOBS APPLIED"} Box1Icon={FaPaperPlane} box2={"JOBS SAVED"} Box2Icon={FaHeart} box3={"RESPONSE TIME"} Box3Icon={FaClock} box4={"PROFILE VIEWS"} Box4Icon={FiEye}
            /> 
        </>
    )   
}

export default DashboardPage;