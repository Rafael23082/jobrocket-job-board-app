function Footer(){
    return(
        <div className="w-[100%] bg-[#1F2937] padding-x px-10 py-[4em] flex flex-col md:flex-row">
            <p className="text-[2rem] font-bold text-white w-[100%] md:w-[40%]" style={{fontFamily: "'Raleway', sans-serif"}}>JobRocket</p>
            <div className="w-[20%] text-white" style={{fontFamily: "'Roboto', sans-serif"}}>
                <p className="text-[0.9rem] md:text-[1.3rem] font-bold mt-[1.5em] md:mt-0" style={{fontFamily: "'Raleway', sans-serif"}}>Welcome</p>
                <p className="pt-[0.3em] md:pt-[0.75em] text-[0.9rem] cursor-pointer hover:underline w-fit">Home</p>
            </div>
            <div className="w-[100%] md:w-[20%] text-white" style={{fontFamily: "'Roboto', sans-serif"}}>
                <p className="mt-[1.5em] md:mt-0 text-[0.9rem] md:text-[1.3rem] font-bold" style={{fontFamily: "'Raleway', sans-serif"}}>For Candidates</p>
                <p className="pt-[0.3em] md:pt-[0.75em] text-[0.9rem] cursor-pointer hover:underline w-fit">Overview</p>
                <p className="pt-[0.3em] md:pt-[0.75em] text-[0.9rem] cursor-pointer hover:underline w-fit">Jobs</p>
            </div>
            <div className="w-[100%] md:w-[20%] text-white" style={{fontFamily: "'Roboto', sans-serif"}}>
                <p className="mt-[1.5em] md:mt-0 text-[0.9rem] md:text-[1.3rem] font-bold" style={{fontFamily: "'Raleway', sans-serif"}}>For Recruiters</p>
                <p className="pt-[0.3em] md:pt-[0.75em] text-[0.9rem] cursor-pointer hover:underline w-fit">Overview</p>
                <p className="pt-[0.3em] md:pt-[0.75em] text-[0.9rem] cursor-pointer hover:underline w-fit">Pricing</p>
            </div>
        </div>
    )
}

export default Footer;