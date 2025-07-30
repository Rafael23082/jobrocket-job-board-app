import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Statistics from "../components/Statistics.jsx";
import WhyChooseUsBox from "../components/WhyChooseUsBox.jsx";
import { IoSearchOutline } from "react-icons/io5";
import { FaBolt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import Footer from "../components/Footer.jsx";

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

            <section className="bg-[#3B82F6]">
                <Statistics />
            </section>

            <section className="border-b-[0.7px] border-gray-100">
                <div className="px-10 padding-x py-[5em] md:py-[7em] w-[100%] max-w-[1300px] mx-auto">
                    <p className="font-bold text-[2rem] lg:text-[2.5rem]" style={{fontFamily: "'Raleway', sans-serif"}}>Why Choose <span className="text-[#3B82F6]">Us</span></p>
                    <div className="flex justify-between mt-[1.5em] flex-col md:flex-row">
                        <div className="w-[100%] md:w-[30%] mt-[1.5em] bg-blue-100 p-[2em] rounded-[20px]">
                            <WhyChooseUsBox Icon={IoSearchOutline} title="Smart Matching" text="We pair you with jobs or candidates that truly match your profile." />
                        </div>
                        <div className="w-[100%] md:w-[30%] mt-[1.5em] bg-blue-100 p-[2em] rounded-[20px]">
                            <WhyChooseUsBox Icon={FaBolt} title="Fast & Easy" text="Apply or shortlist in just a few clicks — no hassle." />
                        </div>
                        <div className="w-[100%] md:w-[30%] mt-[1.5em] bg-blue-100 p-[2em] rounded-[20px]">
                            <WhyChooseUsBox Icon={IoIosNotifications} title="Real-Time Updates" text="Never miss an opportunity with instant alerts." />
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t-[0.7px] border-gray-100">
                <div className="px-10 padding-x py-[5em] md:py-[7em] w-[100%] max-w-[1300px] mx-auto" style={{fontFamily: "'Roboto', sans-serif"}}>
                    <p className="font-bold text-[2rem] lg:text-[2.5rem]" style={{fontFamily: "'Raleway', sans-serif"}}>From Our Users</p>
                    <div className="flex justify-between mt-[1.5em] flex-col md:flex-row">
                        <div className="w-[100%] md:w-[30%] mt-[1.5em] bg-blue-100 p-[2em] rounded-[20px]">
                            <div className="bg-blue-200 w-fit rounded-full p-[1em]">
                                <img src="quotes.png" className="w-[30px]" />
                            </div>
                            <p className="quotes text-[1.3rem] mt-[1em]">I found my current job through this app in less than a week — the recommendations were actually relevant for once.</p>
                        </div>
                        <div className="w-[100%] md:w-[30%] mt-[1.5em] bg-blue-100 p-[2em] rounded-[20px]">
                            <div className="bg-blue-200 w-fit rounded-full p-[1em]">
                                <img src="quotes.png" className="w-[30px]" />
                            </div>
                            <p className="quotes text-[1.3rem] mt-[1em]">Posting jobs and shortlisting candidates is so intuitive. It cuts our hiring time by at least 40%.</p>
                        </div>
                        <div className="w-[100%] md:w-[30%] mt-[1.5em] bg-blue-100 p-[2em] rounded-[20px]">
                            <div className="bg-blue-200 w-fit rounded-full p-[1em]">
                                <img src="quotes.png" className="w-[30px]" />
                            </div>
                            <p className="quotes text-[1.3rem] mt-[1em]">The alerts are instant. I applied for a remote role minutes after it was posted — and landed the interview.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#1F2937]">
                <Footer />
            </footer>
        </>
    )
}

export default LandingPage;