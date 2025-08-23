import Navbar from "../components/Navbar.jsx";
import OverviewHeroSection from "../components/OverviewHeroSection.jsx";
import FeatureHighlightSection from "../components/FeatureHighlightSection.jsx";
import TimelineSection from "../components/TimelineSection.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { FaRegClipboard } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";

function RecruiterOverviewPage(){
    return(
        <>
            <section>
                <div className="max-w-[1300px] mx-auto">
                <OverviewHeroSection heading={"Find the Right Talent, Faster"} subheading={"Post jobs, connect with qualified candidates, and build your team with confidence."} button1={"Post a job"} button2={"Browse candidates"} />
                </div>
            </section>

            <section className="bg-slate-50">
                <FeatureHighlightSection title={"Great Candidates Are Within Reach"} img={"interview.png"} feature1={"Post Jobs in Minutes"} description1={"Create job listings effortlessly—no clutter, no friction. Reach thousands of job seekers instantly."} Icon1={FaRegClipboard} feature2={"Get Matched with Top Talent"} description2={"Receive candidate suggestions tailored to your job requirements, saving you time and effort."} Icon2={FaPuzzlePiece} />
            </section>

            <section>
                <TimelineSection title={"Build a Seamless Hiring Process"} img={"resume.png"} step1={"Create Your Company Profile"} description1={"Showcase your mission, values, and open roles to attract the right candidates."} step2={"Post a Targeted Job Ad"} description2={"Write clear, engaging listings that outline expectations, benefits, and opportunities."} step3={"Review Smart Matches"} description3={"Let our system highlight top candidates based on skills, experience, and fit."} step4={"Streamline Your Interviews"} description4={"Coordinate interview times, track notes, and move qualified candidates through your pipeline."} step5={"Hire with Confidence"} description5={"Make informed decisions with complete candidate profiles and hiring insights."} />
            </section>

            <section>
                <CallToAction heading={"Ready to hire your next great team member?"} subheading={"Join thousands of recruiters building high-performing teams with us."} />
            </section>
        </>
    )
}

export default RecruiterOverviewPage;