import Layout from "./layout";
import Hero from "@/app/components/index/hero";
import WhyIGPM from "@/app/components/index/whyIGPM/whyIGPM";
import HowWeCanHelp from "@/app/components/index/howWeCanHelp";
import NewsBanner from "@/app/components/index/newsBanner";
import Podcast from "@/app/components/index/podcast";

export default function Index(){

    return(
        <Layout>
            <main className="mb-[70px] md:mb-[114px]">
                <Hero />
                <WhyIGPM />
                <HowWeCanHelp />
                <Podcast/>
                <NewsBanner />

            </main>
        </Layout>
    )
}