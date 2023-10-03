import Link from "next/link";

export default function Logo(){

    return(
        <>
            <Link href="/">
                <img src="/images/igpm-logo.png" className="w-[120px] md:w-[163px]" alt="igpm logo"></img>
            </Link>
        </>
    )

}