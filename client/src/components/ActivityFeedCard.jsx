function ActivtyFeedCard({title, subtitle, index}){
    return(
        <div className={`flex ${index == 0 ? "pt-[1.5em] pb-[0.75em]": "py-[0.75em]"}`}>
            <div className="w-10 h-10 rounded-full border"></div>
            <div className=" pl-[1em]">
                <p>{title}</p>
                <p className="text-[0.8rem] text-gray-500 pt-[0.2em]">{subtitle}</p>
            </div>
        </div>
    )
}

export default ActivtyFeedCard;