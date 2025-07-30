import Job from "../components/Job.jsx";
import Navbar from "../components/Navbar.jsx";
import JobSection from "../components/JobSection.jsx";

function JobsPage(){
    return(
        <>
            <header>
                <div className="mx-auto max-w-[1300px]">
                <Navbar current={"Jobs"} />  
                </div>
            </header>

            <section className="py-[5em] md:py-[7em] padding-x px-10">
                <div className="max-w-[1300px] mx-auto">
                    <p className="font-bold text-[1.5rem] lg:text-[2.5rem] w-[70%]">Find the Right Job, Right Here.</p>
                    <p className="text-[1.2rem] lg:w-[60%] pt-[0.5em] subheading">Explore thousands of opportunities tailored to your skills, goals, and ambition.</p>

                    <JobSection category={"Tech"} />
                    <JobSection category={"Design"} />
                    <JobSection category={"Data"} />
                    <JobSection category={"Business"} />
                    <JobSection category={"Marketing"} />
                </div>
            </section>
        </>
    )
}

export default JobsPage;