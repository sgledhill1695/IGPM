import PageHeader from "@/app/components/reuseable/pageHeader";
import Layout from "./layout";
import Accreditation from "@/app/components/reuseable/accreditation";

export default function accreditation(){

    return(
        <>
            <Layout>

                <PageHeader
                    title={'Accreditation'}
                    backgroundImage={'images/accreditation-two.png'}
                />

                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <Accreditation/>

                    </div>
                </div>        

            </Layout>    
        
        </>
    )
}