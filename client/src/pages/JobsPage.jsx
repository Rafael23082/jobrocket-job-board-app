import Navbar from "../components/Navbar.jsx";

function JobsPage(){
    return(
        <>
            <header className="sticky top-0 z-100 bg-white">
                <div className="mx-auto max-w-[1300px]">
                <Navbar current={"Jobs"} />  
                </div>
            </header>
        </>
    )
}

export default JobsPage;