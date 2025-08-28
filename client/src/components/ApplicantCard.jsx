import { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import axios from "axios";

function ApplicantCard({applicant, jobID, refetch}){
    const [optionOpen, setOptionOpen] = useState(false);

    useEffect(() => {
        console.log("Applicant: ", applicant)
    })

    const handleApplicantAction = async({status}) => {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/application/updateApplicationStatus/${applicant._id}/${jobID}`, {
            status: status
        })
        refetch();
        setOptionOpen(false);
    }
    return(
        <div className="flex items-start md:items-center flex-col md:flex-row relative py-[1.5em] border-b border-gray-200 relative" style={{fontFamily: "'Roboto', sans-serif"}}>
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
                        <p className={`text-[0.9rem] ${applicant.status == "interview" && "text-green-700"} ${applicant.status == "pending" && "text-orange-600"} ${applicant.status == "rejected" && "text-red-700"} pt-[0.5em] md:pt-[0.2em]`}>Status: {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}</p>
                    </div>
                </div>
            </div>
            <button className={`bg-[#3B82F6] text-white px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s] whitespace-nowrap mt-[1.2em] md:mt-0`} onClick={() =>{
                window.open(applicant.resume);
            }}>Download Resume</button>
            <div className="absolute top-0 right-0 flex flex-col items-end text-[0.9rem]">
                <HiOutlineDotsVertical className="cursor-pointer" size={18} onClick={() => {
                    setOptionOpen(!optionOpen)
                }} />
                {optionOpen && (
                    <div className="shadow-lg bg-white px-[1em] py-[0.8em] rounded-[5px] mt-[1em]">
                        <span className="flex items-center gap-x-[0.5em] cursor-pointer" onClick={() => {
                            handleApplicantAction({status: "interview"})
                        }}>
                            <FaCalendarCheck color="green" />
                            <p>Interview</p>
                        </span>
                        <span className="flex items-center gap-x-[0.5em] mt-[0.5em] cursor-pointer" onClick={() => {
                            handleApplicantAction({status: "rejected"})
                        }}>
                            <FaRegTrashAlt color="red" />
                            <p>Reject</p>
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ApplicantCard;