import '../src/app/globals.css';
import Navbar from "@/app/components/layout/navbar/navbar";
import Footer from '@/app/components/layout/footer/footer';


export default function Layout({children}){

    return(
        <>
            <Navbar/>
            {children}
            <Footer/>

        </>
    )
}