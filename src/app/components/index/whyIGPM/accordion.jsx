import { useState } from "react";
import styles from '../index.module.css';

export default function Accordion({title , content, icon}){

    const [open, setOpen] = useState(false);


    const handleOpen = () => {

        open ? setOpen(false) : setOpen(true);

    };

    const openPanel = {
        maxHeight: '2000px',
        paddingTop: '5px',
        paddingBottom: '5px',
        opacity: '1',
        transition: 'padding-top 0.2s , padding-bottom 0.2s , max-height 2s  '
    }

    const closePanel = {
        maxHeight: '0px',
        paddingTop: '0px',
        paddingBottom: '0px',
        transition: 'padding-bottom 0.3s , padding-top 0.3s, max-height 0.3s '
    }


    const openArrow = {
        transform: 'rotate(180deg)',
        transition: 'transform 0.2s'
    };

    const closeArrow = {
        transform: 'rotate(360deg)',
        transition: 'transform 0.2s'
    };





    return(
        <>


            <button onClick={() => handleOpen()} className={`border-[2px]  border-[#1C4F70] rounded-[8px] cursor-pointer shadow-md`}>

                <div className={` ${open ? 'bg-[#1C4F70]' : ''} flex justify-between px-[20px] pt-[12px] pb-[12px]`}>

                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 512 512" className={`${open ? 'fill-[white]' : 'fill-[#1C4F70]'} `}>

                        {icon}

                    </svg>


                    <h3 className={`${open ? 'text-[white]' : 'text-[#484848]'}`}>{title}</h3>
    
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? 'fill-[white]' : 'fill-[#1C4F70]'} `} style={open ? openArrow : closeArrow} height="1em" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" /></svg>

                </div>


                <div className={`text-start  overflow-hidden px-[20px]`} style={open ? openPanel : closePanel}>
                    {content}
                </div>

            </button>

            

            

        
        
        </>
    )
}