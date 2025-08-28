import JobInput from "../components/JobInput.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function RecruiterAddJobPage(){
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

    useEffect(() => {
        let values = {
            ["role"]: "",
            ["company"]: "",
            ["location"]: "",
            ["field"]: "Select a field",
            ["minimumSalary"]: "",
            ["maximumSalary"]: "",
            ["description"]: "",
            ["employmentType"]: "Select an employment type",
            ["openings"]: "",
            ["tags"]: [],
            ["requirements"]: [""]
        }
        setFormValues(values);
        setInitialValues(values);
    }, [])

    return(
        <JobInput formValues={formValues} setFormValues={setFormValues} initialValues={initialValues} setInitialValues={setInitialValues} backendAction={backendAction} addJob={true} />
    )
}

export default RecruiterAddJobPage;