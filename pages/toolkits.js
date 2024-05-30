import PageHeader from "@/app/components/reuseable/pageHeader";
import Layout from "./layout";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function toolkits(){

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

                    <PageHeader
                        backgroundImage={'/images/toolkits-large.png'}
                        title={'Toolkits'}
                    />

                    <div className="max-w-[1440px] m-auto">
                        <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'} ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px] mt-[35px] sm:mt-[60px] lg:mt-[100px]`}>

                            <p>
                                We are proud to announce the launch of the Gender Identity Toolkit for General Practice!
                            </p>

                            <p className="mt-5">
                                The toolkit has been produced in collaboration with the Institute of General Practice Management, Indigo Gender Service, Practice Index, and Pride in Practice. It is designed to further the knowledge and support the confidence of general practice teams when providing inclusive and equitable care to trans and non-binary patients.
                            </p>

                            <p className="mt-5">
                                The Pride in Practice Patient Experience Survey 2021 revealed that trans and non-binary patients were significantly less likely than LGBTQ+ patients, as a whole, to feel that their GP was meeting their needs. The barriers that trans and non-binary patients face range from direct discrimination to supportive healthcare professionals lacking the knowledge or confidence required to provide appropriate care. Concurrently, the number of openly trans and non-binary patients seeking gender-affirming care from their GP and other healthcare professionals is increasing. The Gender Identity Toolkit is a practicable resource aimed at improving the availability of inclusive and equitable care for trans and non-binary patients at a crucial time.
                            </p>

                            <p className="mt-5">
                                The toolkit consolidates statutory requirements and best practice guidance into an easily implementable, procedural resource. The toolkit highlights a range of common themes in trans and non-binary healthcare, from determining a suitable treatment pathway to updating a patient’s name and/or gender marker.
                            </p>

                            <a href="https://dashboard.igpm.org.uk/wp-content/uploads/2023/11/Gender-identity-toolkit-for-general-practice-Template-2.0.pdf" target="_blank">

                                <button className="mt-5 bg-[#1C4F70] hover:bg-[#71C6EC] py-[10px] px-[20px] text-white rounded-[8px]">Gender identity Toolkit for general practice</button>

                            </a>


                        </div>
                    </div>


                </main>
    
            </Layout>

        
        </>
    )
}
