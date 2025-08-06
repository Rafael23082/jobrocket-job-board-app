import { FaArrowUp } from "react-icons/fa";

function DashboardBox({title, value, Icon}){
    return(
        <>
        <div className="w-[100%] bg-white py-[0.85em] px-[1.3em] rounded-[5px] flex flex-col">
            <div className="flex">
                <div className="flex-1">
                    <p className="text-[0.85rem] text-gray-500 font-medium break-words hyphens-auto">{title}</p>
                    <p className="text-[1.3rem] font-medium">{value}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-400 w-fit h-fit p-[0.85em] rounded-full ml-[1em]">
                    <Icon color={"white"} size={21} />
                </div>
            </div>
            <div className="flex flex-col mt-[1em]">
                <span className="flex items-center">
                    <FaArrowUp color="#22c55e" size={15} />
                    <p className="text-[#22c55e] font-light text-[0.9rem] pl-[0.3em]">2.48%</p>
                </span>
                <p className="font-light text-[0.9rem] text-gray-500">Since last month</p>
            </div>
        </div>
        </>
    )
}

export default DashboardBox;