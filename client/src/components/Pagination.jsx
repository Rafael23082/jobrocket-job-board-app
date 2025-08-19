import { useContext, useState } from "react";
import Job from "./Job.jsx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";
import { BarLoader } from "react-spinners";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function Pagination({category, jobOpened, setJobOpened, detailsIsOpen, setDetailsIsOpen, applyIsOpen, setApplyIsOpen, dashboard}){
    const [page, setPage] = useState(1);
    const maxDisplayed = 5;
    const [maxPages, setMaxPages] = useState(0);
    const [displayedJobs, setDisplayedJobs] = useState([]);

    const {user} = useContext(UserContext);

    const fetchJobs = async() => {
        let filteredJobs;
        let res;
        if (category != "Saved" && category != "All" && category != "Applications"){
            res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getAllJobs`);       
            if (category == "All"){
                filteredJobs = res.data;
            } else {
                filteredJobs = res.data.filter((job) => job.field == category);
            }                
        } else if (category == "All"){
            res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getNotAppliedJobs/${user._id}`)
            filteredJobs = res.data;
        } else if (category == "Saved"){
            res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getSavedJobs/${user._id}`)
            filteredJobs = res.data;
        } else if (category == "Applications"){
            res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getAppliedJobs/${user._id}`)
            filteredJobs = res.data;
        }

        return filteredJobs;
    }

    const {data: allJobs = [], isLoading} = useQuery({
        queryKey: [category],
        queryFn: () => fetchJobs(),
        keepPreviousData: true
    })

    const startIndex = (page - 1) * maxDisplayed;
    const endIndex = startIndex + maxDisplayed;

    useEffect(() => {
        if (allJobs.length) {
            setMaxPages(Math.ceil(allJobs.length / maxDisplayed));
            setDisplayedJobs(allJobs.slice(startIndex, endIndex));
        }
    }, [allJobs, page]);

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
                <p className="text-[1.4rem] sm:text-[1.5rem] lg:w-[60%] pt-[0.5em] py-[1em] font-bold grow">{category} Jobs</p>
            </div>
            {isLoading ? (
                <div className={`w-[100%] h-[100vh] flex absolute top-0 bg-white left-0 justify-center items-center z-0`}>
                    <BarLoader
                        color={"#3B82F6"}
                        loading={isLoading}
                        height={4}
                        width={100}
                    />
                </div>
            ): (
                displayedJobs.map((job, index) => (
                    <div className="py-[1.5em] border-b border-gray-200" key={index}>
                        <Job job={job} seeMore={true} jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} applyIsOpen={applyIsOpen} setApplyIsOpen={setApplyIsOpen} dashboard={dashboard} applications={category == "Applications"} />
                    </div> 
                ))
            )}
            <div className="flex items-center justify-center mt-[2em]">
                <span className={`text-[#3B82F6] cursor-pointer ${page == 1 ? "invisible": "flex"}`} onClick={() => {handleBack(); window.scrollTo({top: 0, behavior: "instant"})}}><MdKeyboardArrowLeft size={25} color="#3B82F6" />Back</span>
                <div className="px-[1em] py-[0.5em] border border-[#3B82F6] rounded-[10px] mx-[1em]">{page}</div>
                <span className={`text-[#3B82F6] cursor-pointer ${page == maxPages || maxPages == 0 ? "invisible": "flex"}`} onClick={() => {handleNext(); window.scrollTo({top: 0, behavior: "instant"})}}>Next <MdKeyboardArrowRight size={25} color="#3B82F6" /></span>
            </div>
        </div>
    )
}

export default Pagination;