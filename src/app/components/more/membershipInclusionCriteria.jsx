import ArrowAccordion from "../reuseable/arrowAccordion";

export default function MembershipInclusionCriteria(){

    return(
        <>
            <h1 className="mt-[140px] lg:mt-[200px] text-[#484848]">Membership Inclusion Criteria</h1>

            <p className="mt-5">You must be <b>currently</b> working in a management capacity within General Practice. The following roles are accepted:</p>

            <ul className="list-disc ps-10 flex flex-col gap-1 mt-3">
                <li>Practice Manager</li>
                <li>Managing Partner</li>
                <li>Business Manager</li>
                <li>Operations Manager</li>
                <li>Finance Manager</li>
                <li>PCN (Primary Care Network) Manager</li>
                <li>HR Manager</li>
                <li>Assistant Practice Manager</li>
                <li>Reception Manager</li>
                <li>Clinical Services Manager (if the applicant is non-clinical themselves)</li>
                <li>Executive Manager</li>
            </ul>

            <p className="mt-5">For prospective members of other titles, please email us to confirm your role and whether it is covered under our membership.</p>

            <p className="mt-5">On receipt of your membership, our team will verify your role. Should we not be able to verify you, or you do not meet the inclusion criteria, your membership fee will be refunded.</p>

            <p className="mt-5">Once verified, until our accreditation process is finalised you are permitted to use the term ” Associate of IGPM’ in your title/communications. We ask members to refrain from using ‘AIGPM’ as this is a title achieved once members have been accredited to Member.</p>

            <p className="mt-5">We are considering a different form of membership for retired members or those in affiliate roles. More details on this will be communicated as soon as possible.</p>

            <div className="mt-10 md:w-1/2">

                <ArrowAccordion
                    title={'Code of conduct'}
                    content={
                        <>
                            <p>All members are expected to abide by a code of conduct.</p>
                            <div className="bg-[#1C4F70] px-[29px] py-[9px] text-white rounded-[13px] text-[15px] hover:bg-[#83C5E9] hover:cursor-pointer mt-5 flex justify-center">Download the members code of conduct</div>
                        </>
                    }

                />

            </div>

            
        </>
    )
}