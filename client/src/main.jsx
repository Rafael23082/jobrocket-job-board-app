import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import CandidateOverviewPage from './pages/CandidateOverviewPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import RecruiterOverviewPage from './pages/RecruiterOverviewPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import JobsPage from './pages/JobsPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/candidateOverviewPage' element={<CandidateOverviewPage />}></Route>
        <Route path='/recruiterOverviewPage' element={<RecruiterOverviewPage />}></Route>
        <Route path='/pricingPage' element={<PricingPage />}></Route>
        <Route path='/jobsPage' element={<JobsPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
