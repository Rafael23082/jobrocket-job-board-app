import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { FaCircleCheck } from "react-icons/fa6";

function PricingPage(){
    return(
        <>
            <header className="sticky top-0 z-100 bg-white">
                <div className="mx-auto max-w-[1300px]">
                <Navbar current={"Pricing"} />  
                </div>
            </header>

            <section className="max-w-[1300px] mx-auto justify-between py-[5em] md:py-[7em] padding-x px-10" style={{fontFamily: "'Roboto', sans-serif"}}>
                <p className="text-[1.5rem] font-bold text-blue-500 subheading">Attract Talents</p>
                <p className="font-bold text-[1.5rem] lg:text-[2.5rem]" style={{fontFamily: "'Raleway', sans-serif"}}>Choose Your Plan</p>
                    <div className="flex mx-[1em] rounded-[20px] border border-gray-200 shadow mt-[2em] flex-col lg:flex-row pb-[1em]">
                        <div className="flex-1 box-border border-r border-gray-200">
                            <div className="py-[2em] px-[1.5em]">
                                <p className="text-[2rem] font-bold price">Free</p>
                                <p className="text-gray-800 text-[0.9rem]">Free plan for all users</p>
                            </div>
                            <div className="py-[2em] text-[0.9rem] px-[1.5em] border-t border-gray-200">
                                <span className="flex items-center"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Post up to 1 job listing</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Access to basic candidate profiles</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Limited search and filter tools</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Email alerts for new applications</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Community support</p></span>
                                <button className="mt-[2em] bg-[#3B82F6] text-white w-[100%] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]">Sign Up</button>
                            </div>
                        </div>
                        <div className="flex-1 box-border border-r border-gray-200">
                            <div className="py-[2em] px-[1.5em]">
                                <p className="text-[2rem] font-bold price">$149<span className="text-[0.9rem] font-normal text-gray-800">/ mo.</span></p>
                                <p className="text-gray-800 text-[0.9rem]">Powerful tools to streamline hiring</p>
                            </div>
                            <div className="py-[2em] text-[0.9rem] px-[1.5em] border-t border-gray-200">
                                <span className="flex items-center"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Post up to 10 job listing</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Access full candidate profiles</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Smart matching & resume parsing</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Save and organize candidate pools</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Email + chat support</p></span>
                                <button className="mt-[2em] bg-[#3B82F6] text-white w-[100%] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]">Sign Up</button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="py-[2em] px-[1.5em]">
                                <p className="text-[2rem] font-bold price">From $200</p>
                                <p className="text-gray-800 text-[0.9rem]">Boost visibility and attract top talent</p>
                            </div>
                            <div className="py-[2em] text-[0.9rem] border-t border-gray-200 px-[1.5em]">
                                <span className="flex items-center"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Featured job placement</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Prioritized listing in search results</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Employer branding tools</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Custom targeting by skill & location</p></span>
                                <span className="flex items-center pt-[0.5em]"><FaCircleCheck size={16} /><p className="pl-[0.7em]">Dedicated account support</p></span>
                                <button className="mt-[2em] bg-[#3B82F6] text-white py-[0.6em] w-[100%] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]">Sign Up</button>
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

export default PricingPage;