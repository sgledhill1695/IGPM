import Logo from "./logo";
import Link from "next/link";
import Hamburger from "./hamburger";
import { useState } from "react";

export default function Navbar(){

    const navigation = [
        { link: 'Accreditation', href: '/accreditation', active: false },
        { link: 'Search', href: '/accreditees', active: false },
        { link: 'Our Directors', href: '/our-directors', active: false },
        { link: 'Get Involved', href: '/get-involved', active: false },
        { link: 'News', href: '/news', active: false },

    ];

    const [mobileNavOpen, setMobileNavOpen] = useState(false);


    const handleMobileNav = () => {

        mobileNavOpen ? setMobileNavOpen(false) : setMobileNavOpen(true);

    };

    return(
        <>

            <div className="mb-[92px] md:mb-[113px]">

                <div className="fixed top-0 w-full z-[50] bg-[white] shadow-lg">
        
                    <div className="max-w-[1440px] m-auto ">
        
                        <div className="z-[50] bg-[white]">
            
                            <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px] pt-[30px] pb-[30px]  md:pt-[34px] md:pb-[34px] flex justify-between">
                                
                                
                                <Logo/>



  
                                {/* Large Nav */}
                                <div className={"flex items-center gap-[37px]"}>
                    
                                    <div className="hidden md:flex gap-[40px]">
                    
                                        {navigation.map((nav, index) => (
                                        
                                            <Link key={index} href={nav.href} className="nav-link hover:text-[#71C6EC]">{nav.link}</Link>
                                        
                                        ))}
                    
                                    </div>
                                        
                                    <Hamburger
                                        handleMobileNav={handleMobileNav}
                                    />
                                        
                                    <Link href="/membership"><button className="bg-[#1C4F70] px-[29px] py-[9px] text-white rounded-[13px] text-[15px] hover:bg-[#83C5E9] hidden lg:flex">Join us</button></Link>
                                        
                                </div>
                                        
                                        
                            </div>
                                        
                        </div>
                                        
                    </div>

                    {/* Small Nav */}
                    <div className={`${mobileNavOpen ? 'flex' : 'hidden'} md:hidden pb-5 border-b-[5px] border-b-[#83C5E9]`}>

                        <div className="flex flex-col ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                            {navigation.map(nav => (

                                <Link
                                    href={nav.href}
                                    className="mt-5 nav-link hover:text-[#71C6EC]"
                                >
                                    {nav.link}
                                </Link>

                            ))}

                        </div>

                    </div>
                                        
                </div>    

            </div>




        </>
    )
}