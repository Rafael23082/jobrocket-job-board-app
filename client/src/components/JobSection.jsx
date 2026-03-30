import Job from "./Job.jsx";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

function JobSection({category, jobOpened, setJobOpened, detailsIsOpen, setDetailsIsOpen, applyIsOpen, setApplyIsOpen}){
    const navigate = useNavigate();
    const [filteredJobs, setFilteredJobs] = useState([]);

    const getJobs = async() => {
        try{
            await new Promise(resolve => setTimeout(resolve))
            const res = await api.get(`/job/getAllJobs`);
            setFilteredJobs(res.data.filter((job) => job.field.toLowerCase() == category.toLowerCase()));
            return filteredJobs.slice(0, 3);
        }catch(err){
            console.log(err);
        }
    }

    const {data: displayedJobs, isLoading} = useQuery({
        queryKey: [category, "jobsPage"],
        queryFn: () => getJobs(),
        keepPreviousData: true
    })

    return(
        <div className="mt-[2em]">
            <div className="flex items-center">
                <p className="text-[1.4rem] sm:text-[1.5rem] lg:w-[60%] pt-[0.5em] py-[1em] font-bold grow">{category.charAt(0).toUpperCase() + category.slice(1)} Jobs</p>
                {filteredJobs.length > 3 && (
                    <p className="text-[0.9rem] text-gray-800 cursor-pointer hover:underline" onClick={() => {navigate(`/jobs/${category.toLowerCase()}`)}}>See More</p>
                )}
            </div>
            {displayedJobs?.length == 0 && (
                <p className="text-gray-500">No Jobs to be Displayed</p>
            )}
            {!isLoading && displayedJobs?.length != 0 && displayedJobs.map((job, index) => (
                <div key={index} className="py-[1.5em] border-b border-gray-300">
                    <Job job={job} seeMore={false} jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} applyIsOpen={applyIsOpen} setApplyIsOpen={setApplyIsOpen} />
                </div> 
            ))}

            {isLoading && [1, 2, 3].map((i, index) => (
                <div key={index} className="py-[1.5em] border-b border-gray-300">
                    <Job seeMore={false} isLoading={true} />
                </div>
            ))}
        </div>
    )
}

export default JobSection;