import DirectorLarge from "./directorLarge";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function KayKean() {

    const options = {
        rootMargin: '0px',
        threshold: 0,
        triggerOnce: true,
    };

    //Intersection Observer
    const { ref, inView, entry } = useInView(options);



    return (
        <>
            <div className="flex flex-col md:flex-row justify-between mt-[140px] md:mt-[200px] items-center gap-[20px] md:gap-[40px]">


                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInLeft opacity-100' : 'opacity-0'}`}>

                    <DirectorLarge
                        url={'/'}
                        image={'/images/kay-kean.png'}
                        backgroundColor={'#83C5E9'}
                    />

                </div>



                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'}`}>

                    <h1 className="text-[#484848]">Kay Kean</h1>

                    <p className="mt-5 md:mt-6">
                        Kay has worked in the NHS for her whole career. Accepting redundancy from NHS England in 2014 Kay decided to look for her dream job as a Practice Manager. Her first job was at Alvanley Family Practice where she developed a collaborative practice model to work with volunteers and the local community to add capacity and improve health outcomes.                      
                    </p>

                    <p className="mt-5">
                        Kay now works at Urban Village Medical Practice in Ancoats, Manchester.  It is a unique practice having a standard contract, but also a contract to provide health care to the city’s homeless community.  The practice works closely with statutory and voluntary bodies, community interest companies and those experiencing homelessness to improve health outcomes.
                    </p>

                </div>



            </div>
        </>
    )
}