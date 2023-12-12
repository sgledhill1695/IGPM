import Layout from "../layout";
import IgpmNorthernIreland from "@/app/components/more/igpmNorthernIreland";
import { useInView } from 'react-intersection-observer';
import 'animate.css';



export default function igpmNorthernIreland(){

    const options = {
        rootMargin: '0px',
        threshold: 0,
        triggerOnce: true,
    };


    const { ref, inView, entry } = useInView(options);


    return(
        <>
            <Layout>

                <main className="mb-[70px] md:mb-[114px]">

                    <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'} max-w-[1440px] m-auto`}>
                        <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">
                            <IgpmNorthernIreland />
                        </div>
                    </div>    


                </main>

            </Layout>
        </>
    )
}