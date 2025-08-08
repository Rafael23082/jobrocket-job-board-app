import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import { useState } from "react";
import DescriptionSlideOverPanel from "../components/DescriptionSlideOverPanel.jsx";
import Navbar from "../components/Navbar.jsx";
import { useEffect } from "react";

function JobsCategoryPage(){
    const {field} = useParams();
    const [jobOpened, setJobOpened] = useState({});
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);

    useEffect(() => {
        if (detailsIsOpen){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [detailsIsOpen])
    return(
        <>
        <header className="block top-0 shadow z-50">
            <div className="mx-auto max-w-[1300px]">
                <Navbar current={"Jobs"} />  
            </div>
        </header>
        
        <section className="flex max-w-[1300px] mx-auto">
            <div className={`overflow-x-hidden w-[100%] padding-x px-10 py-[5em]`}>
                <Pagination category={field} jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} />
            </div>
        </section>
        {
            detailsIsOpen && (
                <DescriptionSlideOverPanel jobOpened={jobOpened} setJobOpened={setJobOpened} detailsIsOpen={detailsIsOpen} setDetailsIsOpen={setDetailsIsOpen} />
            )
        }
        </>
    )
}

export default JobsCategoryPage;