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

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='/candidateOverview' element={<CandidateOverviewPage />}></Route>
            <Route path='/recruiterOverview' element={<RecruiterOverviewPage />}></Route>
            <Route path='/pricing' element={<PricingPage />}></Route>
          </Route>
          <Route path='/:jobs' element={<JobsPage />}></Route>
          <Route path='/jobs/:field' element={<JobsCategoryPage />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/dashboard/:role' element={<DashboardPage />}></Route>
          <Route path='/dashboard/Candidate/jobs' element={<CandidateJobsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
)
