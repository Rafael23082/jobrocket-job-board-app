import Navbar from "../components/Navbar.jsx";
import OverviewHeroSection from "../components/OverviewHeroSection.jsx";
import Footer from "../components/Footer.jsx";
import CallToAction from "../components/CallToAction.jsx";
import TimelineSection from "../components/TimelineSection.jsx";
import FeatureHighlightSection from "../components/FeatureHighlightSection.jsx";

function CandidateOverviewPage(){
  return(
    <> 
      <section className="border-b-[0.7px] border-gray-100">
        <div className="max-w-[1300px] mx-auto">
          <OverviewHeroSection heading={"Find Your Next Opportunity With Confidence"} subheading={"Discover jobs tailored to your skills, connect with top employers, and take the next step in your career journey."} button1={"Create your profile"} button2={"Browse jobs"} />
        </div>
      </section>

      <section className="border-y-[0.7px] border-gray-100">
        <FeatureHighlightSection title={"Opportunities will come your way"} img={"opportunity.jpg"} feature1={"Apply easily"} description1={"Submit job applications with just one click—no lengthy forms or repetitive info."} icon1={"tap.png"} feature2={"Get matched instantly"} description2={"Receive personalized job matches based on your profile, skills, and preferences—no endless scrolling needed."} icon2={"lightbulb.png"} />
      </section>

      <section className="border-t-[0.7px] border-gray-100">
        <TimelineSection title={"Career Tips"} img={"tips.png"} step1={"Polish Your Resume"} description1={"Craft a resume that highlights your achievements, not just your duties. Use clear formatting and tailor it for each job."} step2={"Build a Standout Profile"} description2={"Set up a compelling candidate profile on our platform. Upload your resume, list your skills, and let employers find you."} step3={"Start Smart Job Searching"} description3={"Use filters to focus your search, and set up alerts for roles that match your interests and experience."} step4={"Prepare to Impress"} description4={"Research the company, practice interview questions, and prepare thoughtful answers that show your value."} step5={"Follow Up Like a Pro"} description5={"Send a brief thank-you message after interviews. It reinforces your interest and helps you stand out."} />
      </section>

      <section>
        <CallToAction heading={"Ready to land your dream job?"} subheading={"Join thousands of candidates already advancing their careers."} />
      </section>
    </>
  );
}

export default CandidateOverviewPage;