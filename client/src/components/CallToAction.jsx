function CallToAction(){
    return(
        <div className="py-[7em] md:py-[9em] padding-x px-10 bg-[#3B82F6] text-white text-center">
            <p className="text-white relative z-10 text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold w-[100%] md:w-[60%] mx-auto" style={{fontFamily: "'Raleway', sans-serif"}}>Ready to land your dream job?</p>
            <p className="text-center text-[1.3rem] pt-[0.5em] subheading">Join thousands of candidates already advancing their careers.</p>
            <button className="bg-white text-[#3B82F6] px-[2em] py-[1em] rounded-[10px] font-semibold hover:brightness-90 cursor-pointer mt-[2em] transition duration-[0.3s]">Get Started Now</button>
        </div>
    )
}

export default CallToAction;