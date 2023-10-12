import OurRepresentatives from "@/app/components/about-igpm/OurRepresentatives";
import Layout from "../layout";

export default function ourRepresentatives(){

    return(
        <>
            <Layout>

                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <OurRepresentatives/>
                        
                    </div>
                </div>





            </Layout>
    
        </>
    )
}