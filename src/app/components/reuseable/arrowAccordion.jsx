import { useState } from "react"

export default function ArrowAccordion({title, content}){

    const [open, setOpen] = useState(false)


    const handleOpen = () => {
        
        open ? setOpen(false) : setOpen(true);

    };


    const openPanel = {
        maxHeight: '2000px',
        transition: 'max-height 0.6s'
    }

    const closePanel = {
        maxHeight: '0px',
        transition: 'max-height 0.3s'
    }


    const openArrow = {
        transform: 'rotate(180deg)',
        transition: 'transform 0.3s'
    };

    const closeArrow = {
        transform: 'rotate(360deg)',
        transition: 'transform 0.3s'
    };



 
    return(
        <>
            <button onClick={handleOpen} className="flex flex-col items-start border-[1.5px] border-[#CDCDCD] w-[100%] rounded-[25px] ps-[18px] pe-[18px] pt-[18px] shadow ">

                <svg xmlns="http://www.w3.org/2000/svg" height="26px" style={open ? openArrow : closeArrow} className="fill-[#1A4561]" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" /></svg>

                <div className={`onset-bold text-[1.25rem] mt-[13px] text-[#484848] pb-[20px]`}>{title}</div>

                <div className="max-h-0 overflow-hidden" style={open ? openPanel : closePanel}>

                    <div className="pb-[40px] text-start border-t-2 pt-[10px]  ">
                        {content}
                    </div>

                </div>


            </button>
        </>
    )



    
}