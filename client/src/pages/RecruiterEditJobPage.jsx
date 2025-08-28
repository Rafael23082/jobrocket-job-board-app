import JobInput from "../components/JobInput.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function RecruiterEditJobPage(){
    const {jobID} = useParams();
    const [formValues, setFormValues] = useState({});
    const [initialValues, setInitialValues] = useState({});
    const backendAction = async() => {
        let res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/job/updateJobByID/${jobID}`, {
            role: formValues["Role"],
            company: formValues["Company"],
            location: formValues["Location"],
            field: formValues["Field"],
            "salary.min": formValues["Minimum Salary"],
            "salary.max": formValues["Maximum Salary"],
            description: formValues["Description"],
            employmentType: formValues["Employment Type"],
            openings: formValues["Openings"],
            tags: formValues["Tags"],
            requirements: formValues["Requirements"],
        });
        return res;
    }

    const fetchJob = async() => {
        let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getJobByID/${jobID}`);
        return res.data;
    }

    const {data: job = {}, isLoading} = useQuery({
        queryKey: [jobID],
        queryFn: () => fetchJob(),
        keepPreviousData: true
    })

    useEffect(() => {
        let values = {
            ["role"]: job?.role ?? "loading...",
            ["company"]: job?.company ?? "loading...",
            ["location"]: job?.location ?? "loading...",
            ["field"]: job?.field ?? "loading...",
            ["minimumSalary"]: job?.salary?.min ?? 0,
            ["maximumSalary"]: job?.salary?.max ?? 0,
            ["description"]: job?.description ?? "loading...",
            ["employmentType"]: job?.employmentType ?? "loading...",
            ["openings"]: job?.openings ?? 0,
            ["tags"]: job?.tags ?? [],
            ["requirements"]: job?.requirements ?? [""]
        }
        setFormValues(values);
        setInitialValues(values);
    }, [job])

    return(
        <JobInput formValues={formValues} setFormValues={setFormValues} initialValues={initialValues} setInitialValues={setInitialValues} backendAction={backendAction} isLoading={isLoading} addJob={false} />
    )
}

export default RecruiterEditJobPage;