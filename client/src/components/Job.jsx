import { useContext, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { UserContext } from "../context/UserContext.jsx";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "sonner";
import { useQuery } from "@tanstack/react-query";

function Job({job, seeMore, jobOpened, setJobOpened, detailsIsOpen, setDetailsIsOpen, applyIsOpen, setApplyIsOpen, dashboard, field, listings, refetch}){
    const applications = field == "Applications";
    const saved = field == "Saved";
    const {user, setUser} = useContext(UserContext);
    const bookmarked = dashboard && user?.savedJobs?.includes(job._id);
    const navigate = useNavigate();

    const handleSaveJob = async() => {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/job/saveJob`, {
            userID: user._id,
            jobID: job._id
        }, {withCredentials: true})
        setUser((prev) => ({
            ...prev, savedJobs: [...prev.savedJobs, job._id]
        }))
        if (saved){
            refetch();
        }
    }

    const handleRemoveSavedJob = async() => {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/job/removeSavedJob`, {
            userID: user._id,
            jobID: job._id
        }, {withCredentials: true})
        setUser((prev) => ({
            ...prev, savedJobs: prev.savedJobs.filter((jobID) => jobID != job._id)
        }))

        if (saved){
            refetch();
            toast.success("Job removed successfully.", {
                description: `${job.role} removed from saved jobs.`,
                action: {
                    label: "Undo",
                    onClick: () => handleSaveJob()
                }
            })
        }
    }
    const handleApplyLoggedIn = async() => {
        if (user?.name?.trim() && user?.email?.trim() && user?.location?.trim() && user?.additionalInformation?.trim() && user?.resume?.trim() != ""){
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/application/applyJob`, {
                userID: user._id,
                jobID: job._id
            }, {withCredentials: true})
            toast.success("Application submitted successfully!", {
                description: "We'll notify you if the recruiter responds."
            })
            refetch();
        }else{
            toast.error("Profile incomplete.", {
                description: "Please finish your profile before applying."
            })
        }
    }

    const getApplicationStatus = async() => {
        if (applications){
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/application/getApplicationByUserIDAndJobID/${user._id}/${job._id}`, {withCredentials: true});
            const application = res.data;
            return application.status.charAt(0).toUpperCase() + application.status.slice(1);
        }else{
            return "Undefined."
        }
    }

    const {data: status = "Loading..."} = useQuery({
        queryKey: [job],
        queryFn: () => getApplicationStatus(),
        keepPreviousData: true
    })

    return(
            <div className="flex items-start md:items-center flex-col md:flex-row relative" style={{fontFamily: "'Roboto', sans-serif"}}>
                <div className="grow">
                    <div className="flex items-start md:items-center flex-col md:flex-row md:ml-0">
                        <div className="w-[50px] h-[50px] border border-gray-200 rounded-[10px] shrink-0">
                            <img src={`/innova.png`} className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="grow md:pl-[2em] pl-0">
                            <div className="flex items-center md:mt-0 mt-[1em]">
                                <span className="font-bold text-[1.1rem] flex items-center gap-x-[1em]">{job.role} {bookmarked && dashboard && <FaBookmark size={18} className="md:hidden cursor-pointer" color="#3B82F6" onClick={handleRemoveSavedJob} />} {!bookmarked && dashboard && <FaRegBookmark size={18} className="md:hidden cursor-pointer" color="#3B82F6" onClick={handleSaveJob} />}</span>
                            </div>
                            {seeMore && <p className="text-[0.9rem] text-gray-800 pt-[0.5em] md:pt-[0.2em]">{job.description}</p>}
                            <span className="text-[0.9rem] text-gray-800 mt-[0.5em] flex gap-x-[0.3em] flex-wrap">
                                {job.company && <p>🏢 {job.company}</p>} {job.location && <p>| 🌐 {job.location}</p>} {job.salary && <p>| 💵 ${job.salary?.min} - ${job.salary?.max}</p>} {seeMore || listings && <p>| 📊 Min. {job.experience} years</p>} {seeMore || listings && <p>| 🕒 {job.employmentType}</p>}
                            </span>
                            <div className="flex mt-[0.8em] md:mt-[0.6em] flex-wrap gap-x-[0.7em] gap-y-[0.5em]">
                                {job.tags.map((tag, index) => (
                                    <div key={index} className={`text-white bg-[#3B82F6] px-[0.5em] py-[0.3em] text-[0.7rem] rounded-[5px]`}>
                                        <p>{tag}</p>
                                    </div>
                                ))}
                                { seeMore || listings &&
                                    <div className={`text-white bg-[#10B981] px-[0.5em] py-[0.3em] text-[0.7rem] rounded-[5px]`}>
                                        <p>{job.openings} Openings</p>
                                    </div>
                                }
                            </div>
                            {seeMore && <p className="text-gray-800 pt-[1em] text-[0.8rem]">{job.postedAt}</p>}
                            {listings && (
                                <div className="flex items-center flex-wrap gap-x-[1em] pt-[1em]">
                                    <p className="text-[0.9rem]">👥 {job.applications} Applicants</p>
                                    <p className="text-[0.9rem] cursor-pointer text-blue-500 hover:underline" onClick={() => navigate(`/recruiter/applicants/${job?._id}`)}>[👁 View Applicants]</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex pl-0 md:pl-[2em] mt-[1.2em] md:mt-0">
                    <button className="border border-[#3B82F6] text-[#3B82F6] px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ease duration-[0.3s] whitespace-nowrap" onClick={() => {setJobOpened(job); setDetailsIsOpen(true)}}>Details</button>
                    <button className={`text-white px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold ${status.toLowerCase() == "pending" && "bg-gray-600"} ${status.toLowerCase() == "rejected" && "bg-red-700"} ${status.toLowerCase() == "hired" && "bg-green-700"} ${status.toLowerCase() == "interview" && "bg-yellow-600"} ${!applications && "bg-[#3B82F6] cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]"} whitespace-nowrap`} onClick={() => {
                        if (listings){
                            navigate(`/recruiter/edit-job/${job._id}`)
                        }else if (!dashboard && !applications){
                            setJobOpened(job); 
                            setApplyIsOpen(true);
                        }else if (!applications && dashboard){
                            handleApplyLoggedIn();
                        }
                    }}>{applications && `${status}`}{!applications && !listings && "Apply"}{listings && "Edit"}</button>
                </div>
                {bookmarked && <FaBookmark size={18} className="hidden md:block cursor-pointer absolute top-0 right-0" color="#3B82F6" onClick={handleRemoveSavedJob} />} {!bookmarked && dashboard && <FaRegBookmark size={18} className="hidden md:block cursor-pointer absolute top-0 right-0" color="#3B82F6" onClick={handleSaveJob} />}
            </div>
    )
}

export default Job;