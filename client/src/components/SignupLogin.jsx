import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

function SignupLogin({heading, subheading, fields, button, alternative, alternative2, text, minheight, signup}){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownText, setDropdownText] = useState("Select your role")
    const navigate = useNavigate();
    return(
        <div className="relative min-h-[100vh] w-[100%] flex justify-center items-center">
            <div className="absolute hidden sm:block top-0 w-[100%] inset-0 bg-cover bg-center" style={{backgroundImage: "url(/blue_bg.jpg)"}}></div>
            <div className="absolute hidden sm:block w-[100%] top-0 inset-0" style={{backgroundColor: "rgba(0,0,0,0.5)"}}></div>
            <div className={`bg-white flex flex-col justify-between relative z-10 px-10 padding-x h-[100vh] min-h-[${minheight}] sm:h-fit py-[3em] w-[100%] sm:w-[500px] rounded-0 sm:rounded-[5px] my-0 sm:my-[3em]`}>
                <div>
                    <p className="text-[1.5rem] font-bold text-blue-500">{heading}</p>
                    <p className="text-gray-600 text-[0.9rem]">{subheading}</p>
                    <button className="w-[100%] border rounded-[5px] py-[0.6em] text-[0.9rem] mt-[1.5em] cursor-pointer bg-white hover:brightness-95 transition duration-[0.3s] ease"><span className="flex items-center justify-center"><img src="/google.png" className="w-[16px] mr-[0.7em]" />Continue with Google</span></button>
                    <span className="flex items-center justify-center my-[1em]"><div className="bg-gray-300 h-[1.4px] w-[140px]"></div><p className="px-[1em] text-gray-600">or</p><div className="bg-gray-300 h-[1.4px] w-[140px]"></div></span>
                    {fields.map((field, index) => {
                        return field.type == "select" ? (
                            <div key={index}>
                                <p className={`${index == 0 ? "pt-[0em]": "pt-[1em]"} font-bold`}>Role</p>
                                <div className="relative mt-[0.4em] border rounded-[5px]">
                                    <span className="py-[0.3em] flex items-center justify-between px-[1em] select-none" onClick={() => {setDropdownOpen(!dropdownOpen)}}>{dropdownText} {!dropdownOpen ? <IoIosArrowDown />: <IoIosArrowUp/>}</span>
                                    <div className={`flex flex-col absolute top-[calc(100%+10px)] w-[100%] rounded-[10px] select-none overflow-hidden shadow ${dropdownOpen ? "max-h-[1000px] border duration-[0.5s]": "max-h-0 border-transparent duration-[0.1s]"} bg-white transition-all`}>
                                        <p className="px-[1em] py-[0.5em] bg-white hover:brightness-90" onClick={() => {setDropdownText("Candidate"); setDropdownOpen(!dropdownOpen)}}>Candidate</p>
                                        <p className="px-[1em] py-[0.5em] bg-white hover:brightness-90" onClick={() => {setDropdownText("Recruiter"); setDropdownOpen(!dropdownOpen)}}>Recruiter</p>
                                    </div>
                                </div>
                            </div>
                        ): (
                            <div key={index}>
                                <p className={`${index == 0 ? "pt-[0em]": "pt-[1em]"} font-bold`}>{field.name}</p>
                                <input type={field.type} className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" placeholder={`${field.placeholder}`} />
                            </div>
                        )
                    })}
                    <button className="bg-[#3B82F6] mt-[2em] text-white w-[100%] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]">{button}</button>
                    <p className="text-[0.9rem] text-gray-600 pt-[1em] text-center flex justify-center flex-wrap" onClick={() => {
                        signup ? (navigate("/login")): (navigate("/"))
                    }}>{alternative}<span className="text-blue-500 cursor-pointer hover:text-blue-700 duration-[0.3s] ease flex items-center pl-[0.5em] group">{alternative2} <FaArrowRightLong className="ml-[0.3em] group-hover:translate-x-[5px] transition-transform duration-[0.3s] ease" /></span></p>
                </div>
                 <p className="text-[0.85rem] pr-5 sm:pr-0s sm:bottom-0 sm:relative text-gray-500 pt-[2em] md:pt-[3em]">{text}</p>
            </div>
        </div>
    )
}

export default SignupLogin;