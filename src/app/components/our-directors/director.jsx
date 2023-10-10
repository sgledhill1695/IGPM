import Link from "next/link";

export default function Director({image, name, url, backgroundColor}){

    return(
        <>

        
            <div className={`rounded-br-[40px] rounded-tl-[40px] bg-[${backgroundColor}] h-[295px] w-[267px] flex items-end justify-center relative`}>

                <Link href={url}>


                    <img src={image} className="w-[100%] h-[260px] rounded-br-[40px] rounded-tl-[40px] relative"></img>
    
    
                    <div className="absolute top-[0px] left-[0px] h-[100%] w-[100%] rounded-br-[40px] rounded-tl-[40px] flex items-end" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.69) 9.16%, rgba(0, 0, 0, 0.00) 36.05%)' }}>
    
                        <div className="text-white ps-[20px] pb-[20px] onset-bold text-[1.2rem]">{name}</div>
    
    
                    </div>

                </Link>


            </div>

    
        </>
    )
}