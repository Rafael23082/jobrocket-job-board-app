import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";


function LandingPage(){
    return(
        <>
            <header className="sticky top-0 z-100 bg-white">
                <div className="mx-auto max-w-[1300px]">
                <Navbar current={"Home"} />  
                </div>
            </header>

            <section>
                <HeroSection />
            </section>
        </>
    )
}

export default LandingPage;