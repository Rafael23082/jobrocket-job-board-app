    import { useState } from "react";
    import JobData from "./JobData.jsx";
    import Job from "./Job.jsx";
    import { MdKeyboardArrowLeft } from "react-icons/md";
    import { MdKeyboardArrowRight } from "react-icons/md";
    import { useEffect } from "react";
    import axios from "axios";
    import { BarLoader } from "react-spinners";

    function Pagination({category}){
        const [page, setPage] = useState(1);
        const maxDisplayed = 5;
        const [maxPages, setMaxPages] = useState(0);
        const [displayedJobs, setDisplayedJobs] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const getJobs = async() => {
                try{
                    const startIndex = (page - 1) * maxDisplayed;
                    const endIndex = startIndex + maxDisplayed;
                    const res = await axios.get("http://localhost:4000/api/jobs/getAllJobs");
                    const filteredJobs = res.data.filter((job) => job.field == category);
                    setMaxPages(Math.ceil(filteredJobs.length/maxDisplayed));
                    setDisplayedJobs(filteredJobs.slice(startIndex, endIndex));
                }catch(err){
                    console.log(err);
                }finally{
                    setTimeout(() => {
                        setLoading(false);
                    }, 300)
                }
            }
            getJobs();
        }, [category, page])

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
                {loading ? (
                    <div className="flex w-[100%] h-[100vh] absolute top-0 bg-white left-0 justify-center items-center z-0">
                        <BarLoader
                            color={"#3B82F6"}
                            loading={loading}
                            height={4}
                            width={100}
                        />
                    </div>
                ): (
                    displayedJobs.map((job) => (
                        <div className="py-[1.5em] border-b border-gray-200">
                            <Job img={"innova.png"} role={job.role} company={job.company} where={job.location} salary={job.min} tags={job.tags} description={job.description} experience={job.experience} employmentType={job.employmentType} posted={job.postedAt} seeMore={true} />
                        </div> 
                    ))
                )}
                <div className="flex items-center justify-center mt-[2em]">
                    <span className={`text-[#3B82F6] cursor-pointer ${page == 1 ? "invisible": "flex"}`} onClick={() => {handleBack(); window.scrollTo({top: 0, behavior: "instant"})}}><MdKeyboardArrowLeft size={25} color="#3B82F6" />Back</span>
                    <div className="px-[1em] py-[0.5em] border border-[#3B82F6] rounded-[10px] mx-[1em]">{page}</div>
                    <span className={`text-[#3B82F6] cursor-pointer ${page == maxPages ? "invisible": "flex"}`} onClick={() => {handleNext(); window.scrollTo({top: 0, behavior: "instant"})}}>Next <MdKeyboardArrowRight size={25} color="#3B82F6" /></span>
                </div>
            </div>
        )
    }

    export default Pagination;