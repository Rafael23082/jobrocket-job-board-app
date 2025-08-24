function ApplicantCard({applicant}){
    return(
        <div className="flex items-start md:items-center flex-col md:flex-row relative py-[1.5em] border-b border-gray-200" style={{fontFamily: "'Roboto', sans-serif"}}>
            <div className="grow">
                <div className="flex items-start md:items-center flex-col md:flex-row md:ml-0">
                    <div className="w-[50px] h-[50px] border border-gray-200 rounded-[10px] shrink-0">
                        <img src={`/innova.png`} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="grow md:pl-[2em] pl-0">
                        <span className="block font-bold text-[1.1rem] mt-[1em] md:mt-0">{applicant.name}</span>
                        <p className="text-[0.9rem] text-gray-800 pt-[0.5em] md:pt-[0.2em]">{applicant.email}</p>
                        <span className="text-[0.9rem] text-gray-800 pt-[0.5em] md:pt-[0.2em] flex gap-x-[0.3em] text-gray-800">
                            <p>🌐 {applicant.location} </p><p>| ℹ️ {applicant.additionalInformation}</p>
                        </span>
                    </div>
                </div>
            </div>
            <button className={`bg-[#3B82F6] text-white px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s] whitespace-nowrap mt-[1.2em] md:mt-0`}>View Resume</button>
        </div>
    )
}

export default ApplicantCard;