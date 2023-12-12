import Layout from "../layout";
import JoWadey from "@/app/components/our-directors/joWadey";

export default function joWadey(){

    return(
        <>
            <Layout>

                <main className="mb-[70px] md:mb-[114px]">

                    <div className="max-w-[1440px] m-auto">

                        <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                            <JoWadey />

                        </div>

                    </div>


                </main>

            </Layout>
        </>
    )
}