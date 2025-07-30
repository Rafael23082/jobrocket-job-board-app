function Job({img, role, company, where, salary}){
    return(
        <div className="flex items-center" style={{fontFamily: "'Roboto', sans-serif"}}>
            <div className="w-[50px] h-[50px] border border-gray-200 rounded-[10px]">
                <img src={`${img}`} className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex items-start md:items-center flex-col md:flex-row w-full">
                <div className="pl-[2em] flex flex-col w-full grow">
                    <p className="font-bold text-[1.1rem]">{role}</p>
                    <p className="text-[0.9rem] text-gray-800">{company} | {where} | {salary}</p>
                </div>
                <div className="flex pl-[2em] mt-[1em] md:mt-0">
                    <button className="border border-[#3B82F6] text-[#3B82F6] px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ease duration-[0.3s]">Description</button>
                    <button className="bg-[#3B82F6] text-white px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]">Apply</button>
                </div>
            </div>
        </div>
    )
}

export default Job;