import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Navbar({current}){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
            <div className="flex w-[100%] box-border font-medium justify-between items-center py-[1em] relative" style={{fontFamily: "'Roboto', sans-serif"}}>
                <p className="text-[2rem] font-bold text-[#3B82F6] pl-10 select-none padding-left" style={{fontFamily: "'Raleway', sans-serif"}}>JobRocket</p>
                <div className="text-[0.9rem] hidden lg:flex">
                    <p className={`cursor-pointer ${current == "Overview" ? "text-[#2563EB]": "text-[#1F2937] hover:text-[#3B82F6] transition duration-[0.3s] ease"}`}>Overview</p>
                    <p className={`cursor-pointer pl-[2em] ${current == "Jobs" ? "text-[#2563EB]": "text-[#1F2937] hover:text-[#3B82F6] transition duration-[0.3s] ease"}`}>Jobs</p>
                    <p className={`cursor-pointer pl-[2em] ${current == "Pricing" ? "text-[#2563EB]": "text-[#1F2937] hover:text-[#3B82F6] transition duration-[0.3s] ease"}`}>Pricing</p>
                </div>
                <div className="hidden lg:block pr-10">
                    <button className="border border-[#3B82F6] text-[#3B82F6] px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ease duration-[0.3s]">Log In</button>
                    <button className="bg-[#3B82F6] text-white px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]">Sign In</button>
                </div>
                {menuOpen ? (
                    <IoClose size={30} className="block lg:hidden cursor-pointer mr-10 margin-right" color="#3B82F6" onClick={() => {setMenuOpen(!menuOpen)}} />
                ): (
                    <IoMdMenu size={30} className="block lg:hidden cursor-pointer mr-10 margin-right" color="#3B82F6" onClick={() => {setMenuOpen(!menuOpen)}} />
                )}
                <div className={`${menuOpen ? "max-h-[500px]": "max-h-0"} transition-height duration-300 ease absolute w-[100%] bg-white top-[100%] z-20 lg:hidden select-none overflow-hidden`}>
                    <div className="py-[0.5em] pt-[1em] pl-10 padding-left cursor-pointer">Overview</div>
                    <div className="py-[0.5em] pl-10 padding-left cursor-pointer">Jobs</div>
                    <div className="py-[0.5em] pl-10 padding-left cursor-pointer">Pricing</div>
                    <div className="flex px-10 padding-x py-[0.5em] pb-[2em]">
                        <button className="border border-[#3B82F6] text-[#3B82F6] w-[50%] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ease duration-[0.3s]">Log In</button>
                        <button className="ml-[1em] bg-[#3B82F6] text-white w-[50%] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]">Sign In</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;