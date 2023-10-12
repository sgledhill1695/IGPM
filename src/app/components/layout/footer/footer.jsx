import Link from "next/link";

export default function Footer(){

    const more =[

        {title: 'Our directors', href: '/our-directors'},
        {title: 'Accreditation', href: '/accreditation' },
        {title: 'Membership', href: '/membership' },
        {title: 'Get involved', href: '/get-involved' },
        {title: 'Membership inclusion criteria', href: '/more/membership-inclusion-criteria' },
        { title: 'IGPM Northern Ireland', href: '/more/igpm-northern-ireland' },

    ];


    const about = [

        { title: 'Member case studies', href: '/about-igpm/member-case-studies' },
        { title: 'Our Representatives', href: '/about-igpm/our-representatives' },
        { title: 'Link Number 3', href: '/' },
        { title: 'Link Number 4', href: '/' },
        { title: 'Link Number 5', href: '/' },

    ];



    return(
        <>        
            <div className="bg-[#1C4F70]  min-h-[265px] mt-[70px] md:mt-[114px]">

                <div className="max-w-[1440px] m-auto">

                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 pt-[42px]">

                            <div className="col-span-4 sm:col-span-1 md:col-span-1">

                                <h4 className="onset-bold text-[20px] text-[white]">More</h4>
                                
                                <ul className="mt-4 flex flex-col gap-3 text-[0.93rem]">
                                    {more.map((m, index) => (
                                        <li key={index} className="underline text-[#CBCBCB] hover:text-[#ffffff]">
                                            <Link href={m.href} >
                                                {m.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="col-span-4 sm:col-span-1 md:col-span-1">

                                <h4 className="onset-bold text-[20px] text-[white]">About IGPM</h4>

                                <ul className="mt-4 flex flex-col gap-3 text-[0.93rem]">
                                    {about.map((a, index) => (
                                        <li key={index} className="underline text-[#CBCBCB] hover:text-[#ffffff]">
                                            <Link href={a.href}>
                                                {a.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="col-span-4 md:col-span-1">

                                <h4 className="onset-bold text-[20px] text-[white]">Follow us</h4>

                                <div className="flex mt-4 gap-1">

                                    <a href="https://www.facebook.com/TheIGPM"><svg xmlns="http://www.w3.org/2000/svg" className="fill-[#395694]" height="25px" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg></a>

                                    <a href="https://twitter.com/TheIGPM"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a>

                                </div>

                            </div>

                            <div className="col-span-4 md:col-span-1">

                                <h4 className="onset-bold text-[20px] text-[white]">Contact us</h4>

                                <div className="flex gap-2 items-center text-[#484848]">

                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                    <div>info@igpm.org</div>

                                </div>


                            </div>


                        </div>

                        


                    </div>

                </div>    




            </div>
        
        </>
    )
}