function TimelineSection({title, img, step1, description1, step2, description2, step3, description3, step4, description4, step5, description5}){
    return(
        <div className="flex px-10 padding-x py-[5em] md:py-[7em] max-w-[1300px] mx-auto flex-col lg:flex-row" style={{fontFamily: "'Roboto', sans-serif"}}>
            <div className="w-[100%] lg:w-[45%]">
                <p className="font-bold text-[1.5rem] lg:text-[2.5rem]" style={{fontFamily: "'Raleway', sans-serif"}}>{title}</p>
                <img src={`${img}`} className="w-[70%] mx-auto mt-[3em]" />
            </div>
            <div className="w-[100%] lg:w-[55%] mt-[3em] lg:mt-0">
                <div className="pb-[1em]">
                    <p className="font-medium text-[1.5rem]">Step 1: {step1}</p>
                    <p className="mt-[0.6em]">{description1}</p>
                </div>
                <div className="w-[100%] bg-gray-700 h-[0.5px]"></div>
                <div className="py-[1em]">
                    <p className="font-medium text-[1.5rem]">Step 2: {step2}</p>
                    <p className="mt-[0.6em]">{description2}</p>
                </div>
                <div className="w-[100%] bg-gray-700 h-[0.5px]"></div>
                <div className="py-[1em]">
                    <p className="font-medium text-[1.5rem]">Step 3: {step3}</p>
                    <p className="mt-[0.6em]">{description3}</p>
                </div>
                <div className="w-[100%] bg-gray-700 h-[0.5px]"></div>
                <div className="py-[1em]">
                    <p className="font-medium text-[1.5rem]">Step 4: {step4}</p>
                    <p className="mt-[0.6em]">{description4}</p>
                </div>
                <div className="w-[100%] bg-gray-700 h-[0.5px]"></div>
                <div className="py-[1em]">
                    <p className="font-medium text-[1.5rem]">Step 5: {step5}</p>
                    <p className="mt-[0.6em]">{description5}</p>
                </div>
                <div className="w-[100%] bg-gray-700 h-[0.5px]"></div>
            </div>
        </div>
    )
}

export default TimelineSection;