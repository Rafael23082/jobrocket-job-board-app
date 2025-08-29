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
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useQuery } from '@tanstack/react-query';
import { BarLoader } from "react-spinners";

function JobInput({formValues, setFormValues, initialValues, setInitialValues, backendAction, isLoading, addJob}){
    const [menuOpen, setMenuOpen] = useState(false);
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (!user){
            navigate("/login");
        }
    }, [user])

    const handleSave = async() => {
        let newErrors = {};

        fields.map((field) => {
            if (field.type == "text" || field.type == "textarea" || field.type == "number"){
                let value = formValues[field.key]
                if (String(value).trim() == ""){
                    newErrors[field.key] = "Please fill out this field."
                }
                if (field.key == "minimumSalary"){
                    if (formValues[field.key] <= 0){
                        newErrors[field.key] = "Value must be greater than 0."
                    }
                    if (formValues["minimumSalary"] >= formValues["maximumSalary"]){
                        newErrors["maximumSalary"] = "Maximum salary must be greater than minimum salary."
                    }
                }
                if (field.key == "experience"){
                    if (formValues[field.key] < 0){
                        newErrors[field.key] = "Value must be a greater or equals to 0."
                    }
                }
                if (field.key == "openings"){
                    if (formValues[field.key] <= 0){
                        newErrors[field.key] = "Value must be a greater than 0."
                    }
                }
            }else if (field.key == "tags"){
                if (formValues[field.key].length == 0){
                    newErrors[field.key] = "Please select at least one tag."
                }else if (formValues[field.key].length > 5){
                    newErrors[field.key] = "Please use no more than 5 tags."
                }
            }else if (field.key == "requirements"){
                let requirements = formValues[field.key];
                let blank = requirements.some((requirement) => requirement.trim() == "");
                if (blank){
                    newErrors[field.key] = "Please fill out all fields."
                }
                if (requirements.length == 0){
                    newErrors[field.key] = "There must be at least one requirement."
                }
            }else if (field.type == "select"){
                if (formValues[field.key] == field.default){
                    newErrors[field.key] = "Please select an option."
                }
            }
        })

        if (Object.keys(newErrors).length == 0){
            await backendAction();
            setInitialValues(formValues);
            
        }
        setErrors(newErrors);
    }

    const buttonsDisplayed = JSON.stringify(formValues) != JSON.stringify(initialValues);

    const fields = [
    {
        key: "role",
        name: "Role",
        type: "text",
        placeholder: "Job role",
    },
    {
        key: "company",
        name: "Company",
        type: "text",
        placeholder: "Company name",
    },
    {
        key: "location",
        name: "Location",
        type: "text",
        placeholder: "Location",
    },
    {
        key: "employmentType",
        name: "Employment Type",
        type: "select",
        options: ["Full-Time", "Part-Time", "Internship"],
        default: "Select an employment type"
    },
    {
        key: "field",
        name: "Field",
        type: "select",
        options: ["Tech", "Design", "Data", "Business", "Marketing"],
        default: "Select a field"
    },
    {
        key: "description",
        name: "Description",
        type: "textarea",
        placeholder: "Description",
    },
    {
        key: "requirements",
        name: "Requirements",
        type: "list",
        placeholder: "Add a requirement",
    },
    {
        key: "tags",
        name: "Tags",
        type: "list",
        options: ["JavaScript", "React", "Frontend", "Remote", "Node.js", "AWS", "Backend", "APIs", "MongoDB", "UI Design", "UX Design", "Figma", "Prototyping", "Express", "Full-Stack", "DevOps", "CI/CD", "Docker", "Kubernetes", "Python", "Machine Learning", "Data Analysis", "Pandas", "AI", "React Native", "iOS", "Android", "Mobile Development"]
    },
    {
        key: "experience",
        name: "Experience (years)",
        type: "number",
        placeholder: "minimum years of experience"        
    },
    {
        key: "minimumSalary",
        name: "Minimum Salary",
        type: "number",
        placeholder: "Minimum Salary",
    },
    {
        key: "maximumSalary",
        name: "Maximum Salary",
        type: "number",
        placeholder: "Maximum Salary",
    },
    {
        key: "openings",
        name: "Openings",
        type: "number",
        placeholder: "Openings",
    },
    ];
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
                        <span className="flex cursor-pointer hover:underline items-center gap-x-[0.4em] text-blue-500" onClick={() => navigate("/recruiter/job-listings")}>
                            <HiArrowLongLeft color="#3B82F6" />
                            <p className="text-sm">Back to jobs</p>
                        </span>
                        <p className="text-[1.25rem] font-medium pt-5">{addJob ? "Add Job": "Edit Job"}</p>
                        {fields.map((field, index) => {
                            if (field.key == "requirements"){
                                return(
                                    <>
                                    <div>
                                        <p className={`text-gray-500 font-medium text-[0.875rem] ${index == 0 ? "pt-[2em]": "pt-[1em]"}`}>{field.name}</p>
                                        {formValues["requirements"]?.map((requirement, index) => (
                                            <div className={`flex items-center ${index == 0 ? "mt-[0.4em]": "mt-[1em]"} rounded-[5px] border focus-within:outline`}>
                                                <input type={field.type} className={`px-[1em] py-[0.3em] flex-1 focus:outline-none`} placeholder={"Requirement"} value={requirement} onChange={(e) => {
                                                    let requirementsArr = [...formValues["requirements"]]
                                                    requirementsArr[index] = e.target.value;
                                                    setFormValues((prev) => ({...prev, ["requirements"]: requirementsArr}))
                                                }} />
                                                <FaRegTrashAlt className="mx-[1em] cursor-pointer" size={13} color="red" onClick={() => {
                                                    let requirementsArr = [...formValues["requirements"]];
                                                    requirementsArr.splice(index, 1);
                                                    setFormValues((prev) => ({...prev, ["requirements"]: requirementsArr}));
                                                }} />
                                            </div>
                                        ))}
                                        <button className="bg-blue-500 text-white rounded-[5px] text-[0.8rem] px-[0.7em] py-[0.3em] mt-[1em] cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]" onClick={() => {
                                            let requirementsArr = [...formValues["requirements"], ""];
                                            setFormValues((prev) => ({...prev, ["requirements"]: requirementsArr}))
                                        }}>Add requirement</button>
                                    </div>
                                    {errors[field.key] && (
                                        <span className="text-red-500 text-[0.75rem] pt-[0.5em] flex items-center gap-x-[5px]"><IoIosWarning />{errors[field.key]}</span>
                                    )}
                                    </>
                                )
                            }
                            else if (field.type == "text" || field.type == "number"){
                                return(
                                    <>
                                    <div>
                                        <p className={`text-gray-500 font-medium text-[0.875rem] ${index == 0 ? "pt-[2em]": "pt-[1em]"}`}>{field.name}</p>
                                        <input type={field.type} className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" placeholder={field.placeholder} value={formValues[field.key]}
                                        onChange={(e) => {
                                            if (field.type == "text"){
                                                setFormValues((prev) => ({
                                                    ...prev, [field.key]: e.target.value
                                                }))
                                            }else{
                                                if (e.target.value == ""){
                                                    setFormValues((prev) => ({
                                                        ...prev, [field.key]: e.target.value
                                                    }))
                                                }else{
                                                    setFormValues((prev) => ({
                                                        ...prev, [field.key]: Number(e.target.value)
                                                    }))              
                                                }
                                            }
                                        }}
                                        />
                                    </div>
                                    {errors[field.key] && (
                                        <span className="text-red-500 text-[0.75rem] pt-[0.5em] flex items-center gap-x-[5px]"><IoIosWarning />{errors[field.key]}</span>
                                    )}
                                    </>
                                )
                            }else if (field.type == "select"){
                                return(
                                    <>
                                    <div>
                                        <p className={`text-gray-500 font-medium text-[0.875rem] ${index == 0 ? "pt-[2em]": "pt-[1em]"}`}>{field.name}</p>
                                        <DropdownBox index={index} values={field.options} fieldName={field.name} fieldKey={field.key} formValues={formValues} setFormValues={setFormValues} dropdownIndex={dropdownIndex} setDropdownIndex={setDropdownIndex} />
                                    </div>
                                    {errors[field.key] && (
                                        <span className="text-red-500 text-[0.75rem] pt-[0.5em] flex items-center gap-x-[5px]"><IoIosWarning />{errors[field.key]}</span>
                                    )}
                                    </>
                                )
                            }else if (field.type == "textarea"){
                                return(
                                    <>
                                    <div>
                                        <p className={`text-gray-500 font-medium text-[0.875rem] ${index == 0 ? "pt-[2em]": "pt-[1em]"}`}>{field.name}</p>
                                        <textarea className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" rows={6} 
                                        onChange={(e) => {
                                            setFormValues((prev) => ({...prev, [field.key]: e.target.value}))
                                        }} value={formValues[field.key]}
                                        />
                                    </div>
                                    {errors[field.key] && (
                                        <span className="text-red-500 text-[0.75rem] pt-[0.5em] flex items-center gap-x-[5px]"><IoIosWarning />{errors[field.key]}</span>
                                    )}
                                    </>
                                )
                            }else if (field.key == "tags"){
                                return(
                                    <>
                                    <TagsInputBox formValues={formValues} setFormValues={setFormValues} field={field} index={index} />
                                    {errors[field.key] && (
                                        <span className="text-red-500 text-[0.75rem] pt-[0.5em] flex items-center gap-x-[5px]"><IoIosWarning />{errors[field.key]}</span>
                                    )}
                                    </>
                                )
                            }
                        })}
                        {!addJob && (
                            <div className="flex mt-[2em] mb-[1em] justify-center"> 
                                <button className={`${buttonsDisplayed ? "block": "invisible"} block border border-[#3B82F6] text-[#3B82F6] px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors ease duration-[0.3s]`} onClick={() => {setFormValues(initialValues); setErrors({});}}>Cancel</button>
                                <button className={`${buttonsDisplayed ? "block": "invisible"} bg-[#3B82F6] text-white px-[1.5em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition-colors ease duration-[0.3s]`} onClick={handleSave}>Save Changes</button>
                            </div>
                        )}
                        {addJob && (
                            <div className="flex mt-[2em] mb-[1em] justify-center"> 
                                <button className={`block bg-[#3B82F6] text-white px-[1.5em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition-colors ease duration-[0.3s]`} onClick={handleSave}>Post Job</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {isLoading && (
                <div className={`w-[100%] min-h-[100vh] flex absolute top-0 bg-white left-0 items-center z-0`}>
                    <DashboardSideNavbar placeholder={true} />
                    <div className="flex grow justify-center">
                        <BarLoader
                            color={"#3B82F6"}
                            loading={isLoading}
                            height={4}
                            width={100}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default JobInput;