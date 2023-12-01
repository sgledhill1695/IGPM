import Layout from "../layout";
import IgpmNorthernIreland from "@/app/components/more/igpmNorthernIreland";

export default function igpmNorthernIreland(){

    return(
        <>
            <Layout>

                <main className="mb-[70px] md:mb-[114px]">

                    <div className="max-w-[1440px] m-auto">
                        <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">
                            <IgpmNorthernIreland />
                        </div>
                    </div>    


                </main>

            </Layout>
        </>
    )
}