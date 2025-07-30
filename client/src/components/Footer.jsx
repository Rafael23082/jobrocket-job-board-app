import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer(){
    const navigate = useNavigate();
    return(
        <div className="w-[100%] max-w-[1300px] padding-x px-10 pt-[4em] pb-[2em] mx-auto">
            <div className="flex flex-col md:flex-row">
                <p className="text-[2rem] font-bold text-white w-[100%] md:w-[40%]" style={{fontFamily: "'Raleway', sans-serif"}}>JobRocket</p>
                <div className="w-[20%] text-white" style={{fontFamily: "'Roboto', sans-serif"}}>
                    <p className="text-[0.9rem] md:text-[1.3rem] font-bold mt-[1.5em] md:mt-0" style={{fontFamily: "'Raleway', sans-serif"}}>Welcome</p>
                    <p className="pt-[0.3em] md:pt-[0.75em] text-[0.9rem] cursor-pointer hover:underline w-fit" onClick={() => {navigate("/"); window.scrollTo({top: 0, behavior: "instant"})}}>Home</p>
                </div>
                <div className="w-[100%] md:w-[20%] text-white" style={{fontFamily: "'Roboto', sans-serif"}}>
                    <p className="mt-[1.5em] md:mt-0 text-[0.9rem] md:text-[1.3rem] font-bold" style={{fontFamily: "'Raleway', sans-serif"}}>For Candidates</p>
                    <p className="pt-[0.3em] md:pt-[0.75em] text-[0.9rem] cursor-pointer hover:underline w-fit" onClick={() => {navigate("/candidateOverviewPage"); window.scrollTo({top: 0, behavior: "instant"})}}>Overview</p>
                    <p className="pt-[0.3em] md:pt-[0.75em] text-[0.9rem] cursor-pointer hover:underline w-fit" onClick={() => {navigate("/jobsPage"); window.scrollTo({top: 0, behavior: "instant"})}}>Jobs</p>
                </div>
                <div className="w-[100%] md:w-[20%] text-white" style={{fontFamily: "'Roboto', sans-serif"}}>
                    <p className="mt-[1.5em] md:mt-0 text-[0.9rem] md:text-[1.3rem] font-bold" style={{fontFamily: "'Raleway', sans-serif"}}>For Recruiters</p>
                    <p className="pt-[0.3em] md:pt-[0.75em] text-[0.9rem] cursor-pointer hover:underline w-fit" onClick={() => {navigate("/recruiterOverviewPage"); window.scrollTo({top: 0, behavior: "instant"})}}>Overview</p>
                    <p className="pt-[0.3em] md:pt-[0.75em] text-[0.9rem] cursor-pointer hover:underline w-fit" onClick={() => {navigate("/pricingPage"); window.scrollTo({top: 0, behavior: "instant"})}}>Pricing</p>
                </div>
            </div>
            <div className="flex mt-[8em] ">
                <FaInstagram size={30} color="white" className="cursor-pointer" onClick={() => {window.open("https://www.instagram.com/rafael_anderson777/")}} />
                <FaGithub size={30} color="white" className="cursor-pointer ml-[1em]" onClick={() => {window.open("https://github.com/Rafael23082")}} />  
                <FaTwitter size={30} color="white" className="cursor-pointer ml-[1em]" onClick={() => {window.open("https://x.com/shonenrafael")}} />  
            </div>
        </div>
    )
}

export default Footer;