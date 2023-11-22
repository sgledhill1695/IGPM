import Layout from "./layout";
import Hero from "@/app/components/index/hero";
import WhyIGPM from "@/app/components/index/whyIGPM/whyIGPM";
import HowWeCanHelp from "@/app/components/index/howWeCanHelp";
import Promise from "@/app/components/index/promise";
import NewsBanner from "@/app/components/index/newsBanner";
import Loader from "@/app/components/reuseable/loader";

export default function Index(){

    return(
        <>
        <Layout>
            
            <Hero/>
            <WhyIGPM/>
            <HowWeCanHelp/>
            <NewsBanner/>
            
        </Layout>
        </>
    )
}