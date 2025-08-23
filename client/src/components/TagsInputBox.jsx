import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

function TagsInputBox({formValues, setFormValues, field, index}){
    const [currentTag, setCurrentTag] = useState("");
    const [suggestionsDisplayed, setSuggestionsDisplayed] = useState(false);
    const [suggestionOptions, setSuggestionOptions] = useState([]);

    useEffect(() => {
        let fieldOptions;
        if (currentTag.trim() != ""){
            fieldOptions = field.options.filter((option) => option.toLowerCase().includes(currentTag.toLowerCase()) && !formValues["Tags"].some((tag) => tag.toLowerCase() == option.toLowerCase()));
        }else{
            fieldOptions = []
        }
        
        if (fieldOptions.length > 0){
            setSuggestionOptions(fieldOptions);
            setSuggestionsDisplayed(true)
        }else{
            setSuggestionOptions([]);
            setSuggestionsDisplayed(false);
        }
    }, [currentTag])

    return(
        <div className="relative">
            <p className={`text-gray-500 font-medium text-[0.875rem] ${index == 0 ? "pt-[2em]": "pt-[1em]"}`}>{field.name}</p>
            <div className="mt-[0.4em] border w-[100%] rounded-[5px] focus-within:border focus-within:outline">
                <div className="px-[1em] py-[1em] flex flex-wrap gap-x-[0.7em] gap-y-[0.5em]">
                    {formValues[field.name]?.map((tag, index) => (
                        <div key={index} className={`text-white bg-[#3B82F6] px-[0.5em] py-[0.3em] text-[0.7rem] rounded-[5px] flex gap-x-[0.3em] items-center`}>
                            <p>{tag}</p>
                            <IoIosClose size={17} className="cursor-pointer" onClick={() => {
                                let newTagArray = formValues["Tags"].filter((t) => t.toLowerCase() != tag.toLowerCase());
                                setFormValues((prev) => ({...prev, ["Tags"]: newTagArray}))
                            }} />
                        </div>
                    ))}
                    <input className="px-[1em] min-w-[100px] focus:outline-none flex-1" type="text" placeholder="enter tags here" value={currentTag} onChange={(e) => {setCurrentTag(e.target.value)}} />
                </div>
            </div>
            {suggestionsDisplayed && (
                <div className={`flex flex-col absolute top-[calc(100%+10px)] w-[100%] rounded-[10px] select-none overflow-hidden border shadow bg-white max-h-48 overflow-y-auto`}>
                    {suggestionOptions.map((suggestion, index) => (
                        <p key={index} className="px-[1em] py-[0.5em] bg-white hover:brightness-90" onClick={() => {
                            let found = formValues["Tags"].some((tag) => tag.toLowerCase() == suggestion.toLowerCase());
                            if (!found){
                                let newTagArray = [...(formValues["Tags"]), suggestion]
                                setFormValues((prev) => ({...prev, ["Tags"]: newTagArray}));
                            }
                            setCurrentTag("");
                            setSuggestionOptions([])
                        }}>{suggestion}</p>                        
                    ))}
                </div>
            )}
        </div>
    )
}

export default TagsInputBox;