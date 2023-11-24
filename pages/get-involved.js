import Layout from "./layout";
import GetInvolved from "@/app/components/get-involved/getInvolved";
import PageHeader from "@/app/components/reuseable/pageHeader";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function getInvolved(){

    const options = {
        rootMargin: '0px',
        threshold: 0,
        triggerOnce: true,
    };

    //Intersection Observer
    const { ref, inView, entry } = useInView(options);



    return(
        <>
            <Layout>

                <PageHeader title={'Get Involved'} backgroundImage={'/images/get-involved.png'}/>

                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'}`}>
                            <GetInvolved />
                        </div>


                    </div>
                </div>    


            </Layout>
        </>
    )
}