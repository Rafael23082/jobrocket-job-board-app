function DashboardSideNavbar(){
    return(
        <div className="flex fixed flex-col w-fit pb-[1em] h-[100vh] top-0 left-0 bg-white justify-between overflow-auto" style={{fontFamily: "'Roboto', sans-serif"}}>
            <div className="flex flex-col text-[0.9rem]">
                <p className="text-[1.5rem] font-bold text-[#3B82F6] select-none pt-[1em] px-[2em]" style={{fontFamily: "'Raleway', sans-serif"}}>JobRocket</p>
                <div className="mt-[1em] py-[1em] mx-[0.5em] bg-gray-100 rounded-[5px] pl-[1em] cursor-pointer">Dashboard</div>
                <div className="py-[1em] mx-[0.5em] pl-[1em] cursor-pointer">Saved Jobs</div>
                <div className="py-[1em] mx-[0.5em] pl-[1em] cursor-pointer">My Applications</div>
                <div className="py-[1em] mx-[0.5em] pl-[1em] cursor-pointer">Profile</div>
            </div>
            <div className="py-[1em] text-[0.9rem] mx-[0.5em] pl-[1em]">Settings</div>
        </div>
    )
}

export default DashboardSideNavbar;