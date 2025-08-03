import Job from "./Job.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function JobSection({category}){
    const [displayedJobs, setDisplayedJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getJobs = async() => {
            const res = await axios.get("http://localhost:4000/api/jobs/getAllJobs");
            const filteredJobs = res.data.filter((job) => job.field == category);
            setDisplayedJobs(filteredJobs.slice(0, 3));
        }
        getJobs();
    }, [category])

    return(
        <div className="mt-[2em]">
            <div className="flex items-center">
                <p className="text-[1.5rem] lg:w-[60%] pt-[0.5em] py-[1em] subheading font-bold grow">{category} Jobs</p>
                <p className="text-[0.9rem] text-gray-800 cursor-pointer hover:underline" onClick={() => {navigate(`/jobs/${category}`)}}>See More</p>
            </div>
            {displayedJobs.map((job) => (
                <div className="py-[1.5em] border-b border-gray-200">
                    <Job img={"innova.png"} role={job.role} company={job.company} where={job.location} salary={job.min} tags={job.tags} seeMore={false} />
                </div> 
            ))}
        </div>
    )
}

export default JobSection;