import 'animate.css';
import { useInView } from 'react-intersection-observer';

export default function Podcast(){

    const options = {
        rootMargin: '-150px',
        threshold: 0,
        triggerOnce: true,
    };

    //Intersection Observer
    const { ref, inView, entry } = useInView(options);


    return(

        <div className="max-w-[1440px] m-auto mt-[65px] sm:mt-[50px]">
            <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px] mt-[32px] md:mt-[88px] lg:mt-[105px]">

                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInUp opacity-100' : 'opacity-0'} flex justify-center mt-[50px]`}>
                    <iframe src="https://embed.acast.com/652000d34dd8c600118f113b?feed=true" className="w-[100%] sm:w-[80%]"  width="100%" height="300px"></iframe>
                </div>

            </div>
        </div>

    )
}