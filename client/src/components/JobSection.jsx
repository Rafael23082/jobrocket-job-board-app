import Job from "./Job.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function JobSection({category, jobOpened, setJobOpened, detailsIsOpen, setDetailsIsOpen, applyIsOpen, setApplyIsOpen}){
    const [displayedJobs, setDisplayedJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getJobs = async() => {
            try{
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getAllJobs`);
                const filteredJobs = res.data.filter((job) => job.field.toLowerCase() == category.toLowerCase());
                setDisplayedJobs(filteredJobs.slice(0, 3));
            }catch(err){
                console.log(err);
            }
        }
        getJobs();
    }, [category])

    return(
        <div className="mt-[2em]">
            <div className="flex items-center">
                <p className="text-[1.4rem] sm:text-[1.5rem] lg:w-[60%] pt-[0.5em] py-[1em] font-bold grow">{category.charAt(0).toUpperCase() + category.slice(1)} Jobs</p>
                <p className="text-[0.9rem] text-gray-800 cursor-pointer hover:underline" onClick={() => {navigate(`/jobs/${category.toLowerCase()}`)}}>See More</p>
            </div>
            {displayedJobs.map((job, index) => (
                <div key={index} className="py-[1.5em] border-b border-gray-300">
                    <Job job={job} seeMore={false} jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} applyIsOpen={applyIsOpen} setApplyIsOpen={setApplyIsOpen} />
                </div> 
            ))}
        </div>
    )
}

export default JobSection;