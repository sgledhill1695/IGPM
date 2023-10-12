import Layout from "./layout";
import GetInvolved from "@/app/components/get-involved/getInvolved";
import PageHeader from "@/app/components/reuseable/pageHeader";

export default function getInvolved(){

    return(
        <>
            <Layout>

                <PageHeader title={'Get Involved'} backgroundImage={'/images/get-involved.png'}/>

                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <GetInvolved/>

                    </div>
                </div>    


            </Layout>
        </>
    )
}