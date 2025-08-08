function Job({job, seeMore, jobOpened, setJobOpened, detailsIsOpen, setDetailsIsOpen, applyIsOpen, setApplyIsOpen}){
    return(
            <div className="flex items-start md:items-center flex-col md:flex-row" style={{fontFamily: "'Roboto', sans-serif"}}>
                <div className="grow">
                    <div className="flex items-start md:items-center flex-col md:flex-row md:ml-0">
                        <div className="w-[50px] h-[50px] border border-gray-200 rounded-[10px] shrink-0">
                            <img src={`/innova.png`} className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="grow md:pl-[2em] pl-0">
                            <div className="flex items-center md:mt-0 mt-[1em]">
                                <p className="font-bold text-[1.1rem]">{job.role}</p>
                            </div>
                            {seeMore && <p className="text-[0.9rem] text-gray-800">{job.description}</p>}
                            <span className="text-[0.9rem] text-gray-800 mt-[0.5em] flex gap-x-[0.3em]">
                                {job.company && <p>🏢 {job.company}</p>} {job.location && <p>| 🌐 {job.location}</p>} {job.salary && <p>| 💵 ${job.salary?.min} - ${job.salary?.max}</p>} {seeMore && <p>| 📊 {job.experience}</p>} {seeMore && <p>| 🕒 {job.employmentType}</p>}
                            </span>
                            <div className="flex mt-[0.8em] md:mt-[0.6em] flex-wrap gap-x-[0.7em] gap-y-[0.5em]">
                                {job.tags.map((tag, index) => (
                                    <div key={index} className={`text-white bg-[#3B82F6] px-[0.5em] py-[0.3em] text-[0.7rem] rounded-[5px]`}>
                                        <p>{tag}</p>
                                    </div>
                                ))}
                                { seeMore &&
                                    <div className={`text-white bg-[#10B981] px-[0.5em] py-[0.3em] text-[0.7rem] rounded-[5px]`}>
                                        <p>{job.openings} Openings</p>
                                    </div>
                                }
                            </div>
                            {seeMore && <p className="text-gray-800 pt-[1em] text-[0.8rem]">{job.postedAt}</p>}
                        </div>
                    </div>
                </div>
                <div className="flex pl-0 md:pl-[2em] mt-[1.2em] md:mt-0">
                    <button className="border border-[#3B82F6] text-[#3B82F6] px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ease duration-[0.3s]" onClick={() => {setJobOpened(job); setDetailsIsOpen(true)}}>Details</button>
                    <button className="bg-[#3B82F6] text-white px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]" onClick={() => {setJobOpened(job); setApplyIsOpen(true)}}>Apply</button>
                </div>
            </div>
    )
}

export default Job;