import PayPalButton from "./paypalButton";

export default function Membership(){

    return(
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2  mt-[35px] sm:mt-[60px] lg:mt-[100px] gap-[19px] items-center">

                <div className="col-span-1">

                    <p>The cost of Associate membership is £50 plus VAT a year (£60).</p>

                    <p className="mt-5">
                        You do not need a PayPal account to pay online. Alternatively please do email the office for an invoice to pay via BACS should you prefer.
                    </p>

                    <p className="mt-5">
                        The ‘Inclusion Criteria’ can be found here.
                    </p>

                    <p className="mt-5">
                        To become an Associate member of the Institute of General Practice Management (IGPM) for £50 plus VAT please click on one of the buttons below.
                    </p>

                    <p className="mt-5">
                        Once you have paid, please do email info@igpm.org.uk from your @NHS email address so we can verify your membership. Please include your surgery name and postcode in your email. Thank you.
                    </p>

                </div>




                <div className="flex flex-col items-center">

                    <img src="/images/membership-group.png" alt="image of a group of people smiling" className="sm:max-w-[500px]"></img>
{/*                     <a target="_blank" className="w-[100%] sm:max-w-[500px] lg:w-[100%]" href="https://www.paypal.com/webapps/hermes?token=32R33450PE0069346&useraction=commit&wpsFlowRedirectToXorouterSkipHermesStartTime=1697029841117&mfid=1697029840826_f7309533ee478"><button className="bg-[#1B4E70] hover:bg-[#72C6ED] hover:text-[black] w-[100%] sm:max-w-[500px] lg:w-[100%] py-[8px] rounded-[8px] mt-3 text-white">Buy Now</button></a>
 */}
                    <div id="paypal-button-container-P-9AC4713973647582WMA7HEIQ" className="mt-5"></div>
                    <PayPalButton/>

                </div>

            </div>
        </>
    )
}