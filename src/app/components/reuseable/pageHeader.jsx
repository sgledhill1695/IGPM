export default function PageHeader({backgroundImage, title}){

    return(
        <>
            <div className={`relative`} style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                <div className="bg-[#1a4561c2] absolute top-[0px] left-[0px] h-[100%] w-[100%] z-10">
                </div>

                <div className='max-w-[1440px] m-auto z-20 relative'>

                    <div className={`h-[150px] sm:h-[300px] lg:h-[270px] flex flex-col justify-center`}>

                        <div className='flex flex-col  ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]'>

                            <h1 className="text-white">{title}</h1>

                        </div>

                    </div>

                </div>

            </div>       
        </>
    )
}