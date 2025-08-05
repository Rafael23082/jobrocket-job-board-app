import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import { useState } from "react";
import DescriptionSlideOverPanel from "../components/DescriptionSlideOverPanel.jsx";

function JobsCategoryPage(){
    const {field} = useParams();
    const [jobOpened, setJobOpened] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <section className="py-[3em]">
            <div className="max-w-[1300px] mx-auto flex overflow-hidden">
                <div className={`${isOpen ? "w-[100%] lg:w-[60%] " : "w-[100%]"} padding-x px-10 transition-all duration-1WD00 ease duration-[0.3s]`}>
                    <Pagination category={field} jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                <DescriptionSlideOverPanel jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </section>
        </>
    )
}

export default JobsCategoryPage;