function WhyChooseUsBox({Icon, title, text}){
    return(
        <div className="flex flex-col" style={{fontFamily: "'Roboto', sans-serif"}}>
            <div className="p-[1em] rounded-full bg-white h-fit w-fit shrink-0 mx-auto">
                <Icon size={25} />
            </div>
            <p className="font-medium text-[1.5rem] mt-[1em]" style={{fontFamily: "'Roboto', sans-serif"}}>{title}</p>
            <p className="pt-[0.3em] text-[1.1rem]">{text}</p>
        </div>
    )
}

export default WhyChooseUsBox;