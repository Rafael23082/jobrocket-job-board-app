import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import CandidateDashboardPage from "../pages/CandidateDashboardPage";
import RecruiterDashboardPage from "../pages/RecruiterDashboardPage";

function DashboardRouter(){
    const {user} = useContext(UserContext);

    if (!user) return null;

    if (user.role.toLowerCase() == "candidate") return <CandidateDashboardPage />;
    else if (user.role.toLowerCase() == "recruiter") return <RecruiterDashboardPage />
    else return <p>Unauthorized</p>
}

export default DashboardRouter;