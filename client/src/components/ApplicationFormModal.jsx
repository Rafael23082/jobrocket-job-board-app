import Modal from "react-modal";

function ApplicationFormModal({jobOpened, setJobOpened, applyIsOpen, setApplyIsOpen}){
    return(
    <Modal className="w-[70%] max-w-[1000px] max-h-[80vh] overflow-auto bg-white rounded-[5px] p-[2em] z-40 relative shadow-lg" isOpen={applyIsOpen} onRequestClose={() => setApplyIsOpen(false)} overlayClassName="inset-0 fixed bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[90]">
        <div style={{fontFamily: "'Roboto', sans-serif"}}>
        </div>
    </Modal>
    )
}

export default ApplicationFormModal;