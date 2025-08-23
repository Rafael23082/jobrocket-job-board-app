import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function DropdownBox({index, values, fieldName, formValues, setFormValues, dropdownIndex, setDropdownIndex}){
    return(
        <div key={index}>
            <div className="relative mt-[0.4em] border rounded-[5px]">
                <span className="py-[0.3em] flex items-center justify-between px-[1em] select-none" onClick={() => {
                    if (dropdownIndex == index){
                        setDropdownIndex(null)
                    }else{
                       setDropdownIndex(index)
                    }
                }}>{formValues[fieldName]} {dropdownIndex != index ? <IoIosArrowDown />: <IoIosArrowUp/>}</span>
                <div className={`flex flex-col absolute top-[calc(100%+10px)] w-[100%] rounded-[10px] select-none overflow-hidden shadow ${dropdownIndex == index ? "max-h-48 border duration-[0.3s]": "max-h-0 border-transparent duration-[0.1s]"} bg-white z-50 transition-all overflow-y-auto`}>
                    {values.map((value, index) => (
                        <p className="px-[1em] py-[0.5em] bg-white hover:brightness-90" onClick={() => {setFormValues((prev) => ({...prev, [fieldName]: value})); setDropdownIndex(null)}}>{value}</p>                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DropdownBox;