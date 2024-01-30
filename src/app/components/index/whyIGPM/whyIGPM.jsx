import Accordion from "./accordion";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function WhyIGPM(){

    const options = {
        rootMargin: '-150px',
        threshold: 0,
        triggerOnce: true,
    };

    //Intersection Observer
    const { ref, inView, entry } = useInView(options);



    return(
        <>
            <div className="max-w-[1440px] m-auto mb-[50px]">

                <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px] mt-[32px] md:mt-[88px] lg:mt-[105px]">

                    <h2 ref={ref} className={`${inView ? 'animate__animated animate__fadeInUp opacity-100' : 'opacity-0'} text-[#484848] text-center sm:text-start`}>Why IGPM?</h2>

                    <p className={`${inView ? 'animate__animated animate__fadeInUp opacity-100' : 'opacity-0'} mt-[20px] lg:mt-[14px] text-center sm:text-start`}>
                        The Igpm Represent every Manager in General Practice throughout the UK, we are here to ensure your voice is heard, and our professional is recognised.
                    </p>

                    <div ref={ref} className={`flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mt-[56px] lg:mt-[56px] xl:mt-[68px]`}>

                        <div className={`${inView ? 'animate__animated animate__fadeInLeft opacity-100' : 'opacity-0'} flex flex-col lg:mt-[38px] gap-[7px] w-[100%] lg:pe-[30px] xl:pe-[50px] 2xl:pe-[95px]`}>

                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />

                            <Accordion
                                key={1}
                                icon={<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />}
                                title={"Representation"}
                                content={
                                    <div className="px-[20px] pt-[10px] pb-[10px]">

                                        <ul className="list-disc flex flex-col gap-[6px]">
                                            <li>Getting our voice heard where it matters.</li>
                                            <li>Influencing and engaging with decision-makers on issues that affect managers and their workplaces</li>
                                            <li>Championing the invaluable role of practice managers</li>
                                        </ul>

                                    </div>
                                }
                            />


                            <Accordion
                                key={2}
                                icon={<path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />}
                                title={"Recognition"}
                                content={
                                    <div className="px-[20px] pt-[10px] pb-[10px]">

                                        <ul className="list-disc flex flex-col gap-[6px]">
                                            <li>An accreditation process to gain entry to the professional register.</li>
                                            <li>Managers must have had a minimum of two years’ relevant experience to apply.</li>
                                            <li>The assessment framework comprises 10 domains that cover the key areas of practice management.</li>
                                            <li>Each candidate must demonstrate proficiency across the 10 domains assessed by an expert panel and externally verified.</li>
                                            <li>IGPM demonstrate that the manager works to a high standard across the wide range of skills required by the role.</li>
                                            <li>The IGPM offer opportunities for support sessions for managers looking to achieve MIGPM (group funding only).</li>
                                            <li>The framework also acts as a career development framework for aspiring managers, and a tool to aid recruitment.</li>
                                        </ul>

                                    </div>
                                }
                            />

                            <Accordion
                                key={3}
                                icon={<path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z" />}
                                title={"Regulation"}
                                content={
                                    <div className="px-[20px] pt-[10px] pb-[10px]">

                                        <ul className="list-disc flex flex-col gap-[6px]">
                                            <li>The IGPM hold the only register of recognised professional managers working in General Practice in the UK.</li>
                                            <li>As MIGPM, the manager is expected to uphold the high standards of the role and the code of conduct of the institute. Should standards fall below this, and a referral made to the board, a thorough investigation would take place.</li>
                                            <li>Reassurance for every employer.</li>
                                        </ul>

                                    </div>
                                }
                            />

                            <Accordion
                                key={4}
                                icon={<path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />}
                                title={"Support"}
                                content={
                                    <div className="px-[20px] pt-[10px] pb-[10px]">

                                        <ul className="list-disc flex flex-col gap-[6px]">
                                            <li>A network of regional representatives providing Managers with a local contact throughout England, Scotland, Wales and Northern Ireland.</li>
                                            <li>Expanding benefits for every member including webinars, dedicated Facebook group, email signature badge, and much more to come.</li>
                                            <li>The IGPM offer every member peer to peer support.</li>
                                        </ul>

                                    </div>
                                }
                            />


                        </div>

                        <img src='/images/why-igpm-image.png' className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'} w-[491px] max-h-[327px] rounded-[60px]  mt-[56px] lg:mt-0`}></img>

                    </div>


                </div>


            </div>
        
        </>
    )
}