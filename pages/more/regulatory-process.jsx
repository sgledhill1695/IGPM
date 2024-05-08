import Layout from "../layout";
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export default function regulatoryProcess() {

    const options = {
        rootMargin: '0px',
        threshold: 0,
        triggerOnce: true,
    };


    const { ref, inView, entry } = useInView(options);


    return (
        <>
            <Layout>

                <main className="mb-[70px] md:mb-[114px]">

                    <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'} max-w-[1440px] m-auto`}>
                        <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                            <div className="min-h-[50vh]">

                                <h1 className="mt-[140px] lg:mt-[200px] text-[#484848]">Regulatory Process</h1>

                                <p className="mt-5">
                                    All Accredited IGPM members aim to work to the highest professional standards in their role, and must comply with the IGPM Code of Conduct.
                                </p>


                                <a href="https://igpm-dashboard.zebrafishwebdesigns.co.uk/wp-content/uploads/2024/01/IGPM-Code-of-Conduct-for-Members-1-1.pdf" target="_blank">
                                    <button className="bg-[#1C4F70] hover:bg-[#83C5E9] hover:text-[black] mt-5 py-[12px] px-[30px] rounded-[13px] text-white">IGPM Code Of Conduct</button>
                                </a>

                                <p className="mt-5">
                                    Should a member fall short of the professional standards or their Code of Conduct, a referral can be made to the IGPM for investigation.
                                </p>

                                <p className="mt-5">
                                     Referrals can only be made by the members employing practice. Where the member is a Partner, referrals can be made by one or more of their fellow Partners. We do not accept referrals from patients or members of the public as complaints regarding individuals should be raised with the member’s practice and dealt with internally. Should the outcome of that process lead to the practice believing that a referral is necessary, they can then refer to the IGPM as the professional body.
                                </p>

                                <p className="mt-5">
                                    The IGPM recognises that individual cases must be decided on their own merit and facts, and therefore the referral form should be completed with as much detail as possible.
                                </p>

                                <p className="mt-5">
                                    The IGPM’s jurisdiction is limited to referrals which, if proved, allow it to impose penalties with regards to the member’s IGPM membership and professional status. This may be asking the member to complete further training, issuing warnings or in the most severe cases expulsion from the organisation and removal of the member’s professional status.
                                </p>

                                <p className="mt-5">
                                    It must be made clear that the IGPM does not have any jurisdiction to prevent a member from taking up another management role within general practice in the United Kingdom.
                                </p>

                                <p className="mt-5">
                                    Upon receipt of a referral, a nominated individual will allocated to investigate. This will normally be an IGPM Regional Representative not known to the member concerned. Upon completion of the investigation, and where there is a potential case to answer, a panel will be convened consisting of two members of the IGPM Executive Board. The member will be invited to the panel to present their case. The decision of the panel is final – there is no further right of appeal. Where the investigation determines there is no case to answer, the findings will be reviewed by one member of the IGPM Executive Board to confirm this is the case. If they agree, the referral will be closed with no further action. If they disagree, a panel will be convened as above.
                                </p>

                                <a href="https://igpm-dashboard.zebrafishwebdesigns.co.uk/wp-content/uploads/2024/01/IGPM-Regulatory-Process-1.pdf" target="_blank">
                                    <button className="bg-[#1C4F70] hover:bg-[#83C5E9] hover:text-[black] mt-5 py-[12px] px-[30px] rounded-[13px] text-white">IGPM Referral Form</button>
                                </a>




                                



                            </div>

                        </div>
                    </div>

                </main>

            </Layout>
        </>
    )
}