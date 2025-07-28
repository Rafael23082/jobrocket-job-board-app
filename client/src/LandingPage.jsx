import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";

function LandingPage(){
  return(
    <> 
      <header className="mx-auto max-w-[1300px]">
        <Navbar current={"Overview"} />  
      </header>

      <section>
        <HeroSection />
      </section>

      <section className="flex flex-col lg:flex-row justify-around font-bold bg-[#3B82F6] text-white py-[7em] text-[1rem] lg:text-[1.5rem]" style={{fontFamily: "'Roboto', sans-serif"}}>
        <span className="text-center leading-[3em] leading">
          <p className="number text-[6rem]">1M+</p>
          <p>Jobs Secured</p>
        </span>
        <span className="text-center leading-[3em] pt-[2.5em] lg:pt-0 leading">
          <p className="number text-[6rem]">100K+</p>
          <p>Tech Jobs</p>
        </span>
        <span className="text-center leading-[3em] pt-[2.5em] lg:pt-0 leading">
          <p className="number text-[6rem]">4M+</p>
          <p>Workers</p>
        </span>
      </section>
    </>
  );
}

export default LandingPage;