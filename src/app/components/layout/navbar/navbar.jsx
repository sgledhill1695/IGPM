import Logo from "./logo";
import Link from "next/link";
import Hamburger from "./hamburger";

export default function Navbar(){

    const navigation = [
        {link: 'Home', href:'/', active: false},
        {link: 'Services', href: '/', active: false},
        {link: 'News', href: '/', active: false },
        {link: 'Contact us', href: '/', active: false }
    ];

    return(
        <>

            <div className="mb-[92px] md:mb-[113px]">

                <div className="fixed top-0 w-full z-[50] bg-[white] shadow-lg">
        
                    <div className="max-w-[1440px] m-auto ">
        
                        <div className="z-[50] bg-[white]">
            
                            <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px] pt-[30px] pb-[30px]  md:pt-[34px] md:pb-[34px] flex justify-between">
                                
                                
                                <Logo/>
                    
                                <div className="flex items-center gap-[37px]">
                    
                                    <div className="hidden md:flex gap-[40px]">
                    
                                        {navigation.map((nav, index) => (
                                        
                                            <Link key={index} href={nav.href} className="nav-link hover:text-[#71C6EC]">{nav.link}</Link>
                                        
                                        ))}
                    
                                    </div>
                                        
                                    <Hamburger/>
                                        
                                    <button className="bg-[#1C4F70] px-[29px] py-[9px] text-white rounded-[13px] text-[15px] hover:bg-[#83C5E9] hidden lg:flex">Join us</button>
                                        
                                </div>
                                        
                                        
                            </div>
                                        
                        </div>
                                        
                    </div>
                                        
                </div>    

        </div>



        </>
    )
}