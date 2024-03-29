import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import 'animate.css';



export default function newsBanner(){

    const options = {
        rootMargin: '-150px',
        threshold: 0,
        triggerOnce: true,
    };

    //Intersection Observer
    const { ref, inView, entry } = useInView(options);

    
    return(
        <>
            <div className="max-w-[1440px] m-auto mt-[100px]">

                <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                    <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInUp opacity-100' : 'opacity-0'} grid grid-rows-3 md:grid-rows-2 md:grid-cols-4 gap-[7px]`}>


                        {/* Latest news */}
                        <button className="bg-[url('/images/newspaper.png')] bg-center bg-no-repeat bg-cover h-[150px] md:h-[300px] col-span-2 md:row-span-2  relative">
                            <Link href={'/news'}>
                                <div className="bg-[#0000004f] absolute content-[''] top-[0px] right-[0px] w-[100%] h-[100%] flex md:justify-center items-center">
                                    <h3 className="text-white text-[1.8rem] md:text-[2.1rem] relative text-start md:text-center ps-[28px] md:ps-[0px]">Latest from the IGPM</h3>
                                </div>
                            </Link>    
                        </button>

                        
                        {/* Join Us */}
                        <button className="bg-[url('/images/membership-header.png')] bg-center bg-no-repeat bg-cover col-span-2 row-span-1 relative">
                            <Link href={'/membership'}>
                                <div className="bg-[#00000054] absolute content-[''] top-[0px] right-[0px] w-[100%] h-[100%] flex flex-col justify-center ps-[28px] pe-[28px]">
                                    <h3 className="text-white text-[1.8rem] relative text-start">Join Us</h3>
                                    <p className="text-white text-[0.9rem] text-start">Become an associate member of the IGPM.</p>
                                </div>
                            </Link>
                        </button>

        
                        {/* Toolkits */}
                        <button className="bg-[url('/images/accreditation-two.png')] bg-center bg-no-repeat bg-cover  col-span-2 row-span-1 flex flex-col justify-center ps-[28px] pe-[28px] relative">
                            <Link href={'/accreditation'}>
                                <div className="bg-[#00000054] absolute content-[''] top-[0px] right-[0px] w-[100%] h-[100%] flex flex-col justify-center ps-[28px] pe-[28px]">
                                    <h3 className="text-white text-[1.8rem] text-start">Accreditation</h3>
                                    <p className="text-white text-[0.9rem] text-start">Develop and progress your career in General Practice Management.</p>
                                </div>
                            </Link>
                        </button>


                    </div>

                </div>

            </div>    


        
        </>
    )
}