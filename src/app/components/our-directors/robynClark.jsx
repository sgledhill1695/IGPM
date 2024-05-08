import DirectorLarge from "./directorLarge";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function RobynClark(){

    const options = {
        rootMargin: '0px',
        threshold: 0,
        triggerOnce: true,
    };

    //Intersection Observer
    const { ref, inView, entry } = useInView(options);


    return(
        <>
            <div className="flex flex-col md:flex-row justify-between mt-[140px] md:mt-[200px] items-center gap-[20px] md:gap-[40px]">


                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInLeft opacity-100' : 'opacity-0'}`}>

                    <DirectorLarge
                        url={'/'}
                        image={'/images/robyn-clark.png'}
                        backgroundColor={'#83C5E9'}
                    />

                </div>



                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'}`}>

                    <h1 className="text-[#484848]">Robyn Clark</h1>

                    <p className="mt-5 md:mt-6">
                        Robyn Clark is a practice manager in South Gloucestershire. Born and bred in Bristol she is an HR practitioner by background with experience of working in secondary care, mental health trusts and community health services. Prior to that she was a medical secretary and personal assistant.
                    </p>

                    <p className="mt-5">
                        She has been a PM for over five years and is now also lead manager for her practice’s primary care network. Robyn is also a content writer for Practice Index, and has also developed HR for Primary Care e-learning.
                    </p>

                    <p className="mt-5">
                        Robyn has a real passion for employee engagement, coaching and mentoring.
                    </p>



                </div>



            </div>
        
        </>
    )
}