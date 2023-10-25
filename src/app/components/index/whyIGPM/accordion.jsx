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

                    <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? 'fill-[white]' : 'fill-[#1C4F70]'}`} height="1em" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
    
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