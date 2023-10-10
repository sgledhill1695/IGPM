import Layout from '../layout';
import OurDirectors from "@/app/components/our-directors/ourDirectors";

export default function ourDirectorsIndex(){
    
    return(
        <>
            <Layout>

                <div className="max-w-[1440px] m-auto">

                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <OurDirectors/>

                    </div>

                </div>        
                
            </Layout>
        </>
    )
}