import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoIosWarning } from "react-icons/io";

function ApplicationFormModal({jobOpened, setJobOpened, applyIsOpen, setApplyIsOpen}){
    const [errors, setErrors] = useState({});
    const fields = [{
        name: "Full Name",
        type: "text",
        placeholder: "John Doe"
    }, {
        name: "Email",
        type: "text",
        placeholder: "mail@gmail.com"
    }, {
        name: "Location",
        type: "text",
        placeholder: "e.g. Jakarta"
    }, {
        name: "Desired salary",
        type: "number",
        placeholder: "enter in USD"
    }, {
        name: "Your interest in this company",
        type: "textarea",
        placeholder: ""
    }, {
        name: "Upload your resume",
        type: "file",
        placeholder: ""
    }]
    const [formValues, setFormValues] = useState({});
    const handleSubmit = () => {
        let errors = {};
        fields.map((field) => {
            if (field.name == "Email"){
                const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues[field.name]);
                if (!valid){
                    errors[field.name] = "Invalid email format."
                }
            }
            if (!formValues[field.name]){
                errors[field.name] = "This field is required."
            }
            if (field.name == "Years of experience" || field.name == "Desired salary"){
                if (!formValues[field.name]){
                   errors[field.name] = "Please enter a valid number."
                }
            }
        })
        setErrors(errors);
    }

    return(
    <Modal className="w-[100%] sm:w-[80%] lg:w-[70%] max-w-[1000px] max-h-[100vh] sm:max-h-[80vh] overflow-auto bg-white rounded-[5px] py-[3em] px-[2em] sm:px-[4em] z-40 relative shadow-lg" isOpen={applyIsOpen} onRequestClose={() => setApplyIsOpen(false)} overlayClassName="inset-0 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[90]">
        <div style={{fontFamily: "'Roboto', sans-serif"}}>
            <p className="text-[1.5rem] font-bold pr-[1.5em]" style={{fontFamily: "'Raleway', sans-serif"}}>{jobOpened.role} Application</p>
            <p className="pt-[0.5em] pr-[2em]">Complete the following fields or log in to apply within a click.</p>
            {fields.map((field, index) => {
                if (field.type != "textarea" && field.type != "file"){
                    return(
                        <div key={index}>
                            <p className="font-bold pt-[1.5em]">{field.name} <span className="text-red-500">*</span></p>
                            <input type={field.type} className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" placeholder={field.placeholder}
                            onChange={(e) => {
                                setFormValues((prev) => ({...prev, [field.name]: e.target.value}))
                            }} value={formValues[field.name]}
                            />
                            {errors[field.name] && (
                                <span className="text-red-500 text-[0.75rem] pt-[0.5em] flex items-center gap-x-[5px]"><IoIosWarning />{errors[field.name]}</span>
                            )}
                        </div>
                    )
                }else if (field.type == "textarea"){
                    return(
                        <div key={index}>
                            <p className="font-bold pt-[1em]">{field.name} <span className="text-red-500">*</span></p>
                            <textarea className="px-[1em] mt-[0.4em] border py-[0.3em] w-[100%] rounded-[5px]" rows={6} 
                            onChange={(e) => {
                                setFormValues((prev) => ({...prev, [field.name]: e.target.value}))
                            }} value={formValues[field.name]}
                            />
                            {errors[field.name] && (
                                <span className="text-red-500 text-[0.75rem] pt-[0.5em] flex items-center gap-x-[5px]"><IoIosWarning />{errors[field.name]}</span>
                            )}
                        </div>
                    );
                }else{
                    return(
                        <div key={index}>
                            <p className="font-bold pt-[1em]">{field.name} <span className="text-red-500">*</span></p>
                            <label for="resume" className="flex flex-col mt-[0.4em] border py-[0.5em] w-[100%] rounded-[5px] border-dashed items-center py-[1em] cursor-pointer">
                                <label for="resume" className="text-[0.9rem] font-semibold px-[1.5em] py-[0.8em] border bg-gray-100 border-gray-400 rounded-[5px] cursor-pointer hover:brightness-90">Drag or browse your resume</label>
                                <p className="text-[0.9rem] text-gray-400 pt-[0.5em]">supports .pdf, .doc, .docx, or .txt files</p>
                                {formValues[field.name] && (
                                    <p className="text-[0.9rem] pt-[0.5em]">{formValues[field.name]}</p>
                                )}
                            </label>
                            <input type="file" id="resume" accept=".pdf,.doc,.docx,.txt" className="hidden"
                            onChange={(e) => {
                                setFormValues((prev) => ({...prev, [field.name]: e.target.files[0]?.name}))
                            }}
                            />
                            {errors[field.name] && (
                                <span className="text-red-500 text-[0.75rem] pt-[0.5em] flex items-center gap-x-[5px]"><IoIosWarning />{errors[field.name]}</span>
                            )}
                        </div>
                    );
                }
            })}
            <button className="block mx-auto mt-[2em] bg-[#3B82F6] text-white px-[1.5em] py-[0.6em] rounded-[10px] text-[0.88rem] font-semibold cursor-pointer hover:bg-blue-600 transition ease duration-[0.3s]" onClick={handleSubmit}>Submit Application</button>
        </div>
        <div className="absolute top-[2em] right-3 sm:right-5 cursor-pointer p-[0.3em] rounded-full bg-white">
            <IoIosClose color="black" size={40} onClick={() => setApplyIsOpen(false)} />
        </div>
    </Modal>
    )
}

export default ApplicationFormModal;