import Layout from "./layout";
import PageHeader from "@/app/components/reuseable/pageHeader";
import Webinar from "@/app/components/webinars/webinar";

export default function webinars(){

    const webinars = 
    [
        { date: '29-11-2022', title: 'Looking after your general practice managers', videoLink: 'https://www.youtube.com/embed/Drri7nRh1l8?si=7iWk392I0CnWy4YF' },
        { date: '23-11-2022', title: 'The RCGP active practice charter', videoLink: 'https://www.youtube.com/embed/78p1T-bPKJE?si=XRHBSfhRT9_tkvlB'},
        { date: '28-09-2022', title: 'How to make your practice greender', videoLink: 'https://www.youtube.com/embed/IEN54OP7_AA?si=PylV0UfQHgMrIRPJ' },
        { date: '28-06-2022', title: 'Shaping the future of IGPM Wales', videoLink: 'https://www.youtube.com/embed/fvJj1Hg7VQg?si=1bPFcuQ7G1BC6KLo' },
        { date: '28-06-2022', title: 'Is your practice veteran friendly?', videoLink: 'https://www.youtube.com/embed/rBW-IOK5s5A?si=agPFR1OZGyIKnG8t' },
        { date: '21-06-2022', title: 'IGPM Accreditation Launch', videoLink: 'https://www.youtube.com/embed/xWpoxdEzaBw?si=2BkIctBsSelFkE2R' },
        { date: '26-04-2022', title: 'Gender Identity Toolkit Launch', videoLink: 'https://www.youtube.com/embed/Y5jeocsMWOw?si=IP_dztoDRjFrewje' },
        { date: '24-11-2021', title: 'IGPM winter recording', videoLink: 'https://www.youtube.com/embed/fIlQPqExLY8?si=T5HAnubhtN1jLZ5P' },
        { date: '31-09-2021', title: 'Summer series session four', videoLink: 'https://www.youtube.com/embed/wDfdULmg9ps?si=xi3IvbX9act84fKd' },
        { date: '24-07-2021', title: 'Summer series session three', videoLink: 'https://www.youtube.com/embed/esIiXRBTNp8?si=j7MJRM_n8VIFdh2Q' },
        { date: '17-07-2021', title: 'Summer series session two', videoLink: 'https://www.youtube.com/embed/su4hWx8FqKg?si=1n5bCDRUN-bAlCQG' },
        { date: '10-07-2021', title: 'Summer series session one', videoLink: 'https://www.youtube.com/embed/hlNujxpNfOc?si=stLSUVCx6f1JtHYD' },
        { date: '20-05-2021', title: 'The one before we went viral!', videoLink: 'https://www.youtube.com/embed/XEcNj3RPj0Y?si=50HovHL67CjQ6TX0' },
        { date: '03-04-2021', title: 'IGPM recognition, representation and membership', videoLink: 'https://www.youtube.com/embed/q8LkfLhwiCY?si=zIGfk9RI_sNI8Zyx' },
    ]




    return(
        <>
            <Layout>

                <PageHeader
                    backgroundImage={'/images/webinars-large.png'}
                    title={'Webinars'}
                />

                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[47px] mb-[73px]">

                            {webinars.map(webinar => (
                                <>
                                    <div className="col-span-1">

                                        <Webinar
                                            date={webinar.date}
                                            title={webinar.title}
                                            videoLink={webinar.videoLink}
                                        />

                                    </div>
                                </>
                            ))}


                        </div>

                    </div>
                </div>    






            </Layout>
        </>
    )
}