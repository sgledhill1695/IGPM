import Link from "next/link";

export default function IgpmNorthernIreland(){

    return(
        <>
        <div className="h-[50vh]">
            
            <h1 className="mt-[140px] lg:mt-[200px] text-[#484848]">IGPM Northern Ireland</h1>

            <p className="mt-5"><b>IGPM Representatives</b> - Maria Nugent-Murphy MIGPM and Katharine Rogan represent the IGPM in Northern Ireland. </p>

            <h3 className="text-[1.56rem] text-[#484848] mt-5">IGPM Accreditation Northern Ireland</h3>

            <p className="mt-5">If you would like to apply for accreditation, please contact us, and we can arrange to raise an invoice. You can read more about accreditation <Link href="/accreditation" className="text-blue-700 hover:text-blue-950">here</Link>.</p>

            <button className="bg-[#1C4F70] hover:bg-[#83C5E9] hover:text-[black] mt-5 py-[12px] px-[30px] rounded-[13px] text-white">IGPM Accreditation Framework</button>

        </div>


        
        </>
    )
}