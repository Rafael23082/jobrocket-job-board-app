# JobRocket Job Board App

A modern job board application for connecting job seekers with job opportunities, and connecting job recruiters with candidates. This application allows job seekers to find appropriate jobs for them and recruiters to view all applicant details to determine whether they are suited for the job.

## Table of contents

- [Features](#features)
- [Installation and configuration](#installation-and-configuration)
- [API Endpoints](#api-endpoints)

## Features
### For candidates
- Create an account and manage profile.
- Browse and search job listings.
- Save jobs for later.
- Apply directly to jobs.
- Track applied jobs and application status.
- Personalized candidate dashboard.

### For recruiters
- Post new job listings.
- Manage and update job postings.
- View applicants for each job.
- Update application status. (pending -> rejected / interview -> rejected / hired)
- Recruiter dashboard with insights.

### System features
- Secure authentication with access and refresh tokens using JWT and cookies.
- Auto login and logout handling.

## Installation and configuration
### Installation
- git clone https://github.com/Rafael23082/jobrocket-job-board-app.git
- cd client
- npm install
- cd ../server
- npm install

### Configuration
Create .env file in client root folder containing:
- VITE_BACKEND_URL = Contains the URL in which the backend runs in.

Create .env file in server root folder containing:
- MONGODB_URL = Mongoose connection string.
- FRONTEND_URL = Contains the URL in which the frontend runs in.

## API Endpoints

### 🔑 Authentication & Users
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/users/signup` | Register a new user | ❌ |
| POST | `/api/users/login` | Login user | ❌ |
| POST | `/api/users/logout` | Logout user | ✅ |
| POST | `/api/users/autoLogin` | Auto login with refresh token | ❌ |
| PUT | `/api/users/updateUserDetails/:userID` | Update user profile | ✅ |
| GET | `/api/users/fetchCandidateDashboardData/:userID` | Candidate dashboard data | ✅ |
| GET | `/api/users/fetchRecruiterDashboardData/:userID` | Recruiter dashboard data | ✅ |

---

### 📋 Jobs
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/jobs/getAllJobs` | Get all jobs | ❌ |
| GET | `/api/jobs/getJobByID/:jobID` | Get a job by ID | ❌ |
| POST | `/api/jobs/addJob` | Add a job (recruiter only) | ✅ |
| PUT | `/api/jobs/updateJobByID/:jobID` | Update job | ✅ |
| DELETE | `/api/jobs/deleteJob/:jobID` | Delete a job | ✅ |
| GET | `/api/jobs/getJobsPostedByRecruiter/:userID` | Recruiter’s jobs | ✅ |
| POST | `/api/jobs/saveJob` | Save a job for later | ✅ |
| POST | `/api/jobs/removeSavedJob` | Remove saved job | ✅ |
| GET | `/api/jobs/getSavedJobs/:userID` | Get saved jobs | ✅ |
| GET | `/api/jobs/getAppliedJobs/:userID` | Get applied jobs | ✅ |
| GET | `/api/jobs/getNotAppliedJobs/:userID` | Get jobs not yet applied to | ✅ |

---

### 📝 Applications
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/applications/applyJob` | Apply to a job | ✅ |
| GET | `/api/applications/getJobApplicants/:jobID` | Get applicants for a job | ✅ |
| PUT | `/api/applications/updateApplicationStatus/:userID/:jobID` | Update application status | ✅ |
| GET | `/api/applications/getApplicationByUserIDAndJobID/:userID/:jobID` | Get specific application | ✅ |
| GET | `/api/applications/getAllApplications` | Get all applications | ❌ |
| DELETE | `/api/applications/deleteApplicationById/:applicationID` | Delete application by ID | ❌ |
| DELETE | `/api/applications/deleteAllApplications` | Delete all applications | ❌ |
