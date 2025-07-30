import Navbar from "../components/Navbar.jsx";
import OverviewHeroSection from "../components/OverviewHeroSection.jsx";
import FeatureHighlightSection from "../components/FeatureHighlightSection.jsx";
import TimelineSection from "../components/TimelineSection.jsx";
import CallToAction from "../components/CallToAction.jsx";
import Footer from "../components/Footer.jsx";

function RecruiterOverviewPage(){
    return(
        <>
            <header className="sticky top-0 z-100 bg-white">
                <div className="mx-auto max-w-[1300px]">
                <Navbar current={"Overview"} />  
                </div>
            </header>

            <section className="border-b-[0.7px] border-gray-100">
                <div className="max-w-[1300px] mx-auto">
                <OverviewHeroSection heading={"Find the Right Talent, Faster"} subheading={"Post jobs, connect with qualified candidates, and build your team with confidence."} button1={"Post a job"} button2={"Browse candidates"} />
                </div>
            </section>

            <section className="border-y-[0.7px] border-gray-100">
                <FeatureHighlightSection title={"Great Candidates Are Within Reach"} img={"interview.jpg"} feature1={"Post Jobs in Minutes"} description1={"Create job listings effortlessly—no clutter, no friction. Reach thousands of job seekers instantly."} icon1={"clipboard.png"} feature2={"Get Matched with Top Talent"} description2={"Receive candidate suggestions tailored to your job requirements, saving you time and effort."} icon2={"puzzle2.png"} />
            </section>

            <section className="border-t-[0.7px] border-gray-100">
                <TimelineSection title={"Build a Seamless Hiring Process"} img={"resume.png"} step1={"Polish Your Resume"} description1={"Craft a resume that highlights your achievements, not just your duties. Use clear formatting and tailor it for each job."} step2={"Build a Standout Profile"} description2={"Set up a compelling candidate profile on our platform. Upload your resume, list your skills, and let employers find you."} step3={"Start Smart Job Searching"} description3={"Use filters to focus your search, and set up alerts for roles that match your interests and experience."} step4={"Prepare to Impress"} description4={"Research the company, practice interview questions, and prepare thoughtful answers that show your value."} step5={"Follow Up Like a Pro"} description5={"Send a brief thank-you message after interviews. It reinforces your interest and helps you stand out."} />
            </section>

            <section>
                <CallToAction heading={"Ready to land your dream job?"} subheading={"Join thousands of candidates already advancing their careers."} />
            </section>

            <footer className="bg-[#1F2937]">
                <Footer />
            </footer>
        </>
    )
}

export default RecruiterOverviewPage;