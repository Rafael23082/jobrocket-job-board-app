function Statistics(){
    return(
        <div className="flex flex-col lg:flex-row justify-around font-bold max-w-[1300px] mx-auto text-white py-[5em] md:py-[9em] text-[1rem] lg:text-[1.5rem]" style={{fontFamily: "'Roboto', sans-serif"}}>
          <span className="text-center leading-[4em] lg:leading-[3em] leading">
            <p className="number text-[6rem]">1M+</p>
            <p>Jobs Secured</p>
          </span>
          <span className="text-center leading-[4em] lg:leading-[3em] pt-[2.5em] lg:pt-0 leading">
            <p className="number text-[6rem]">100K+</p>
            <p>Tech Jobs</p>
          </span>
          <span className="text-center leading-[4em] lg:leading-[3em] pt-[2.5em] lg:pt-0 leading">
            <p className="number text-[6rem]">4M+</p>
            <p>Workers</p>
          </span>
        </div>
    )
}

export default Statistics;