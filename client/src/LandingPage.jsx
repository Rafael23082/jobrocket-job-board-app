import Navbar from "./components/Navbar.jsx";

function LandingPage(){
  return(
    <>
      <Navbar current={"Overview"} />  
      <div className="w-[100%] overflow-hidden bg-cover bg-center text-center relative py-[11em]" style={{backgroundImage: "url(work.jpg)", fontFamily: "'Roboto', sans-serif"}}>
        <div className="absolute inset-0 z-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
        <p className="text-white relative z-10 text-[2.5rem] font-medium" style={{fontFamily: "'Raleway', sans-serif"}}>Work with purpose, from anywhere</p>
        <p className="text-white relative z-10 mt-[1em] font-medium text-[1.3rem]">Find your next remote opportunity in tech, design, marketing, and more.</p>
        <button className="px-[3.5em] py-[1.3em] bg-[#3B82F6] text-white cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s] relative z-10 mt-[3em] font-semibold rounded-[5px]">BROWSE JOBS</button>
        <div className="flex mt-[4em] justify-center relative z-10 items-center">
          <p className="text-white font-medium text-[1.15rem]">Are you hiring remote talent?</p>
          <button className="ml-[1em] border border-white border-[2px] text-white px-[1.4em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold mr-[1em] cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ease duration-[0.3s]">POST A JOB</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;