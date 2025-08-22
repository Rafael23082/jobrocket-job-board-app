import { useEffect, useState } from "react";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import DropdownBox from "../components/DropdownBox.jsx";
import TagsInputBox from "../components/TagsInputBox.jsx";

function RecruiterEditJobPage(){
    const [menuOpen, setMenuOpen] = useState(false);
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({});
    const [initialValues, setInitialValues] = useState({});
    const {jobID} = useParams();
    const [job, setJob] = useState({});
    const [dropdownIndex, setDropdownIndex] = useState(null);

    useEffect(() => {
        if (!user){
            navigate("/login");
        }
    }, [user])

    const fetchJob = async() => {
        let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getJobByID/${jobID}`);
        return res.data;
    }

    const handleSave = async() => {
        let res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/job/updateJobByID/${jobID}`, {
            role: formValues["Role"],
            company: formValues["Company"],
            location: formValues["Location"],
            field: formValues["Field"],
            'salary.min': formValues["Minimum Salary"],
            'salary.max': formValues["Maximum Salary"],
            description: formValues["Description"],
            employmentType: formValues["Employment Type"],
            openings: formValues["Openings"],
            tags: formValues["Tags"]
        })
        setInitialValues(formValues);
        setJob(res.data);
    }

    useEffect(() => {
        const fetchAndSetJob = async() => {
            const job = await fetchJob();
            setJob(job);
            let values = {
                ["Role"]: job?.role ?? "loading...",
                ["Company"]: job?.company ?? "loading...",
                ["Location"]: job?.location ?? "loading...",
                ["Field"]: job?.field ?? "loading...",
                ["Minimum Salary"]: job?.salary?.min ?? 0,
                ["Maximum Salary"]: job?.salary?.max ?? 0,
                ["Description"]: job?.description ?? "loading...",
                ["Employment Type"]: job?.employmentType ?? "loading...",
                ["Openings"]: job?.openings ?? 0,
                ["Tags"]: job?.tags ?? []
            }
            setFormValues(values);
            setInitialValues(values);
        }
        fetchAndSetJob();
    }, [jobID])

    const buttonsDisplayed = JSON.stringify(formValues) != JSON.stringify(initialValues);

    const values = ["Hello", "World"]

    const fields = [{
        name: "Role",
        type: "text",
        placeholder: "Job role"
    }, {
        name: "Company",
        type: "text",
        placeholder: "Email"
    }, {
        name: "Location",
        type: "text",
        placeholder: "Location"
    }, {
        name: "Field",
        type: "select",
        options: ["Tech", "Design", "Data", "Business", "Marketing"]
    }, {
        name: "Minimum Salary",
        type: "number",
        placeholder: "Minimum Salary"
    }, {
        name: "Maximum Salary",
        type: "number",
        placeholder: "Maximum Salary"
    }, {
        name: "Description",
        type: "textarea",
        placeholder: "Description"
    }, {
        name: "Employment Type",
        type: "select",
        options: ["Full-Time", "Part-Time", "Internship"]
    }, {
        name: "Openings",
        type: "number",
        placeholder: "Openings"
    }, {
        name: "Tags",
        type: "tags",
        options: ["JavaScript", "React", "Frontend", "Remote", "Node.js", "AWS", "Backend", "APIs", "MongoDB", "UI Design", "UX Design", "Figma", "Prototyping", "Express", "Full-Stack", "DevOps", "CI/CD", "Docker", "Kubernetes", "Python", "Machine Learning", "Data Analysis", "Pandas", "AI", "React Native", "iOS", "Android", "Mobile Development"]
    }]

    return(
        <>
            <DashboardSideNavbar current={"Jobs"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="flex bg-[#fffcfc] overflow-hidden" style={{fontFamily: "'Roboto', sans-serif"}}>
                <DashboardSideNavbar placeholder={true} />
                <div className={`h-fit flex-1 flex flex-col`}>
                    <div className="bg-blue-500 py-[1.2em] flex items-center justify-between px-5 z-10">
                        <div className="flex-1">
                            <IoMdMenu size={30} className="block lg:hidden cursor-pointer mr-10 margin-right" color="white" onClick={() => {setMenuOpen(!menuOpen)}} />
                        </div>
                        <div className="flex items-center">
                            <IoIosNotifications color="white" size={20} className="mr-[1.7em] cursor-pointer hover:brightness-90" />
                            <div className="w-8 h-8 rounded-full border border-white"></div>
                            <p className="text-white font-medium pl-[0.8em] text-[0.9rem]">{user?.name}</p>
                        </div>
                    </div>
                    <div className="px-10 padding-x my-[2em]">
                        <p className="text-[1.25rem] font-medium">Edit Job</p>
                        {fields.map((field, index) => {
                            if (field.type == "text" || field.type == "number"){
                                return(
                                    <div>
                                        <p className={`text-gray-500 font-medium text-[0.875rem] ${index == 0 ? "pt-[2em]": "pt-[1em]"}`}>{field.name}</p>
                                        <input type={field.type} className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" placeholder={field.placeholder} value={formValues[field.name]}
                                        onChange={(e) => {
                                            setFormValues((prev) => ({
                                                ...prev, [field.name]: e.target.value
                                            }))
                                        }}
                                        />
                                    </div>
                                )
                            }else if (field.type == "select"){
                                return(
                                    <div>
                                        <p className={`text-gray-500 font-medium text-[0.875rem] ${index == 0 ? "pt-[2em]": "pt-[1em]"}`}>{field.name}</p>
                                        <DropdownBox index={index} values={field.options} fieldName={field.name} formValues={formValues} setFormValues={setFormValues} dropdownIndex={dropdownIndex} setDropdownIndex={setDropdownIndex} />
                                    </div>
                                )
                            }else if (field.type == "textarea"){
                                return(
                                    <div>
                                        <p className={`text-gray-500 font-medium text-[0.875rem] ${index == 0 ? "pt-[2em]": "pt-[1em]"}`}>{field.name}</p>
                                        <textarea className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" rows={6} 
                                        onChange={(e) => {
                                            setFormValues((prev) => ({...prev, [field.name]: e.target.value}))
                                        }} value={formValues[field.name]}
                                        />
                                    </div>
                                )
                            }else if (field.type == "tags"){
                                return(
                                    <TagsInputBox formValues={formValues} setFormValues={setFormValues} field={field} index={index} />
                                )
                            }
                        })}
                        <div className="flex mt-[2em] justify-center"> 
                            <button className={`${buttonsDisplayed ? "block": "invisible"} block border border-[#3B82F6] text-[#3B82F6] px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors ease duration-[0.3s]`} onClick={() => {setFormValues(initialValues)}}>Cancel</button>
                            <button className={`${buttonsDisplayed ? "block": "invisible"} bg-[#3B82F6] text-white px-[1.5em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition-colors ease duration-[0.3s]`} onClick={handleSave}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecruiterEditJobPage;