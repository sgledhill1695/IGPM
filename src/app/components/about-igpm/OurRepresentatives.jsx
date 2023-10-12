export default function OurRepresentatives(){

    const representatives = [

        { region: 'Bedfordshire, Buckinghamshire, Cambridgeshire & Norfolk', name: 'Jen Gough' },
        { region: 'Oxon, Hertfordshire, Essex & Suffolk', name: 'Amy Elliott MIGPM' },
        { region: 'Oxon, Hertfordshire, Essex & Suffolk', name: 'Amy Elliott MIGPM' },
        { region: 'National Lead (Midlands)', name: 'Ceri Gardener MIGPM' },
        { region: 'Herefordshire, Worcestershire & Shropshire', name: 'Ceri Chaplin MIGPM' },
        { region: 'London', name: 'Caroline O’Dwyer MIGPM' },
        { region: 'Midlands', name: 'Keleigh Atkin MIGPM' },
        { region: 'Lincolnshire', name: 'Adrian Down' },
        { region: 'Deputy Practice Manager Representative', name: 'Michelle Nutbrown MIGPM' },
        { region: 'National Lead – North', name: 'Mike Neville MIGPM' },
        { region: 'Northern Ireland', name: 'Katharine Rogan' },
        { region: 'Northern Ireland', name: 'Maria Nugent-Murphy MIGPM' },
        { region: 'National PCN Rep', name: 'Maddy Wood' },
        { region: 'National PCN Rep', name: 'Sarah Cole MIGPM' },
        { region: 'South East', name: 'Beverley Wallis MIGPM' },
        { region: 'North East/North Cumbria', name: 'Rebecca Hutchinson MIGPM' },
        { region: 'South East', name: 'Ed Kennedy' },
        { region: 'Hampshire', name: 'Mark Tyrrell MIGPM' },
        { region: 'South West', name: 'Kyla Dawe MIGPM' },
        { region: 'Dorset', name: 'Lisa Fall MIGPM' },
        { region: 'Devon & Cornwall ', name: 'Stephanie Tedstone MIGPM' },
        { region: 'National Lead (South)', name: 'Peter Maynard MIGPM' },
        { region: 'Wiltshire & Somerset', name: 'Nicky Billington MIGPM' },
        { region: 'National Lead (Wales)', name: 'Gareth Thomas MIGPM' },
        { region: 'Wales', name: 'Deborah Kalaji' },
        { region: 'Essex', name: 'Rebecca Pittuck MIGPM' },
        { region: 'North Lincolnshire', name: 'Richard Langthorp MIGPM' },
        { region: 'Yorkshire and Humber', name: 'Sally Oldbury MIGPM' },
        { region: 'Yorkshire and Humber', name: 'Sarah Rhodes MIGPM' },

    ]

    return(
        <>
            <div className="pt-[100px]">

                <h1 className="mb-5 text-[#484848]">Our Representatives</h1>

                <p className="mb-5">If you would like to get in contact with your local representative, please email the office at info@igpm.org.uk</p>

                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr className="divide-x divide-gray-200">
                            <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                Region
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Name
                            </th>

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {representatives.map((rep, index) => (
                            <tr key={index} className="divide-x divide-gray-200">
                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    {rep.region}
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm text-gray-500">{rep.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               
            </div>
        
        </>
    )
}