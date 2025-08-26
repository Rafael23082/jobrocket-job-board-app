import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import { useState } from "react";
import DescriptionSlideOverPanel from "../components/DescriptionSlideOverPanel.jsx";
import Navbar from "../components/Navbar.jsx";
import { useEffect } from "react";
import ApplicationFormModal from "../components/ApplicationFormModal.jsx";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";

function JobsCategoryPage(){
    const {field} = useParams();
    const [jobOpened, setJobOpened] = useState({});
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [applyIsOpen, setApplyIsOpen] = useState(false);

    useEffect(() => {
        if (detailsIsOpen || applyIsOpen){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [detailsIsOpen, applyIsOpen])

    const fetchJobs = async() => {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getAllJobs`);       
        const filteredJobs = res.data.filter((job) => job.field.toLowerCase() == field.toLowerCase());   
        return filteredJobs;
    }

    const {data: allJobs = [], isLoading} = useQuery({
        queryKey: [field],
        queryFn: () => fetchJobs(),
        keepPreviousData: true
    })

    return(
        <>
        <header className="block top-0 shadow z-50">
            <div className="mx-auto max-w-[1300px]">
                <Navbar current={"Jobs"} />  
            </div>
        </header>
        
        <section className="flex max-w-[1300px] mx-auto">
            <div className={`overflow-x-hidden w-[100%] padding-x px-10`}>
                <Pagination data={allJobs} field={field} jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} applyIsOpen={applyIsOpen} setApplyIsOpen={setApplyIsOpen} dashboard={false} />
            </div>
        </section>
        {
            detailsIsOpen && (
                <DescriptionSlideOverPanel jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} />
            )
        }
        {
            applyIsOpen && (
                <ApplicationFormModal jobOpened={jobOpened} setJobOpened={setJobOpened} applyIsOpen={applyIsOpen} setApplyIsOpen={setApplyIsOpen} />
            )
        }
        {isLoading && (
            <div className={`w-[100%] min-h-[100vh] flex absolute top-0 bg-white left-0 items-center z-0`}>
                <DashboardSideNavbar placeholder={true} />
                <div className="flex grow justify-center">
                    <BarLoader
                        color={"#3B82F6"}
                        loading={isLoading}
                        height={4}
                        width={100}
                    />
                </div>
            </div>
        )}
        </>
    )
}

export default JobsCategoryPage;