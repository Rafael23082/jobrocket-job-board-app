import Job from "./Job.jsx";
import JobData from "./JobData.jsx";

function JobSection({category}){
    const filteredJobs = JobData.filter((job) => job.field == category);
    const displayedJobs = filteredJobs.slice(0, 6);

    return(
        <div className="mt-[2em]">
            <div className="flex items-center">
                <p className="text-[1.5rem] lg:w-[60%] pt-[0.5em] py-[1em] subheading font-bold grow">{category} Jobs</p>
                <p className="text-[0.9rem] text-gray-800 cursor-pointer hover:underline">See More</p>
            </div>
            {displayedJobs.map((job) => (
                <div className="py-[1em] border-b border-gray-200">
                    <Job img={job.img} role={job.role} company={job.company} where={job.where} salary={job.salary} />
                </div> 
            ))}
        </div>
    )
}

export default JobSection;