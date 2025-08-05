import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

function DescriptionSlideOverPanel({jobOpened, setJobOpened, isOpen, setIsOpen}){
    return(
        <div className={`px-10 lg:pr-15 overflow-y-scroll padding-x py-[3em] border border-gray-100 overflow-hidden h-[100vh] z-20 top-0 left-0 lg:left-1/2 lg:translate-x-1/4 z-1 bg-white shadow fixed w-[100%] lg:max-w-[520px] text-[0.9rem] ${isOpen ? "translate-x-0 opacity-100": "translate-x-full opacity-0 pointer-events-none"} transition-all ease duration-[0.3s]` }
        style={{fontFamily: "'Roboto', sans-serif"}}>
            <p className="text-[1.5rem] font-medium">{jobOpened.role}</p>
            <p className="pt-[0.2em] text-[1rem]">{jobOpened.company}</p>
            <div className="h-[0.1px] w-[100%] mt-[0.8em] bg-black"></div>
            <IoIosClose color="black" size={40} className="absolute top-[3em] right-5 cursor-pointer" onClick={() => setIsOpen(false)} />
            <p className="pt-[0.8em]">Description: {jobOpened.description}</p>
            <p className="pt-[0.8em]">Location: {jobOpened.location}</p>
            <p className="pt-[0.8em]">Salary: ${jobOpened.salary?.min} - ${jobOpened.salary?.max}</p>
            <p className="pt-[0.8em]">Experience: {jobOpened.experience}</p>
            <p className="pt-[0.8em]">Employment type: {jobOpened.employmentType}</p>
            <p className="pt-[0.8em]">Openings: {jobOpened.openings} positions</p>
            <p className="pt-[0.8em]">Requirements:</p>
            <ul className="list-disc pl-5 space-y-1">
                {jobOpened.requirements?.map((requirement, index) => (
                    <li key={index} className={`${index == 0 ? "pt-[0.5em]": "pt-0"}`}>{requirement}</li>
                ))}
            </ul>
        </div>
    )
}

export default DescriptionSlideOverPanel;