import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import CandidateOverviewPage from './pages/CandidateOverviewPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import RecruiterOverviewPage from './pages/RecruiterOverviewPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import JobsPage from './pages/JobsPage.jsx';
import Layout from './components/Layout.jsx';
import JobsCategoryPage from './pages/JobsCategoryPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import UserProvider from './context/UserContext.jsx';
import CandidateJobsPage from './pages/CandidateJobsPage.jsx';
import Modal from 'react-modal';
import ProfilePage from './pages/ProfilePage.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RecruiterJobListingsPage from './pages/RecruiterJobListingsPage.jsx';
import RecruiterEditJobPage from './pages/RecruiterEditJobPage.jsx';

Modal.setAppElement('#root');
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path='/candidate-overview' element={<CandidateOverviewPage />}></Route>
              <Route path='/recruiter-overview' element={<RecruiterOverviewPage />}></Route>
              <Route path='/pricing' element={<PricingPage />}></Route>
            </Route>
            <Route path='/:jobs' element={<JobsPage />}></Route>
            <Route path='/jobs/:field' element={<JobsCategoryPage />}></Route>
            <Route path='/signup' element={<SignUpPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/candidate/jobs' element={<CandidateJobsPage />}></Route>
            <Route path='/:role/dashboard' element={<DashboardPage />}></Route>
            <Route path='/:role/profile' element={<ProfilePage />}></Route>
            <Route path='/recruiter/job-listings' element={<RecruiterJobListingsPage />}></Route>
            <Route path='/recruiter/edit-job/:jobID' element={<RecruiterEditJobPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>
)
