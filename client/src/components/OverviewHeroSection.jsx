import { FaArrowDown } from "react-icons/fa6";

function OverviewHeroSection({heading, subheading, button1, button2}){
    return(
        <div style={{fontFamily: "'Roboto', sans-serif"}} className="py-[5em] md:py-[7em] flex flex-col items-center relative padding-x px-10">
            <p className="text-black relative z-10 text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold text-center heading" style={{fontFamily: "'Raleway', sans-serif"}}>{heading}</p>
            <p className="text-center text-[1.3rem] lg:w-[60%] pt-[0.5em] subheading">{subheading}</p>
            <div className="flex mt-[2em] button-container w-[100%] justify-center">
                <button className="button bg-[#3B82F6] text-white px-[2em] py-[0.8em] rounded-[15px] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]">{button1}</button>
                <button className="button button-below border border-[#3B82F6] text-[#3B82F6] px-[2em] py-[0.8em] rounded-[15px] font-semibold ml-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ease duration-[0.3s]">{button2}</button>
            </div>
            <div className="absolute bottom-0 rounded-full w-[70px] h-[70px] bg-[#3B82F6] left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center pt-[0.7em]">
                <FaArrowDown color="white" size={18}  />
            </div>
        </div>
    )
}

export default OverviewHeroSection;