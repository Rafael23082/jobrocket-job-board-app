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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='/candidateOverview' element={<CandidateOverviewPage />}></Route>
          <Route path='/recruiterOverview' element={<RecruiterOverviewPage />}></Route>
          <Route path='/pricing' element={<PricingPage />}></Route>
          <Route path='/jobs' element={<JobsPage />}></Route>
          <Route path='/jobs/:field' element={<JobsCategoryPage />}></Route>
        </Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
