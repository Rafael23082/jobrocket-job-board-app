import { useEffect, useState } from "react";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecruiterEditJobPage(){
    const [menuOpen, setMenuOpen] = useState(false);
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({});
    const [initialValues, setInitialValues] = useState({});
    const {jobID} = useParams();
    const [job, setJob] = useState({});

    useEffect(() => {
        if (!user){
            navigate("/login");
        }
    }, [user])

    const fetchJob = async() => {
        let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getJobByID/${jobID}`);
        return res.data;
    }

    useEffect(() => {
        const fetchAndSetJob = async() => {
            const job = await fetchJob();
            setJob(job);
            let values = {
                ["Role"]: job?.role ?? "",
                ["Company"]: job?.company ?? "",
                ["Location"]: job?.location ?? "",
                ["Field"]: job?.field ?? "",
                ["Minimum Salary"]: job?.salary?.min ?? "",
                ["Maximum Salary"]: job?.salary?.max ?? ""                
            }
            setFormValues(values);
            setInitialValues(values);
        }
        fetchAndSetJob();
    }, [jobID])

    const buttonsDisplayed = JSON.stringify(formValues) != JSON.stringify(initialValues);

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
        type: "text",
        placeholder: "Summary"
    }, {
        name: "Minimum Salary",
        type: "number",
        placeholder: "Minimum Salary"
    }, {
        name: "Maximum Salary",
        type: "number",
        placeholder: "Maximum Salary"
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
                        <span className="text-[0.9rem] text-blue-600 flex cursor-pointer hover:underline">← Back to Jobs</span>
                        {fields.map((field, index) => (
                            <div className="pt-[1em]" key={index}>
                                <p className="text-gray-500 font-medium text-[0.875rem]">{field.name}</p>
                                <input type={field.type} className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" placeholder={field.placeholder} value={formValues[field.name]}
                                onChange={(e) => {
                                    setFormValues((prev) => ({
                                        ...prev, [field.name]: e.target.value
                                    }))
                                }}
                                />
                            </div>       
                        ))}
                        <div className="flex mt-[2em] justify-center">
                            <button className={`${buttonsDisplayed ? "block": "invisible"} block border border-[#3B82F6] text-[#3B82F6] px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors ease duration-[0.3s]`} onClick={() => {setFormValues(initialValues)}}>Cancel</button>
                            <button className={`${buttonsDisplayed ? "block": "invisible"} bg-[#3B82F6] text-white px-[1.5em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition-colors ease duration-[0.3s]`}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecruiterEditJobPage;