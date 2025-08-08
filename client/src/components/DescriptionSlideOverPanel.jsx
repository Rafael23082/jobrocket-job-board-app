import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";

function DescriptionSlideOverPanel({jobOpened, setJobOpened, detailsIsOpen, setDetailsIsOpen}){
return(
    <Modal className="w-[70%] max-w-[1000px] max-h-[80vh] overflow-auto bg-white rounded-[5px] p-[2em] z-40 relative shadow-lg" isOpen={detailsIsOpen} onRequestClose={() => setDetailsIsOpen(false)} overlayClassName="inset-0 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[90]">
        <div style={{fontFamily: "'Roboto', sans-serif"}}>
            <p className="text-[1.5rem] font-medium">{jobOpened.role}</p>
            <p className="pt-[0.2em] text-[1rem]">{jobOpened.company}</p>
            <div className="h-[0.1px] w-[100%] mt-[0.8em] bg-black"></div>
            <IoIosClose color="black" size={40} className="absolute top-[2em] right-5 cursor-pointer" onClick={() => setDetailsIsOpen(false)} />
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
    </Modal>
    )
}

export default DescriptionSlideOverPanel;