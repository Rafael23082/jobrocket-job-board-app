function TimelineSection(){
    return(
        <div className="flex px-10 padding-x py-[5em] md:py-[7em] max-w-[1300px] mx-auto flex-col lg:flex-row" style={{fontFamily: "'Roboto', sans-serif"}}>
            <div className="w-[100%] lg:w-[45%]">
                <p className="font-bold text-[1.5rem] lg:text-[2.5rem]" style={{fontFamily: "'Raleway', sans-serif"}}>Career Tips</p>
                <img src="tips.png" className="w-[70%] mx-auto mt-[3em]" />
            </div>
            <div className="w-[100%] lg:w-[55%] mt-[3em] lg:mt-0">
                <div className="pb-[1em]">
                    <p className="font-medium text-[1.5rem]">Step 1: Polish Your Resume</p>
                    <p className="mt-[0.6em]">Craft a resume that highlights your achievements, not just your duties. Use clear formatting and tailor it for each job.</p>
                </div>
                <div className="w-[100%] bg-gray-700 h-[0.5px]"></div>
                <div className="py-[1em]">
                    <p className="font-medium text-[1.5rem]">Step 2: Build a Standout Profile</p>
                    <p className="mt-[0.6em]">Set up a compelling candidate profile on our platform. Upload your resume, list your skills, and let employers find you.</p>
                </div>
                <div className="w-[100%] bg-gray-700 h-[0.5px]"></div>
                <div className="py-[1em]">
                    <p className="font-medium text-[1.5rem]">Step 3: Start Smart Job Searching</p>
                    <p className="mt-[0.6em]">Use filters to focus your search, and set up alerts for roles that match your interests and experience.</p>
                </div>
                <div className="w-[100%] bg-gray-700 h-[0.5px]"></div>
                <div className="py-[1em]">
                    <p className="font-medium text-[1.5rem]">Step 4: Prepare to Impress</p>
                    <p className="mt-[0.6em]">Research the company, practice interview questions, and prepare thoughtful answers that show your value.</p>
                </div>
                <div className="w-[100%] bg-gray-700 h-[0.5px]"></div>
                <div className="py-[1em]">
                    <p className="font-medium text-[1.5rem]">Step 5: Follow Up Like a Pro</p>
                    <p className="mt-[0.6em]">Send a brief thank-you message after interviews. It reinforces your interest and helps you stand out.</p>
                </div>
                <div className="w-[100%] bg-gray-700 h-[0.5px]"></div>
            </div>
        </div>
    )
}

export default TimelineSection;