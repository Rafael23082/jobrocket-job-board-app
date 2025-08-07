import JobSection from "../components/JobSection.jsx";
import { useParams } from "react-router-dom";
import DescriptionSlideOverPanel from "../components/DescriptionSlideOverPanel.jsx";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function JobsPage(){
    const [jobOpened, setJobOpened] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <header className="block top-0 shadow z-50">
                <div className="mx-auto max-w-[1300px]">
                    <Navbar current={"Jobs"} />  
                </div>
            </header>
        
            <section className="flex max-w-[1300px] mx-auto">
                <div className={`max-h-[calc(100vh-80px)] overflow-auto ${isOpen ? "hidden lg:block lg:w-[60%]": "w-[100%]"} `}>
                    <div className={`w-[100%] padding-x px-10 py-[5em] md:py-[7em]`}>
                        <p className="font-bold text-[1.5rem] lg:text-[2.5rem] w-[70%]">Find the Right Job, Right Here.</p>
                        <p className="text-[1.2rem] lg:w-[60%] pt-[0.5em] subheading">Explore thousands of opportunities tailored to your skills, goals, and ambition.</p>
                        <div className="flex">
                            <div className="flex-1">
                                <JobSection category={"Tech"} jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
                                <JobSection category={"Design"} jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
                                <JobSection category={"Data"} jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
                                <JobSection category={"Business"} jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
                                <JobSection category={"Marketing"} jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isOpen && (
                        <div className="w-[100%] lg:w-[40%]">
                            <DescriptionSlideOverPanel jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
                        </div>
                    )
                }
            </section>
        </>
    )
}

export default JobsPage;