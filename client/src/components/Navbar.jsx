function Navbar({current}){
    return(
        <>
            <div className="flex font-medium justify-between items-center px-[3em] py-[1em]" style={{fontFamily: "'Raleway', sans-serif"}}>
                <p className="text-[2rem] font-bold">JobRocket</p>
                <div className="flex text-[0.9rem]">
                    <p className={`cursor-pointer ${current == "Overview" ? "text-[#2563EB]": "text-[#1F2937] hover:text-[#3B82F6] transition duration-[0.3s] ease"}`}>Overview</p>
                    <p className={`cursor-pointer pl-[1em] ${current == "Jobs" ? "text-[#2563EB]": "text-[#1F2937] hover:text-[#3B82F6] transition duration-[0.3s] ease"}`}>Jobs</p>
                    <p className={`cursor-pointer pl-[1em] ${current == "Pricing" ? "text-[#2563EB]": "text-[#1F2937] hover:text-[#3B82F6] transition duration-[0.3s] ease"}`}>Pricing</p>
                </div>
                <div>
                    <button className="border border-[#3B82F6] text-[#3B82F6] px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em]">Log In</button>
                    <button className="bg-[#3B82F6] text-white px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold">Sign In</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;