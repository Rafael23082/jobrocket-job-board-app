import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";

function JobsCategoryPage(){
    const {field} = useParams();
    return(
        <section className="py-[3em] padding-x px-10">
            <div className="max-w-[1300px] mx-auto">
                <Pagination category={field} />
            </div>
        </section>
    )
}

export default JobsCategoryPage;