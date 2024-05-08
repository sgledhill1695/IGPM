import DirectorLarge from "./directorLarge";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function nicolaDavies(){

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
                        image={'/images/nicola-davies.png'}
                        backgroundColor={'#83C5E9'}
                    />

                </div>




                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'}`}>

                    <h1 className="text-[#484848]">Nicola Davies</h1>

                    <p className="mt-5 md:mt-6">
                        Nicola Davies has worked in Primary Care for 36 years, starting her career as a medical secretary in an inner city practice in Manchester.                    
                    </p>

                    <p className="mt-5">
                        For the last 20 years, she has worked as a Practice Manager. She has an MA in Medical Law and Ethics and is very involved in Education and Training with both clinical and non-clinical staff. She is now living the dream working in very rural Cornwall in a three site dispensing practice.
                    </p>

                </div>



            </div>
        </>
    )
}