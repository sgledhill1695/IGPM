import DirectorLarge from "./directorLarge"

export default function JoWadey() {

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between mt-[140px] md:mt-[200px] items-center gap-[20px] md:gap-[40px]">



                <DirectorLarge
                    url={'/'}
                    image={'/images/director-2.png'}
                    backgroundColor={'#83C5E9'}
                />



                <div className="">

                    <h1 className="text-[#484848]">Jo Wadey</h1>

                    <p className="mt-5 md:mt-6">
                        Jo Wadey is the Practice Business Manager at St Lawrence Surgery in Worthing and Chair of the West Sussex Practice Managers Association. Jo is passionate about the development and support of Practice Managers and patient engagement to deliver excellence in primary care. 
                    </p>

                    <p className="mt-5">
                        Jo has led on many exciting and innovative initiatives that have taken placed at St Lawrence Surgery and has enabled the practice to be rated as outstanding by CQC in 2016.
                    </p>

                    <p className="mt-5">
                        Jo is delighted to be one of the Co-Founding Directors of the Institute of General Practice Management and leads on engagement as part of her role.                    
                    </p>




                </div>



            </div>
        </>
    )
}