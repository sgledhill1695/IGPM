import Layout from "../layout";
import MembershipInclusionCriteria from "@/app/components/more/membershipInclusionCriteria";

export default function membershipInclusionCriteria(){

    return(
        <>
            <Layout>

                    <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px] mb-[70px] md:mb-[114px]">
                            <MembershipInclusionCriteria />
                        </div>
                    </div>    


            </Layout>
        </>
    )
}