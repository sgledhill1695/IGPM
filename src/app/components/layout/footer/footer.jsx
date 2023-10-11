import Link from "next/link";

export default function Footer(){

    const more =[

        {title: 'Our directors', href: '/our-directors'},
        {title: 'Accreditation', href: '/accreditation' },
        {title: 'Link Number 3', href: '/' },
        {title: 'Link Number 4', href: '/' },
        {title: 'Link Number 5', href: '/' },

    ];


    const about = [

        { title: 'Link Number 1', href: '/' },
        { title: 'Link Number 2', href: '/' },
        { title: 'Link Number 3', href: '/' },
        { title: 'Link Number 4', href: '/' },
        { title: 'Link Number 5', href: '/' },

    ];



    return(
        <>        
            <div className="bg-[#E2E2E2]  min-h-[265px] mt-[70px] md:mt-[114px]">

                <div className="max-w-[1440px] m-auto">

                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <div className="grid grid-cols-3 gap-8 sm:grid-cols-3 pt-[42px]">

                            <div className="col-span-3 sm:col-span-1 md:col-span-1">

                                <h4 className="onset-bold text-[20px] text-[#484848]">More</h4>
                                
                                <ul className="mt-4 flex flex-col gap-3 text-[0.93rem]">
                                    {more.map((m, index) => (
                                        <li key={index} className="underline text-[#484848] hover:text-[#292929]">
                                            <Link href={m.href} >
                                                {m.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="col-span-3 sm:col-span-1 md:col-span-1">

                                <h4 className="onset-bold text-[20px] text-[#484848]">About IGPM</h4>

                                <ul className="mt-4 flex flex-col gap-3 text-[0.93rem]">
                                    {about.map((a, index) => (
                                        <li key={index} className="underline text-[#484848] hover:text-[#292929]">
                                            <Link href={a.href}>
                                                {a.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="col-span-3 md:col-span-1">

                                <h4 className="onset-bold text-[20px] text-[#484848]">Follow us</h4>

                                <div className="flex mt-4 gap-1">

                                    <a href="https://www.facebook.com/TheIGPM"><svg xmlns="http://www.w3.org/2000/svg" className="fill-[#395694]" height="25px" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg></a>

                                    <a href="https://twitter.com/TheIGPM"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a>

                                </div>

                            </div>


                        </div>

                        


                    </div>

                </div>    




            </div>
        
        </>
    )
}