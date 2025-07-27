import Navbar from "./components/Navbar.jsx";

function LandingPage(){
  return(
    <>
      <Navbar current={"Overview"} />  
      <div className="w-[100%] lg:h-[650px] overflow-hidden"><img src="work.jpg" className="w-full h-full object-cover object-center" /></div>
    </>
  );
}

export default LandingPage;