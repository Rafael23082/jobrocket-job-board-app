function WhyChooseUsBox({Icon, title, text}){
    return(
        <div className="flex flex-col" style={{fontFamily: "'Roboto', sans-serif"}}>
            <div className="p-[1em] rounded-full h-fit w-fit shrink-0 mx-auto bg-gradient-to-br from-blue-500 to-blue-400">
                <Icon size={25} color={"white"} />
            </div>
            <p className="font-medium text-[1.5rem] mt-[1em]" style={{fontFamily: "'Roboto', sans-serif"}}>{title}</p>
            <p className="pt-[0.3em] text-[1.1rem]">{text}</p>
        </div>
    )
}

export default WhyChooseUsBox;