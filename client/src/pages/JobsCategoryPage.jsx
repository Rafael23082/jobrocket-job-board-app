import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import { useState } from "react";
import DescriptionSlideOverPanel from "../components/DescriptionSlideOverPanel.jsx";

function JobsCategoryPage(){
    const {field} = useParams();
    const [jobOpened, setJobOpened] = useState({});
    return(
        <>
        <section className="py-[3em]">
            <div className="max-w-[1300px] mx-auto flex overflow-hidden">
                <div className={`${Object.keys(jobOpened).length == 0 ? "w-[100%]" : "w-[100%] lg:w-[60%]"} padding-x px-10 transition-all duration-1WD00 ease duration-[0.3s]`}>
                    <Pagination category={field} jobOpened={jobOpened} setJobOpened={setJobOpened} />
                </div>
                <DescriptionSlideOverPanel jobOpened={jobOpened} setJobOpened={setJobOpened} />
            </div>
        </section>
        </>
    )
}

export default JobsCategoryPage;