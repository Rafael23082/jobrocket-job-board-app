import { useState } from "react";
import JobData from "./JobData.jsx";
import Job from "./Job.jsx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Pagination({category}){
    const [page, setPage] = useState(1);
    const maxDisplayed = 5;
    const filteredJobs = JobData.filter((job) => job.field == category);
    const maxPages = Math.ceil(filteredJobs.length/maxDisplayed);

    const startIndex = (page - 1) * maxDisplayed;
    const endIndex = startIndex + maxDisplayed;

    const displayedJobs = filteredJobs.slice(startIndex, endIndex);

    const handleNext = () => {
        if (page < maxPages){
            setPage(prev => prev + 1);
        }
    }

    const handleBack = () => {
        if (page > 1){
            setPage(prev => prev - 1);
        }
    }
    return(
        <div className="mt-[2em]">
            <div className="flex items-center">
                <p className="text-[1.5rem] lg:w-[60%] pt-[0.5em] py-[1em] subheading font-bold grow">{category} Jobs</p>
            </div>
            {displayedJobs.map((job) => (
                <div className="py-[1.5em] border-b border-gray-200">
                    <Job img={job.img} role={job.role} company={job.company} where={job.where} salary={job.salary} />
                </div> 
            ))}
            <div className="flex items-center justify-center mt-[2em]">
                <span className="flex text-[#3B82F6] cursor-pointer" onClick={handleBack}><MdKeyboardArrowLeft size={25} color="#3B82F6" />Back</span>
                <div className="px-[1em] py-[0.5em] border border-[#3B82F6] rounded-[10px] mx-[1em]">{page}</div>
                <span className="flex text-[#3B82F6] cursor-pointer" onClick={handleNext}>Next <MdKeyboardArrowRight size={25} color="#3B82F6" /></span>
            </div>
        </div>
    )
}

export default Pagination;