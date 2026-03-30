import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import api from "../api/axios";

function RoleSelectionPage(){
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const location = useLocation();
    const {userDetails} = location.state || {};

    const handleRoleSelect = async(role) => {
        try{
            userDetails.role = role;
            const res = await api.post("/user/googleLogin", userDetails);
            const userObject = {
                name: res.data.user.name,
                email: res.data.user.email,
                _id: res.data.user._id,
                role: res.data.user.role
            }
            setUser(userObject);
            navigate(`/dashboard`)
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="relative min-h-[100vh] w-[100%] flex justify-center items-center">
            <div className="absolute hidden sm:block w-[100%] top-0 inset-0" style={{backgroundColor: "rgba(0,0,0,0.5)"}}></div>
            <div className={`overflow-auto bg-white flex flex-col justify-center relative z-10 px-10 padding-x h-screen sm:h-fit py-[3em] w-[100%] sm:w-[500px] rounded-0 sm:rounded-[5px] my-0 sm:my-[3em]`}>
                <div className="text-center">
                    <p className="text-[1.5rem] font-bold text-blue-500">Select Role</p>
                    <p className="pt-[1em]">I am a ...</p>
                    <button 
                        className="bg-[#3B82F6] mt-[2em] text-white w-[100%] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]"
                        onClick={() => handleRoleSelect("Recruiter")}
                    >
                        Recruiter
                    </button>
                    <button 
                        className="bg-white mt-[1em] text-[#3B82F6] border border-[#3B82F6] w-[100%] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ease duration-[0.3s]"
                        onClick={() => handleRoleSelect("Candidate")}
                    >
                        Candidate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RoleSelectionPage;