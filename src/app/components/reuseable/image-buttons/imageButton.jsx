export default function ImageButton({imageSource, title, content }){


    return(
        <>
            <button className={`bg-cover bg-no-repeat bg-center h-[322px] w-[483px] rounded-[20px] relative z-[1]`} style={{ backgroundImage: `url(${imageSource})` }} >

                <div className={`absolute content-[''] top-[0px] left-[0px] w-[100%] h-[100%] flex flex-col justify-end items-start ps-[27px] lg:ps-[40px] pe-[40px] pb-[19px] rounded-[20px] z-[2]`} style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0) 40%, rgba(0,0,0,0.7357143541010154) 68%)' }}>

                    <div className='text-white relative z-[3]'>

                        <h3 className='text-[1.9rem] text-start'>{title}</h3>
                        <p className='text-start mt-[6px]'>{content}</p>

                    </div>

                </div>

            </button>
        </>
    )
}