import { FaArrowUp } from "react-icons/fa";

function DashboardBox({title, value, Icon, isLoading}){
    return(
        <>
        <div className="w-[100%] bg-white py-[1.3em] px-[1.3em] rounded-[5px] flex flex-col">
            <div className="flex">
                <div className="flex-1">
                    <p className={`text-[0.85rem] ${isLoading ? "text-gray-200 bg-gray-200 animate-pulse": "text-gray-500"} font-medium break-words hyphens-auto`}>{title}</p>
                    <p className={`text-[1.3rem] font-medium ${isLoading && "text-gray-200 bg-gray-200 animate-pulse"}`}>{isLoading ? "val": value}</p>
                </div>
                <div className={`${isLoading ? "bg-gray-200 animate-pulse": "bg-gradient-to-br from-blue-500 to-blue-400"} w-fit h-fit p-[0.85em] rounded-full ml-[1em]`}>
                    {!isLoading && <Icon color={"white"} size={21} />}
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardBox;