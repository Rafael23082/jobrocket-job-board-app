import { useContext, useState } from "react";
import Job from "./Job.jsx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";

function Pagination({data, field, isLoading, jobOpened, setJobOpened, detailsIsOpen, setDetailsIsOpen, applyIsOpen, setApplyIsOpen, dashboard, refetch}){
    const [page, setPage] = useState(1);
    const maxDisplayed = 5;
    const [maxPages, setMaxPages] = useState(0);
    const [displayedJobs, setDisplayedJobs] = useState([]);

    const startIndex = (page - 1) * maxDisplayed;
    const endIndex = startIndex + maxDisplayed;

    useEffect(() => {
        setMaxPages(Math.ceil(data.length / maxDisplayed));
        setDisplayedJobs(data.slice(startIndex, endIndex));
        if (data.length == 0){
            setMaxPages(0);
            setDisplayedJobs([]);
        }
        console.log(field)
    }, [data, page]);

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
        <div className={`${dashboard ? "mt-0": "my-[2em]"}`}>
            <div className={`items-center ${dashboard ? "hidden": "flex"}`}>
                <p className="text-[1.4rem] sm:text-[1.5rem] lg:w-[60%] pt-[0.5em] py-[1em] font-bold grow">{field.charAt(0).toUpperCase() + field.slice(1)} Jobs</p>
            </div>
            {displayedJobs.map((job, index) => (
                <div className="py-[1.5em] border-b border-gray-200" key={index}>
                    <Job data={data} job={job} seeMore={true} jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} applyIsOpen={applyIsOpen} setApplyIsOpen={setApplyIsOpen} dashboard={dashboard} field={field} refetch={refetch} />
                </div> 
            ))}
            {data.length != 0 && (
                <div className="flex items-center justify-center mt-[2em]">
                    <span className={`text-[#3B82F6] cursor-pointer ${page == 1 ? "invisible": "flex"}`} onClick={() => {handleBack(); window.scrollTo({top: 0, behavior: "instant"})}}><MdKeyboardArrowLeft size={25} color="#3B82F6" />Back</span>
                    <div className="px-[1em] py-[0.5em] border border-[#3B82F6] rounded-[10px] mx-[1em]">{page}</div>
                    <span className={`text-[#3B82F6] cursor-pointer ${page == maxPages || maxPages == 0 ? "invisible": "flex"}`} onClick={() => {handleNext(); window.scrollTo({top: 0, behavior: "instant"})}}>Next <MdKeyboardArrowRight size={25} color="#3B82F6" /></span>
                </div>
            )}
        </div>
    )
}

export default Pagination;