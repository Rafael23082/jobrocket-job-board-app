import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

function DescriptionSlideOverPanel({jobOpened, setJobOpened, isOpen, setIsOpen}){
    return(
        <div className={`relative max-h-[calc(100vh-80px)] px-10 lg:pr-15 overflow-y-scroll padding-x py-[3em] border border-gray-100 overflow-hidden z-20 top-0 left-0 z-1 bg-white shadow w-[100%] text-[0.9rem] ${isOpen ? "w-[100%]": "w-0"}` }
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