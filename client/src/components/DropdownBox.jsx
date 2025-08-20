import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function DropdownBox({index, values, dropdownText, setDropdownText, dropdownOpen, setDropdownOpen}){
    return(
        <div key={index}>
            <div className="relative mt-[0.4em] border rounded-[5px]">
                <span className="py-[0.3em] flex items-center justify-between px-[1em] select-none" onClick={() => {setDropdownOpen(!dropdownOpen)}}>{dropdownText} {!dropdownOpen ? <IoIosArrowDown />: <IoIosArrowUp/>}</span>
                <div className={`flex flex-col absolute top-[calc(100%+10px)] w-[100%] rounded-[10px] select-none overflow-hidden shadow ${dropdownOpen ? "max-h-[1000px] border duration-[0.5s]": "max-h-0 border-transparent duration-[0.1s]"} bg-white transition-all`}>
                    {values.map((value, index) => (
                        <p className="px-[1em] py-[0.5em] bg-white hover:brightness-90" onClick={() => {setDropdownText(value); setDropdownOpen(!dropdownOpen)}}>{value}</p>                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DropdownBox;