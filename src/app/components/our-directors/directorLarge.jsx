
export default function DirectorLarge({image, url, backgroundColor}) {

    return(
        <>
            <div className={`rounded-br-[40px] rounded-tl-[40px] bg-[${backgroundColor}] h-[450px] md:h-[450px]  md:min-w-[350px] lg:min-w-[400px] lg:min-h-[400px] flex items-end justify-center relative`}>

                <img src={image} className="w-[100%] h-[410px] rounded-br-[40px] rounded-tl-[40px] relative"></img>

            </div>
        </>
    )
}