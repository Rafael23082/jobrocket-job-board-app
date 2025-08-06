function FeatureHighlightSection({title, img, feature1, description1, Icon1, feature2, description2, Icon2}){
    return(
        <div className="flex max-w-[1300px] mx-auto justify-between py-[5em] md:py-[7em] items-center flex-col lg:flex-row-reverse">
          <div className="w-[100%] px-10 lg:w-[50%] lg:px-0 lg:pr-10 flex justify-center items-center padding-x">
            <img src={`${img}`} className="w-[70%]" />
          </div>
          <div className="w-[100%] px-10 lg:w-[50%] lg:px-0 lg:pl-10 mt-[4em] lg:mt-0 padding-x">
            <p className="font-bold text-[1.5rem] lg:text-[2.5rem]" style={{fontFamily: "'Raleway', sans-serif"}}>{title}</p>
            <div className="flex mt-[1.5em]">
              <div className="p-[1em] rounded-full bg-gradient-to-br from-blue-500 to-blue-400 h-fit shrink-0">
                <Icon1 color={"white"} size={22} />
              </div>
              <div className="pl-[1.5em]">
                <p className="font-medium text-[1.1rem]" style={{fontFamily: "'Roboto', sans-serif"}}>{feature1}</p>
                <p style={{fontFamily: "'Roboto', sans-serif"}}>{description1}</p>
              </div>
            </div>
            <div className="flex mt-[1.5em]">
              <div className="p-[1em] rounded-full bg-gradient-to-br from-blue-500 to-blue-400 h-fit shrink-0">
                <Icon2 color={"white"} size={22} />
              </div>
              <div className="pl-[1.5em]">
                <p className="font-medium text-[1.1rem]" style={{fontFamily: "'Roboto', sans-serif"}}>{feature2}</p>
                <p style={{fontFamily: "'Roboto', sans-serif"}}>{description2}</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default FeatureHighlightSection;