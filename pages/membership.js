import Layout from "./layout";
import Membership from "@/app/components/membership/membership";
import PageHeader from "@/app/components/reuseable/pageHeader";

export default function membership(){

    return(
        <>
        <Layout>
            <PageHeader backgroundImage={'/images/membership-header.png'} title={'Membership'}/>
                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <Membership/>

                    </div>
                </div>    



        </Layout>
        
        </>
    )
}