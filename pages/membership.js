import Layout from "./layout";
import Membership from "@/app/components/membership/membership";
import PageHeader from "@/app/components/reuseable/pageHeader";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function membership(){

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

            <main className="mb-[70px] md:mb-[114px]">

                    <PageHeader backgroundImage={'/images/membership-header.png'} title={'Membership'} />
                    <div className="max-w-[1440px] m-auto">
                        <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                            <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'}`}>
                                <Membership />
                            </div>

                        </div>
                    </div>    

            </main>

        </Layout>
        
        </>
    )
}