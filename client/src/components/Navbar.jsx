function Navbar({current}){
    return(
        <>
            <div className="flex font-medium justify-between items-center px-[3em] py-[1em]" style={{fontFamily: "'Roboto', sans-serif"}}>
                <p className="text-[2rem] font-bold" style={{fontFamily: "'Raleway', sans-serif"}}>JobRocket</p>
                <div className="flex text-[0.9rem]">
                    <p className={`cursor-pointer ${current == "Overview" ? "text-[#2563EB]": "text-[#1F2937] hover:text-[#3B82F6] transition duration-[0.3s] ease"}`}>Overview</p>
                    <p className={`cursor-pointer pl-[2em] ${current == "Jobs" ? "text-[#2563EB]": "text-[#1F2937] hover:text-[#3B82F6] transition duration-[0.3s] ease"}`}>Jobs</p>
                    <p className={`cursor-pointer pl-[2em] ${current == "Pricing" ? "text-[#2563EB]": "text-[#1F2937] hover:text-[#3B82F6] transition duration-[0.3s] ease"}`}>Pricing</p>
                </div>
                <div>
                    <button className="border border-[#3B82F6] text-[#3B82F6] px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ease duration-[0.3s]">Log In</button>
                    <button className="bg-[#3B82F6] text-white px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]">Sign In</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;