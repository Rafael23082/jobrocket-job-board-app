# JobRocket Job Board App

A modern job board application for connecting job seekers with job opportunities, and connecting job recruiters with candidates. This application allows job seekers to find appropriate jobs for them and recruiters to view all applicant details to determine whether they are suited for the job.

## Table of contents

- [Features](#features)
- [Installation and configuration](#installation-and-configuration)
- [API Endpoints](#api-endpoints)
- [Security](#security)

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
- Secure authentication with access and refresh tokens.
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
