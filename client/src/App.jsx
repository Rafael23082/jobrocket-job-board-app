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
import DashboardPage from "./pages/DashboardPage.jsx";
import CandidateJobsPage from "./pages/CandidateJobsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import RecruiterJobListingsPage from "./pages/RecruiterJobListingsPage.jsx";
import RecruiterEditJobPage from "./pages/RecruiterEditJobPage.jsx";
import ApplicantsPage from "./pages/ApplicantsPage.jsx";
import RecruiterAddJobPage from "./pages/RecruiterAddJobPage.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext.jsx";
import { BarLoader } from "react-spinners";

Modal.setAppElement("#root");

export default function App() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleAutoLogin = async() => {
            try{
                let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/autoLogin`, {}, {withCredentials: true});
                console.log(res.data);
                setUser(res.data);
                navigate(`/${res.data.role}/dashboard`);
            }catch(err){
                console.log(err.response);
            }finally{
                setLoading(false);
            }
        }

        handleAutoLogin();
    }, [])

  return (
    <>
        {loading && (
            <div className={`w-[100%] min-h-[100vh] flex absolute top-0 bg-white left-0 items-center z-[9999]`}>
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
            <Route path="/:jobs" element={<JobsPage />} />
            <Route path="/jobs/:field" element={<JobsCategoryPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/candidate/jobs" element={<CandidateJobsPage />} />
            <Route path="/:role/dashboard" element={<DashboardPage />} />
            <Route path="/:role/profile" element={<ProfilePage />} />
            <Route path="/recruiter/job-listings" element={<RecruiterJobListingsPage />} />
            <Route path="/recruiter/edit-job/:jobID" element={<RecruiterEditJobPage />} />
            <Route path="/recruiter/applicants/:jobID" element={<ApplicantsPage />} />
            <Route path="/recruiter/add-job" element={<RecruiterAddJobPage />} />
        </Routes>
    </>
  );
}