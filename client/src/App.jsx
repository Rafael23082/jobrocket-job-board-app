import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Modal from "react-modal";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Layout from "./components/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import CandidateOverviewPage from "./pages/CandidateOverviewPage.jsx";
import RecruiterOverviewPage from "./pages/RecruiterOverviewPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import JobsCategoryPage from "./pages/JobsCategoryPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CandidateJobsPage from "./pages/CandidateJobsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import RecruiterJobListingsPage from "./pages/RecruiterJobListingsPage.jsx";
import RecruiterEditJobPage from "./pages/RecruiterEditJobPage.jsx";
import ApplicantsPage from "./pages/ApplicantsPage.jsx";
import RecruiterAddJobPage from "./pages/RecruiterAddJobPage.jsx";
import { useEffect, useState } from "react";
import api from "./api/axios.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext.jsx";
import { BarLoader } from "react-spinners";
import RoleSelectionPage from "./pages/RoleSelectionPage.jsx";
import DashboardRouter from "./routes/DashboardRouter.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";

Modal.setAppElement("#root");

export default function App() {
    const navigate = useNavigate();
    const {user, setUser, isLoading, setIsLoading} = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleAutoLogin = async() => {
            try{
                let res = await api.post(`/user/autoLogin`);
                const userObject = {
                    name: res.data.name,
                    email: res.data.email,
                    _id: res.data._id,
                    role: res.data.role
                }
                if (res.data.role.toLowerCase() == "candidate"){
                    userObject.savedJobs = res?.data?.savedJobs ?? [];
                    userObject.location = res?.data?.location ?? "";
                    userObject.additionalInformation = res?.data?.additionalInformation ?? "";
                    userObject.resume = res?.data?.resume ?? "";
                    userObject.resumeName = res?.data?.resumeName ?? "";
                }
                setUser(userObject);
            }catch(err){
                console.log(err.response);
            }finally{
                setIsLoading(false);
                setLoading(false);
            }
        }

        handleAutoLogin();
    }, [])

  return (
    <>
        {loading && (
            <div className={`w-[100%] min-h-[100vh] flex absolute top-0 bg-white left-0 items-center z-[9998]`}>
                <div className="flex grow justify-center">
                    <BarLoader
                        color={"#3B82F6"}
                        loading={loading}
                        height={4}
                        width={100}
                    />
                </div>
            </div>
        )}
        <ScrollToTop />
        <Toaster position="top-center" />
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="/candidate-overview" element={<CandidateOverviewPage />} />
                <Route path="/recruiter-overview" element={<RecruiterOverviewPage />} />
                <Route path="/pricing" element={<PricingPage />} />
            </Route>
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/jobs/:field" element={<JobsCategoryPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/role-selection" element={<RoleSelectionPage />} />
            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard/jobs" element={<CandidateJobsPage />} />
                <Route path="/dashboard" element={<DashboardRouter />} />
                <Route path="/dashboard/profile" element={<ProfilePage />} />
                <Route path="/dashboard/job-listings" element={<RecruiterJobListingsPage />} />
                <Route path="/dashboard/edit-job/:jobID" element={<RecruiterEditJobPage />} />
                <Route path="/dashboard/applicants/:jobID" element={<ApplicantsPage />} />
                <Route path="/dashboard/add-job" element={<RecruiterAddJobPage />} />
            </Route>
        </Routes>
    </>
  );
}