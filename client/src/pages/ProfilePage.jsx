import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios.js";
import { IoIosWarning } from "react-icons/io";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

function ProfilePage(){
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({});
    const [initialValues, setInitialValues] = useState({});
    const [errors, setErrors] = useState({}); 

    const {role} = useParams();
    const candidate = role.toLowerCase() == "candidate";
    const [menuOpen, setMenuOpen] = useState(false);

    const convertToBase64 = (file) => {
        return new Promise((resolve, _reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
        })
    }

    const handleFileUpload = async(e) => {
        const file = e.target.files[0];
        const resumeLink = await convertToBase64(file);
        console.log(resumeLink);
        setFormValues((prev) => ({
            ...prev, ["resume"]: resumeLink, ["resumeName"]: file.name
        }))
    }

    useEffect(() => {
        if (!user){
            navigate("/login");
        }

        if (role.toLowerCase() == "candidate"){
            let values = {
                ["name"]: user?.name ?? "",
                ["email"]: user?.email ?? "",
                ["location"]: user?.location ?? "",
                ["additionalInformation"]: user?.additionalInformation ?? "",
                ["resume"]: user?.resume ?? "",
                ["resumeName"]: user?.resumeName ?? ""  
            }

            setFormValues(values);
            setInitialValues(values);
        }else{
            let values = {
                ["name"]: user?.name ?? "",
                ["email"]: user?.email ?? ""        
            }
            setFormValues(values);
            setInitialValues(values);
        }
    }, [user])

    const buttonsDisplayed = JSON.stringify(formValues) != JSON.stringify(initialValues);

    const handleSubmit = async() => {
        let errors = {};
        const valid = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(formValues["email"]);
        if (!valid){
            errors["email"] = "Invalid email format."
        }

        if (Object.keys(errors).length == 0){
            if (role?.toLowerCase() == "candidate"){
                const res = await api.put(`/user/updateUserDetails/${user._id}`, {
                    name: formValues["name"],
                    email: formValues["email"],
                    location: formValues["location"],
                    additionalInformation: formValues["additionalInformation"],
                    resume: formValues["resume"],
                    resumeName: formValues["resumeName"]
                })
                setInitialValues(formValues);
                setUser(res.data);
            }else{
                const res = await api.put(`/user/updateUserDetails/${user._id}`, {
                    name: formValues["name"],
                    email: formValues["email"]
                })
                setInitialValues(formValues);
                setUser(res.data);
            }
        }
        setErrors(errors);
    }

    let fields;
    
    if (candidate){
        fields = [{
                key: "name",
                name: "Full Name",
                type: "text",
                placeholder: "Your full name"
            }, {
                key: "email",
                name: "Email",
                type: "text",
                placeholder: "Email"
            }, {
                key: "location",
                name: "Location",
                type: "text",
                placeholder: "Location"
            }, {
                key: "additionalInformation",
                name: "Additional Information",
                type: "textarea",
                placeholder: "Summary"
            }, {
                key: "resume",
                name: "Upload your resume",
                type: "file",
                placeholder: ""
            }]
    }else{
        fields = [{
                key: "name",
                name: "Full Name",
                type: "text",
                placeholder: "Your full name"
            }, {
                key: "email",
                name: "Email",
                type: "text",
                placeholder: "Email"
            }]   
    }

    return(
        <>
        <DashboardSideNavbar current={"Settings"} />
        <div className="flex bg-[#fffcfc] overflow-hidden" style={{fontFamily: "'Roboto', sans-serif"}}>
            <DashboardSideNavbar placeholder={true} />
            <div className="flex-1 h-fit flex flex-col">
                <DashboardNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div className="px-10 padding-x my-[2em]">
                    <p className="text-[1.25rem] font-medium">Account Information</p>
                    <div className="flex items-center mt-[2em]">
                        <div className="w-12 h-12 rounded-full border"></div>
                        <p className="font-medium pl-[1em]">{user?.name}</p>
                    </div>
                    {fields.map((field, index) => {
                        if (field.type != "textarea" && field.type != "file"){
                            return(
                                <div className="pt-[1em]" key={index}>
                                    <p className="text-gray-500 font-medium text-[0.875rem]">{field.name}</p>
                                    <input type={field.type} className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" placeholder={field.placeholder} value={formValues[field.key] ?? ""}
                                    onChange={(e) => {
                                        setFormValues((prev) => ({
                                            ...prev, [field.key]: e.target.value
                                        }))
                                    }}
                                    />
                                    {errors[field.key] && (
                                        <span className="text-red-500 text-[0.75rem] pt-[0.5em] flex items-center gap-x-[5px]"><IoIosWarning />{errors[field.name]}</span>
                                    )}
                                </div>       
                            )
                        }else if (field.type == "textarea"){
                            return(
                                <div className="pt-[1em]" key={index}>
                                    <p className="text-gray-500 font-medium text-[0.875rem]">{field.name}</p>
                                    <textarea className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" rows={6} 
                                    onChange={(e) => {
                                        setFormValues((prev) => ({...prev, [field.key]: e.target.value}))
                                    }} value={formValues[field.key] ?? ""} placeholder={field.placeholder}
                                    />
                                </div>
                            )
                        }else{
                            return(
                                <div key={index} className="mt-[1em]">
                                    <label for="resume" className="flex flex-col mt-[0.4em] border py-[0.5em] w-[100%] rounded-[5px] border-dashed items-center py-[1em] cursor-pointer">
                                        <label for="resume" className="text-[0.9rem] font-semibold px-[1.5em] py-[0.8em] border bg-gray-100 border-gray-400 rounded-[5px] cursor-pointer hover:brightness-90">Browse your resume</label>
                                        <p className="text-[0.9rem] text-gray-400 pt-[0.5em]">supports .doc, .docx, or .txt files</p>
                                        {formValues[field.key] && (
                                            <span className="text-[0.9rem] pt-[0.5em] flex gap-x-[0.8em]">
                                                <p>{formValues["resumeName"]}</p>
                                                <p className="text-blue-500 cursor-pointer" onClick={() => {window.open(formValues["resume"])}}>[Download]</p>
                                            </span>
                                        )}
                                    </label>
                                    <input type="file" id="resume" accept=".doc,.docx,.txt" className="hidden"
                                    onChange={(e) => {handleFileUpload(e)}}
                                    />
                                </div>
                            );
                        }
                    })}
                    <div className="flex mt-[2em] justify-center">
                        <button className={`${buttonsDisplayed ? "block": "invisible"} block border border-[#3B82F6] text-[#3B82F6] px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors ease duration-[0.3s]`} onClick={() => {setFormValues(initialValues); setErrors({})}}>Cancel</button>
                        <button className={`${buttonsDisplayed ? "block": "invisible"} bg-[#3B82F6] text-white px-[1.5em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition-colors ease duration-[0.3s]`} onClick={handleSubmit}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProfilePage;