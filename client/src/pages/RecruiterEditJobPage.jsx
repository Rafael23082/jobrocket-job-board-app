import JobInput from "../components/JobInput.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function RecruiterEditJobPage(){
    const {jobID} = useParams();
    const [formValues, setFormValues] = useState({});
    const [initialValues, setInitialValues] = useState({});
    const navigate = useNavigate();
    const backendAction = async() => {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/job/updateJobByID/${jobID}`, {
            role: formValues["role"],
            company: formValues["company"],
            location: formValues["location"],
            field: formValues["field"],
            "salary.min": formValues["minimumSalary"],
            "salary.max": formValues["maximumSalary"],
            description: formValues["description"],
            employmentType: formValues["employmentType"],
            openings: formValues["openings"],
            tags: formValues["tags"],
            requirements: formValues["requirements"],
            experience: formValues["experience"]
        });
        toast.success("Job successfully updated.", {
            description: `${formValues["role"]} job details updated.`
        })
        navigate("/recruiter/job-listings")
    }

    const fetchJob = async() => {
        let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getJobByID/${jobID}`);
        return res.data;
    }

    const {data: job = {}, isLoading} = useQuery({
        queryKey: ['editJob', jobID],
        queryFn: () => fetchJob(),
        keepPreviousData: true
    })

    useEffect(() => {
        console.log(job);
        let values = {
            ["role"]: job?.role ?? "loading...",
            ["company"]: job?.company ?? "loading...",
            ["location"]: job?.location ?? "loading...",
            ["field"]: job?.field ?? "loading...",
            ["minimumSalary"]: job?.salary?.min ?? "",
            ["maximumSalary"]: job?.salary?.max ?? "",
            ["description"]: job?.description ?? "loading...",
            ["employmentType"]: job?.employmentType ?? "loading...",
            ["openings"]: job?.openings ?? "",
            ["tags"]: job?.tags ?? [],
            ["requirements"]: job?.requirements ?? [""],
            ["experience"]: job?.experience ?? ""
        }
        setFormValues(values);
        setInitialValues(values);
    }, [job])

    return(
        <JobInput formValues={formValues} setFormValues={setFormValues} initialValues={initialValues} setInitialValues={setInitialValues} backendAction={backendAction} isLoading={isLoading} addJob={false} />
    )
}

export default RecruiterEditJobPage;