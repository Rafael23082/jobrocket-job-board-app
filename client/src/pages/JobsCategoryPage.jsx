import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import { useState } from "react";
import DescriptionSlideOverPanel from "../components/DescriptionSlideOverPanel.jsx";
import Navbar from "../components/Navbar.jsx";

function JobsCategoryPage(){
    const {field} = useParams();
    const [jobOpened, setJobOpened] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <header className="block top-0 shadow z-50">
            <div className="mx-auto max-w-[1300px]">
                <Navbar current={"Jobs"} />  
            </div>
        </header>
        
        <section className="flex max-w-[1300px] mx-auto">
            <div className={`max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden ${isOpen ? "hidden lg:block lg:w-[60%]": "w-[100%]"} padding-x px-10 py-[5em]`}>
                <Pagination category={field} jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            {
                isOpen && (
                    <div className="w-[100%] lg:w-[40%]">
                        <DescriptionSlideOverPanel jobOpened={jobOpened} setJobOpened={setJobOpened} isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                )
            }
        </section>
        </>
    )
}

export default JobsCategoryPage;