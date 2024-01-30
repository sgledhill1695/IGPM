import styles from './index.module.css';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export default function Hero(){

    const { ref, inView, entry } = useInView({
        rootMargin: '0px',
        threshold: 1,
        triggerOnce: true,
    });


    return(
        <>
            <div className={`${styles.heroContainer} relative`}>

                <div className='max-w-[1440px] m-auto'>

                    <div className={`${styles.heroContainerText} h-[400px] md:h-[572px] lg:h-[560px] flex flex-col justify-center`}>

                        <div ref={ref} className={`${inView ? 'animate__animated animate__fadeIn opacity-100' : 'opacity-0'} flex flex-col  ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]`}>

                            <h1 className='text-white z-10 max-w-[176px] sm:max-w-[100%] hero'>Welcome to the <span className='text-[#83C5E9]'>IGPM</span></h1>
                            <p className='text-white max-w-[400px] sm:max-w-[620px] mt-[6px] text-[1rem] md:text-[1rem] lg:text-[1.1] lg:'>The representative body for all managers working in primary care in the UK.</p>

                            <div className='flex flex-col sm:flex-row sm:gap-[20px]'>

                                <Link href="/membership" className='max-w-[160px]'>
                                    <button className='bg-[#744dbe] hover:bg-[#61419d] max-w-[160px]  text-white px-[50px] py-[9px] rounded-[13px] mt-[23px]'>Join Us</button>
                                </Link>

                                <a href="https://mailchi.mp/a499843ce039/the-igpm-institute-of-general-practice-management-newsletter" target="_blank" className='max-w-[160px] flex justify-center'>
                                    <button className='bg-[#83C5E9] hover:bg-[#9ecee8]   text-black px-[50px] py-[9px] rounded-[13px] mt-[23px] ms-[28px] sm:ms-[0px]'>Newsletter</button>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>       
        </>
    )
}