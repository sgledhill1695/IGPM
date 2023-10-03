import Layout from "./layout";
import Hero from "@/app/components/index/hero";
import WhyIGPM from "@/app/components/index/whyIGPM";

export default function Index(){

    return(
        <>
        <Layout>
            <Hero/>
            <WhyIGPM/>
        </Layout>
        </>
    )
}