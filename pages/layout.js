import '../src/app/globals.css';
import Navbar from "@/app/components/layout/navbar/navbar";


export default function Layout({children}){

    return(
        <>
        <Navbar/>
            {children}
        </>
    )
}