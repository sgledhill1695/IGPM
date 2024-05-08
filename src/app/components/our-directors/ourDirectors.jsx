import Director from "./director"

export default function OurDirectors(){

    const directors = [

        { url: '/', image: '/images/director.png', name: 'Robyn Clark', backgroundColor: '#83C5E9' }

    ];


    return(
        <>
            <div className="mt-[140px] lg:mt-[200px]">

                <h1 className="text-[#484848]">Our Directors</h1>

                <p className="mt-4">The Institute of General Practice Management (IGPM) was formed by four working Practice Managers. We are recognised as the professional body that represents all managers working within general practice in the United Kingdom.</p>

                <div className="mt-[40px] grid gap-[20px] justify-center sm:grid-cols-4 flex-wrap">

                    <div className="col-span-4 sm:justify-self-end sm:col-span-2 2xl:col-span-1">

                        <Director 
                            url={'/our-directors/robyn-clark'}
                            image={'/images/robyn-clark.png'}
                            name={'Robyn Clark'}
                            backgroundColor={'#83C5E9'}
                        />

                    </div>


                    <div className="col-span-4  sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'/our-directors/nicola-davies'}
                            image={'/images/nicola-davies.png'}
                            name={'Nicola Davies'}
                            backgroundColor={'#83C5E9'}
                        />

                    </div>


                    <div className="col-span-4 sm:justify-self-end sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'/our-directors/kay-kean'}
                            image={'/images/kay-kean.png'}
                            name={'Kay Keane'}
                            backgroundColor={'#83C5E9'}
                        />

                    </div>


                    <div className="col-span-4 sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'/our-directors/jo-wadey'}
                            image={'/images/jo-wadey.png'}
                            name={'Jo Wadey'}
                            backgroundColor={'#83C5E9'}
                        />

                    </div>


                </div>

            </div>
        </>
    )
}