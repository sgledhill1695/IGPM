import Image from 'next/image'

export default function OurRepresentatives(){

    const regions = [
        {
            rep: 'National Lead Wales – Gareth Thomas MIGPM',
            table: [
                {
                    tableHeaders: {
                        leftHeader: '',
                        rightHeader: 'Rep',
                    },
                    tableRows: [
                        { area: 'National', rep: 'Deborah Kalaji MIGPM' },
                    ],
                }
            ]
        },
        {
            rep: 'National Lead Northern Ireland - Vacant',
            table: [
                {
                    tableHeaders: {
                        leftHeader: '',
                        rightHeader: 'Rep',
                    },
                    tableRows: [
                        { area: 'National', rep: 'Maria Nugent-Murphy MIGPM' },
                    ],
                }
            ]
        },
        {
            rep: 'National Lead South – Peter Maynard MIGPM',
            table: [
                {
                    tableHeaders: {
                        leftHeader: 'ICB',
                        rightHeader: 'Rep',
                    },
                    tableRows: [
                        { area: 'Cornwall and The Isles of Scilly', rep: '' },
                        { area: 'Devon', rep: 'Kyla Dawe MIGPM, Steph Tedstone MIGPM' },
                        { area: 'Somerset', rep: 'Nicky Billington MIGPM' },
                        { area: 'Dorset', rep: 'Lisa Fall MIGPM' },
                        { area: 'BNSSG', rep: 'Peter Maynard MIGPM' },
                        { area: 'BANES, Swindon and Wiltshire', rep: '' },
                        { area: 'Hampshire and Isle of Wight', rep: 'Mark Tyrell MIGPM' },
                        { area: 'Frimley', rep: '' },
                        { area: 'Sussex', rep: 'Beverley Wallis MIGPM' },
                        { area: 'Surrey Heartlands', rep: '' },
                        { area: 'London (North Central, NE, NW, SE and SW)', rep: 'Caroline O’Dwyer MIGPM' },
                        { area: 'Kent and Medway', rep: '' }
                    ],
                }
            ]
        },
        {
            rep: 'National Lead Midlands – Ceri Gardener MIGPM',
            table: [
                {
                    tableHeaders: {
                        leftHeader: 'ICB',
                        rightHeader: 'Rep',
                    },
                    tableRows: [
                        { area: 'Shropshire, Telford & Wrekin', rep: 'Jenny Davies' },
                        { area: 'Hereford & Worcestershire', rep: 'Ceri Chaplin MIGPM' },
                        { area: 'Birmingham & Solihull', rep: '' },
                        { area: 'Coventry & Warwickshire', rep: '' },
                        { area: 'Bucks, Oxon & Berkshire', rep: '' },
                        { area: 'Herts & West Essex', rep: 'Becky Pittuck  MIGPM' },
                        { area: 'Northamptonshire', rep: '' },
                        { area: 'Leicestershire & Rutland', rep: 'Keleigh Atkin MIPGM' },
                        { area: 'Beds, Luton & Milton Keynes', rep: '' },
                        { area: 'Cambridgeshire & Peterborough', rep: 'Melanie Gearing' },
                        { area: 'Suffolk & NE Essex', rep: '' },
                        { area: 'Norfolk & Waveney', rep: '' },
                    ],
                }
            ]
        },
        {
            rep: 'National Lead North – Mike Neville MIGPM',
            table: [
                {
                    tableHeaders: {
                        leftHeader: 'ICB',
                        middleHeader: 'Rep',
                        rightHeader: 'Rep'
                    },
                    tableRows: [
                        { area: 'Cheshire and Merseyside ICB', rep: '', repTwo: '' },
                        { area: 'Derby and Derbyshire ICB', rep: 'Carla Mathurin MIGPM', repTwo: 'Michelle Nutbrown' },
                        { area: 'Greater Manchester ICB', rep: 'ynsey Philbin MIGPM', repTwo: '' },
                        { area: 'Humber and North Yorkshire ICB', rep: 'Richard Langthorp MIGPM', repTwo: '' },
                        { area: 'Lancashire and South Cumbria ICB', rep: '', repTwo: '' },
                        { area: 'Lincolnshire ICB', rep: 'Adrian Down MIGPM', repTwo: '' },
                        { area: 'North East and North Cumbria ICB', rep: 'Becky Hutchinson MIGPM', repTwo: '' },
                        { area: 'Nottingham and Nottinghamshire ICB', rep: '', repTwo: '' },
                        { area: 'South Yorkshire ICB', rep: '', repTwo: '' },
                        { area: 'Staffordshire and Stoke on Trent ICB', rep: '', repTwo: '' },
                        { area: 'West Yorkshire ICB', rep: 'Sally Oldbury MIGPM', repTwo: ' Sarah Rhodes-Bickerdyke MIGPM' },









                    ],
                }
            ]
        },

    ]


    return(
        <>
            <div className="mt-[140px] lg:mt-[200px]">

                <h1 className="mb-5 text-[#484848]">Our Regional Representatives Team</h1>

                <p className="mb-5">Each team is led by a National Lead, if you would like to contact your local representative, please email the office and we will put you in touch.</p>

                <div className="flex flex-col gap-[100px] mt-[90px]">

                    {regions.map((region, index) => (

                        <div key={index}>
                            <b className='text-[#484848]'>{region.rep}</b>
                            <table className="md:min-w-[50%] divide-y divide-gray-300 mt-6">
                                <thead>
                                    <tr className="divide-x divide-gray-200">

                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            {region.table[0].tableHeaders.leftHeader}
                                        </th>

                                        {region.table[0].tableHeaders.middleHeader && (
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                {region.table[0].tableHeaders.middleHeader}
                                            </th>
                                        )}

                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            {region.table[0].tableHeaders.rightHeader}
                                        </th>

                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 bg-white">

                                    {region.table[0].tableRows.map((row, index) => (

                                        <tr key={index} className="divide-x divide-gray-200">

                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                                {row.area}
                                            </td>

                                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                                {row.rep}
                                            </td>

                                            {row.repTwo && (
                                                <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    {row.repTwo}
                                                </td>
                                            )}

                                        </tr>

                                    ))}


                                </tbody>
                            </table>
                        </div>
                    ))}

                </div>

                <Image
                    src="/images/reps-map.png"
                    className='mt-[50px] mx-auto sm:mx-0'
                    width={500}
                    height={500}
                    alt="image of the map"
                />

            </div>
        
        </>
    )
}