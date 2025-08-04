import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

function DescriptionSlideOverPanel({jobOpened, setJobOpened}){
    useEffect(() => {
        console.log(jobOpened);
    }, [jobOpened, window.innerWidth])
    return(
        <div className={`px-10 lg:pr-15 overflow-y-scroll padding-x overflow-hidden h-[100vh] pt-[8em] pb-[3em] top-0 right-0 z-1 bg-white shadow-xl fixed w-[100%] lg:w-[40%] lg:max-w-[520px] text-[0.9rem] ${Object.keys(jobOpened).length != 0 ? "translate-x-0 opacity-100": "translate-x-full opacity-0"} transition-all ease duration-[0.3s]` }
        style={{fontFamily: "'Roboto', sans-serif"}}>
            <p className="text-[1.5rem] font-medium">{jobOpened.role}</p>
            <p className="pt-[0.2em] text-[1rem]">{jobOpened.company}</p>
            <div className="h-[0.1px] w-[100%] mt-[0.8em] bg-black"></div>
            <IoIosClose color="black" size={40} className="absolute top-[7em] right-5 cursor-pointer" onClick={() => setJobOpened({})} />
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