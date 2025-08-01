import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function SignUpPage(){
    const {role} = useParams();

    useEffect(() => {
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundColor = "black";

        return () => {
        document.body.style.backgroundSize = '';
        document.body.style.backgroundPosition = '';
        document.body.style.backgroundColor = '';
        };
    }, []);
    return(
        <>
        <div className="relative min-h-[100vh] w-[100%] flex justify-center items-center">
            <div className="absolute hidden sm:block top-0 w-[100%] inset-0 bg-cover bg-center" style={{backgroundImage: "url(/blue_bg.jpg)"}}></div>
            <div className="absolute hidden sm:block w-[100%] top-0 inset-0" style={{backgroundColor: "rgba(0,0,0,0.7)"}}></div>
            <div className="bg-white relative z-10 px-10 padding-x h-[max(650px,100vh)] overflow-auto sm:h-fit py-[3em] w-[100%] sm:w-[500px] rounded-[5px] my-0 sm:my-[3em]">
                <p className="text-[1.5rem] font-bold text-blue-500">Sign Up</p>
                <p className="text-gray-600 text-[0.9rem]">Continue to JobRocket</p>
                <button className="w-[100%] border rounded-[5px] py-[0.6em] text-[0.9rem] mt-[1.5em] cursor-pointer bg-white hover:brightness-95 transition duration-[0.3s] ease"><span className="flex items-center justify-center"><img src="/google.png" className="w-[16px] mr-[0.7em]" />Continue with Google</span></button>
                <span className="flex items-center justify-center my-[1em]"><div className="bg-gray-300 h-[1.4px] w-[140px]"></div><p className="px-[1em] text-gray-600">or</p><div className="bg-gray-300 h-[1.4px] w-[140px]"></div></span>
                <p className="font-bold pt-[0em]">Full Name</p>
                <input type="text" className="pl-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" placeholder="Enter text" />
                <p className="font-bold pt-[1em]">Email</p>
                <input type="text" className="pl-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" placeholder="mail@gmail.com" />
                <p className="font-bold pt-[1em]">Password</p>
                <input type="text" className="pl-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" placeholder="min 8 characters" />
                <button className="bg-[#3B82F6] mt-[2em] text-white w-[100%] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]">Sign Up</button>
                <p className="text-[0.9rem] text-gray-600 pt-[1em] text-center flex justify-center">Already have an account?<span className="text-blue-500 cursor-pointer hover:text-blue-700 duration-[0.3s] ease flex items-center pl-[0.5em] group">Log in <FaArrowRightLong className="ml-[0.3em] group-hover:translate-x-[5px] transition-transform duration-[0.3s] ease" /></span></p>
                <p className="text-[0.85rem] absolute bottom-[30px] pr-5 sm:pr-0s sm:bottom-0 sm:relative text-gray-500 sm:pt-[4em]">By proceeding, you agree to the Terms and Conditions and Privacy Policy.</p>
            </div>
        </div>
        </>
    )
}

export default SignUpPage;