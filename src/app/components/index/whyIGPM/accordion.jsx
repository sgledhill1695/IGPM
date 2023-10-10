import { useState } from "react";
import styles from '../index.module.css';

export default function Accordion({title , content, icon}){

    const [open, setOpen] = useState(false);


    const handleOpen = () => {

        if (open){
            setOpen(false);
        } else {
            setOpen(true);
        }

    };


    return(
        <>

            
            <button onClick={handleOpen} className={`${styles.accordion} ${open ? 'bg-[#1C4F70]' : 'bg-[#B4C5D0] hover:bg-[#1C4F70]'}  py-[12px] px-[24px]  w-[100%] h-[56px] rounded-[20px] text-[#444] flex items-center justify-between`}>

                <div className={`${open ? 'fill-[#B4C5D0]' : 'fill-[#1C4F70]'}`}>
                    {icon}
                </div> 


                <p className={`${open ? 'text-white' : ''}`}>
                    {title}
                </p>
                
                {!open ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? 'fill-[#B4C5D0]' : 'fill-[#1C4F70]'}`}  height="23px" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" /></svg>
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? 'fill-[#B4C5D0]' : 'fill-[#1C4F70]'}`} height="23px" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z" /></svg>
                    </>
                )}

            </button>

    
            <div className={`${styles.panel} ${open ? styles.open : ''} ms-[20px] me-[20px] ps-[5px] pe-[30px] w-[100%]`}>

                {content}

            </div>


            

        
        
        </>
    )
}