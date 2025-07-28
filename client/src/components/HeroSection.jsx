import { FaArrowDown } from "react-icons/fa6";

function HeroSection(){
    return(
      <div className="w-[100%] overflow-hidden bg-cover bg-center text-center relative py-[11em] px-[1em]" style={{backgroundImage: "url(work.jpg)", fontFamily: "'Roboto', sans-serif"}}>
        <div className="absolute inset-0 z-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
        <p className="text-white relative z-10 text-[2rem] lg:text-[3rem] font-bold" style={{fontFamily: "'Raleway', sans-serif"}}>Work with purpose, from anywhere</p>
        <p className="text-white relative z-10 mt-[1em] font-medium text-[1.2rem] lg:text-[1.5rem]">Find your next remote opportunity in tech, design, marketing, and more.</p>
        <button className="py-[1em] px-[2em] lg:px-[3.5em] lg:py-[1.3em] bg-[#3B82F6] text-white cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s] relative z-10 mt-[3em] font-semibold rounded-[5px] text-[0.9rem] md:text-[1rem]">BROWSE JOBS</button>
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-0 mt-[4em] justify-center relative z-10 items-center">
          <p className="text-white font-medium text-[1.2rem]">Are you hiring remote talent?</p>
          <button className="ml-[1em] border border-white border-[2px] text-white px-[1.4em] py-[0.6em] rounded-[10px] text-[1rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ease duration-[0.3s]">POST A JOB</button>
        </div>
        <div className="absolute bottom-0 rounded-full w-[70px] h-[70px] bg-[#3B82F6] left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center pt-[0.65em]">
            <FaArrowDown color="white" size={20}  />
        </div>
      </div>
    )
}

export default HeroSection;