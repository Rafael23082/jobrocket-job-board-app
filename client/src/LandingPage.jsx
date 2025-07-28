import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Footer from "./components/Footer.jsx";

function LandingPage(){
  return(
    <> 
      <header className="sticky top-0 z-100 bg-white">
        <div className="mx-auto max-w-[1300px]">
          <Navbar current={"Overview"} />  
        </div>
      </header>

      <section>
        <HeroSection />
      </section>

      <section className="bg-[#3B82F6]">
        <div className="flex flex-col lg:flex-row justify-around font-bold max-w-[1300px] mx-auto text-white pt-[7em] py-[6em] text-[1rem] lg:text-[1.5rem]" style={{fontFamily: "'Roboto', sans-serif"}}>
          <span className="text-center leading-[4em] lg:leading-[3em] leading">
            <p className="number text-[6rem]">1M+</p>
            <p>Jobs Secured</p>
          </span>
          <span className="text-center leading-[4em] lg:leading-[3em] pt-[2.5em] lg:pt-0 leading">
            <p className="number text-[6rem]">100K+</p>
            <p>Tech Jobs</p>
          </span>
          <span className="text-center leading-[4em] lg:leading-[3em] pt-[2.5em] lg:pt-0 leading">
            <p className="number text-[6rem]">4M+</p>
            <p>Workers</p>
          </span>
        </div>
      </section>

      <section className="flex max-w-[1300px] mx-auto justify-between py-[9em] items-center flex-col lg:flex-row">
        <div className="w-[100%] px-10 lg:w-[45%] lg:px-0 lg:pl-10 flex justify-center items-center padding-x">
          <img src="opportunity.png" className="w-[80%]" />
        </div>
        <div className="w-[100%] px-10 lg:w-[45%] lg:px-0 lg:pr-10 mt-[4em] lg:mt-0">
          <p className="font-bold text-[1.5rem] lg:text-[2.5rem]" style={{fontFamily: "'Raleway', sans-serif"}}>Opportunities will come your way</p>
          <p className="text-[1.2rem] lg:text-[1.3rem] mt-[1em] subheading" style={{fontFamily: "'Roboto', sans-serif"}}>Create your profile, stand out, and apply instantly.</p>
          <div className="flex mt-[1.5em]">
            <div className="p-[1em] rounded-full bg-blue-200 h-fit shrink-0">
              <img src="tap.png" className="w-[30px] h-[30px]" />
            </div>
            <div className="pl-[1.5em]">
              <p className="font-medium text-[1.15rem]" style={{fontFamily: "'Roboto', sans-serif"}}>Apply easily</p>
              <p className="text-[0.9rem]" style={{fontFamily: "'Roboto', sans-serif"}}>Submit job applications with just one click—no lengthy forms or repetitive info.</p>
            </div>
          </div>
          <div className="flex mt-[1.5em]">
            <div className="p-[1em] rounded-full bg-blue-200 h-fit shrink-0">
              <img src="lightbulb.png" className="w-[30px] h-[30px]" />
            </div>
            <div className="pl-[1.5em]">
              <p className="font-medium text-[1.15rem]" style={{fontFamily: "'Roboto', sans-serif"}}>Get matched instantly</p>
              <p className="text-[0.9rem]" style={{fontFamily: "'Roboto', sans-serif"}}>Receive personalized job matches based on your profile, skills, and preferences—no endless scrolling needed.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
          <Footer />
      </footer>
    </>
  );
}

export default LandingPage;