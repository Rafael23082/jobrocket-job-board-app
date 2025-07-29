import Navbar from "../components/Navbar.jsx";
import OverviewHeroSection from "../components/OverviewHeroSection.jsx";
import Footer from "../components/Footer.jsx";
import Statistics from "../components/Statistics.jsx";

function CandidateOverviewPage(){
  return(
    <> 
      <header className="sticky top-0 z-100 bg-white">
        <div className="mx-auto max-w-[1300px]">
          <Navbar current={"Overview"} />  
        </div>
      </header>

      <section className="max-w-[1300px] mx-auto">
        <OverviewHeroSection heading={"Find Your Next Opportunity With Confidence"} subheading={"Discover jobs tailored to your skills, connect with top employers, and take the next step in your career journey."} button1={"Create your profile"} button2={"Browse jobs"} />
      </section>

      <section className="bg-[#3B82F6]">
        <Statistics />
      </section>

      <section className="flex max-w-[1300px] mx-auto justify-between py-[5em] md:py-[7em] items-center flex-col lg:flex-row">
        <div className="w-[100%] px-10 lg:w-[45%] lg:px-0 lg:pl-10 flex justify-center items-center padding-x">
          <img src="opportunity.png" className="w-[80%]" />
        </div>
        <div className="w-[100%] px-10 lg:w-[45%] lg:px-0 lg:pr-10 mt-[4em] lg:mt-0 padding-x">
          <p className="font-bold text-[1.5rem] lg:text-[2.5rem]" style={{fontFamily: "'Raleway', sans-serif"}}>Opportunities will come your way</p>
          <div className="flex mt-[1.5em]">
            <div className="p-[1em] rounded-full bg-blue-200 h-fit shrink-0">
              <img src="tap.png" className="w-[30px] h-[30px]" />
            </div>
            <div className="pl-[1.5em]">
              <p className="font-medium text-[1.1rem]" style={{fontFamily: "'Roboto', sans-serif"}}>Apply easily</p>
              <p style={{fontFamily: "'Roboto', sans-serif"}}>Submit job applications with just one click—no lengthy forms or repetitive info.</p>
            </div>
          </div>
          <div className="flex mt-[1.5em]">
            <div className="p-[1em] rounded-full bg-blue-200 h-fit shrink-0">
              <img src="lightbulb.png" className="w-[30px] h-[30px]" />
            </div>
            <div className="pl-[1.5em]">
              <p className="font-medium text-[1.1rem]" style={{fontFamily: "'Roboto', sans-serif"}}>Get matched instantly</p>
              <p style={{fontFamily: "'Roboto', sans-serif"}}>Receive personalized job matches based on your profile, skills, and preferences—no endless scrolling needed.</p>
            </div>
          </div>
        </div>
      </section>

        <footer className="bg-[#1F2937]">
          <Footer />
      </footer>
    </>
  );
}

export default CandidateOverviewPage;