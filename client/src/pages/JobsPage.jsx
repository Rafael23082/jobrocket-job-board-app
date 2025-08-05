import JobSection from "../components/JobSection.jsx";
import { useParams } from "react-router-dom";
import DescriptionSlideOverPanel from "../components/DescriptionSlideOverPanel.jsx";
import { useState } from "react";

function JobsPage(){
    const [jobOpened, setJobOpened] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <section className="py-[5em] md:py-[7em]">
                <div className="max-w-[1300px] mx-auto flex">
                    <div className={`${isOpen ? "w-[100%] lg:w-[60%]" : "w-[100%]"} padding-x px-10 transition-all ease duration-[0.3s]`}>
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
            </section>
            <DescriptionSlideOverPanel jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default JobsPage;