import JobInput from "../components/JobInput.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function RecruiterAddJobPage(){
    const [formValues, setFormValues] = useState({});
    const [initialValues, setInitialValues] = useState({});
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user){
            navigate("/login");
        }
    }, [user])

    const backendAction = async() => {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/job/addJob`, {
            role: formValues["role"],
            company: formValues["company"],
            location: formValues["location"],
            field: formValues["field"],
            minSalary: formValues["minimumSalary"],
            maxSalary: formValues["maximumSalary"],
            description: formValues["description"],
            employmentType: formValues["employmentType"],
            openings: formValues["openings"],
            tags: formValues["tags"],
            requirements: formValues["requirements"],
            experience: formValues["experience"],
            postedBy: user?._id
        });
        toast.success("Job successfully added.", {
            description: `${formValues["role"]} job added.`
        })
        navigate("/recruiter/job-listings")
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
            ["requirements"]: [""],
            ["experience"]: ""
        }
        setFormValues(values);
        setInitialValues(values);
    }, [])

    return(
        <JobInput formValues={formValues} setFormValues={setFormValues} initialValues={initialValues} setInitialValues={setInitialValues} backendAction={backendAction} addJob={true} />
    )
}

export default RecruiterAddJobPage;