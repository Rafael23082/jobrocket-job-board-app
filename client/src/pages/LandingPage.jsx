import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Statistics from "../components/Statistics.jsx";
import WhyChooseUsBox from "../components/WhyChooseUsBox.jsx";
import { IoSearchOutline } from "react-icons/io5";
import { FaBolt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

function LandingPage(){
    return(
        <>
            <section>
                <HeroSection />
            </section>

            <section className="bg-[#3B82F6]">
                <Statistics />
            </section>

            <section className="bg-gray-100">
                <div className="px-10 padding-x py-[5em] md:py-[7em] w-[100%] max-w-[1300px] mx-auto">
                    <p className="font-bold text-[2rem] lg:text-[2.5rem]" style={{fontFamily: "'Raleway', sans-serif"}}>Why Choose <span className="text-[#3B82F6]">Us</span></p>
                    <div className="flex justify-between mt-[1.5em] flex-col lg:flex-row">
                        <div className="w-[100%] lg:w-[32%] mt-[1.5em] shadow p-7 sm:p-10 rounded-[20px] bg-white">
                            <WhyChooseUsBox Icon={IoSearchOutline} title="Smart Matching" text="We pair you with jobs or candidates that truly match your profile." />
                        </div>
                        <div className="w-[100%] lg:w-[32%] mt-[1.5em] shadow p-7 sm:p-10 rounded-[20px] bg-white">
                            <WhyChooseUsBox Icon={FaBolt} title="Fast & Easy" text="Apply or shortlist in just a few clicks — no hassle." />
                        </div>
                        <div className="w-[100%] lg:w-[32%] mt-[1.5em] shadow p-7 sm:p-10 rounded-[20px] bg-white">
                            <WhyChooseUsBox Icon={IoIosNotifications} title="Real-Time Updates" text="Never miss an opportunity with instant alerts." />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="px-10 padding-x py-[5em] md:py-[7em] w-[100%] max-w-[1300px] mx-auto" style={{fontFamily: "'Roboto', sans-serif"}}>
                    <p className="font-bold text-[2rem] lg:text-[2.5rem]" style={{fontFamily: "'Raleway', sans-serif"}}>From Our Users</p>
                    <div className="flex justify-between mt-[1.5em] flex-col lg:flex-row">
                        <div className="w-[100%] lg:w-[32%] mt-[1.5em] p-7 sm:p-10 rounded-[20px] shadow-lg border border-gray-100 flex flex-col">
                            <p className="text-[1.5rem] font-medium">Relevance</p>
                            <p className="quotes text-[1.1rem] text-gray-500 mt-3">I found my current job through this app in less than a week — the recommendations were actually relevant for once.</p>
                            <div className="flex mt-auto pt-5 items-center">
                                <div className="rounded-full h-12 w-12 overflow-hidden">
                                    <img src="./businessman.jpg" className="object-cover w-full h-full" />
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold">Morris Clarke</p>
                                    <p className="text-sm">Google</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] lg:w-[32%] mt-[1.5em] p-7 sm:p-10 rounded-[20px] shadow-lg border border-gray-100 flex flex-col">
                            <p className="text-[1.5rem] font-medium">Efficiency</p>
                            <p className="quotes text-[1.1rem] text-gray-500 mt-3">Posting jobs and shortlisting candidates is so intuitive. It cuts our hiring time by at least 40%.</p>
                            <div className="flex mt-auto pt-5 items-center">
                                <div className="rounded-full h-12 w-12 overflow-hidden">
                                    <img src="./businessman2.jpg" className="object-cover w-full h-full" />
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold">Clark Kent</p>
                                    <p className="text-sm">Daily Planet</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] lg:w-[32%] mt-[1.5em] p-7 sm:p-10 rounded-[20px] shadow-lg border border-gray-100 flex flex-col">
                            <p className="text-[1.5rem] font-medium">Speed</p>
                            <p className="quotes text-[1.1rem] text-gray-500 mt-3">The alerts are instant. I applied for a remote role minutes after it was posted — and landed the interview.</p>
                            <div className="flex mt-auto pt-5 items-center">
                                <div className="rounded-full h-12 w-12 overflow-hidden">
                                    <img src="./businessman3.png" className="object-cover w-full h-full" />
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold">Blake Anfield</p>
                                    <p className="text-sm">Apple</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage;