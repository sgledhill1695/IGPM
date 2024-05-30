import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function SearchAccreditees({handleFormSubmit, setKeyword, handleSubmit, register, errors}){

    const { ref, inView, entry } = useInView({
        rootMargin: '0px',
        threshold: 1,
        triggerOnce: true,
    });

    
    const handleKeyword = (e) => {

        setKeyword(e.target.value);
        
    };

    return(

        <div className={`relative bg-[url('/images/acreditee-search-header.png')] bg-top bg-no-repeat bg-cover h-[80vh]`}>
            <div className="bg-[#00000070] absolute top-[0px] left-[0px] h-[100%] w-[100%] z-10">
            </div>

            <div className='max-w-[1440px] m-auto z-20 relative'>

                <div className={`h-[80vh] flex flex-col items-center sm:items-start justify-center`}>

                    <div ref={ref} className={`${inView ? 'animate__animated animate__fadeIn opacity-100' : 'opacity-0'} flex flex-col text-center sm:text-start  ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px] sm:max-w-[550px]`}>

                        <h1 className="text-white">Find accredited managers</h1>
                        <p className=" text-white text-[16px] mt-2 sm:max-w-[500px]">Search the register of MIGPM Accredited Managers. This means the member has met the criteria set out by the framework.</p>

                        <form onSubmit={handleSubmit(handleFormSubmit)}>
                            <div className="bg-[#00000031] py-[20px] px-[20px] mt-4 inline-block">

                                <div className="flex items-center gap-1">
                                    
                                    <input 
                                        {...register("search", { required: true })}
                                        type="text" 
                                        className={`${errors.search ? ' outline outline-2 outline-red-600 placeholder:text-red-600' : 'outline-none'} h-[30px] w-[250px] text-[16px] ps-[10px] rounded-[5px]`} 
                                        placeholder="Name or county"
                                    />

                                    <button type="submit" className="bg-[#83C5E9] hover:bg-[#75afcf] px-[11px] py-[7px] rounded-[5px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                    </button>

                                </div>

                            </div>
                        </form>


                    </div>

                </div>

            </div>

        </div>       
    )
};