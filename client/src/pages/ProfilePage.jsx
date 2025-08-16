import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoIosWarning } from "react-icons/io";

function ProfilePage(){
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({});
    const [initialValues, setInitialValues] = useState({});
    const [errors, setErrors] = useState({}); 

    const {role} = useParams();
    const candidate = role.toLowerCase() == "candidate";

    useEffect(() => {
        if (!user){
            navigate("/login");
        }
        setFormValues(({
            ["Full Name"]: user?.name ?? "",
            ["Email"]: user?.email ?? "",
            ["Location"]: user?.location ?? "",
            ["Additional Information"]: user?.additionalInformation ?? "",
            ["Upload your resume"]: user?.resume ?? ""
        }))

        setInitialValues(({
            ["Full Name"]: user?.name ?? "",
            ["Email"]: user?.email ?? "",
            ["Location"]: user?.location ?? "",
            ["Additional Information"]: user?.additionalInformation ?? "",
            ["Upload your resume"]: user?.resume ?? ""
        }))
    }, [user])

    const buttonsDisplayed = JSON.stringify(formValues) != JSON.stringify(initialValues);

    const handleSubmit = async() => {
        let errors = {};
        const valid = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(formValues["Email"]);
        if (!valid){
            errors["Email"] = "Invalid email format."
        }

        if (Object.keys(errors).length == 0){
            const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/user/updateUserDetails/${user._id}`, {
                name: formValues["Full Name"],
                email: formValues["Email"],
                location: formValues["Location"],
                additionalInformation: formValues["Additional Information"],
                resume: formValues["Upload your resume"]
            })
            setInitialValues(formValues);
            setUser(res.data);
        }
        setErrors(errors);
    }

    let fields;
    
    if (candidate){
        fields = [{
                name: "Full Name",
                type: "text",
                placeholder: "Your full name"
            }, {
                name: "Email",
                type: "text",
                placeholder: "Email"
            }, {
                name: "Location",
                type: "text",
                placeholder: "Location"
            }, {
                name: "Additional Information",
                type: "textarea",
                placeholder: "Summary"
            }, {
                name: "Upload your resume",
                type: "file",
                placeholder: ""
            }]
    }else{
        fields = [{
                name: "Full Name",
                type: "text",
                placeholder: "Your full name"
            }, {
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
                                    <input type={field.type} className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" placeholder={field.placeholder} value={formValues[field.name]}
                                    onChange={(e) => {
                                        setFormValues((prev) => ({
                                            ...prev, [field.name]: e.target.value
                                        }))
                                    }}
                                    />
                                    {errors[field.name] && (
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
                                        setFormValues((prev) => ({...prev, [field.name]: e.target.value}))
                                    }} value={formValues[field.name]} placeholder={field.placeholder}
                                    />
                                </div>
                            )
                        }else{
                            return(
                                <div key={index} className="mt-[1em]">
                                    <label for="resume" className="flex flex-col mt-[0.4em] border py-[0.5em] w-[100%] rounded-[5px] border-dashed items-center py-[1em] cursor-pointer">
                                        <label for="resume" className="text-[0.9rem] font-semibold px-[1.5em] py-[0.8em] border bg-gray-100 border-gray-400 rounded-[5px] cursor-pointer hover:brightness-90">Drag or browse your resume</label>
                                        <p className="text-[0.9rem] text-gray-400 pt-[0.5em]">supports .pdf, .doc, .docx, or .txt files</p>
                                        {formValues[field.name] && (
                                            <p className="text-[0.9rem] pt-[0.5em]">{formValues[field.name]}</p>
                                        )}
                                    </label>
                                    <input type="file" id="resume" accept=".pdf,.doc,.docx,.txt" className="hidden"
                                    onChange={(e) => {
                                        setFormValues((prev) => ({...prev, [field.name]: e.target.files[0]?.name}))
                                    }}
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