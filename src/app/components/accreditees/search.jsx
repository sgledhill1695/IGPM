import { useEffect, useState} from "react";
import { useForm } from "react-hook-form";

export default function Search({handleFormSubmit, fetchedData, keyword, setError}){

    //Form validation
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [filteredData, setFilteredData] = useState([]);
    const [newKeyword, setNewKeyword] = useState(keyword);

    useEffect(() => {

        const filtered = fetchedData.filter(data => {

            if (data.name.toLowerCase().includes(newKeyword.toLowerCase()) || data.county.toLowerCase().includes(newKeyword.toLowerCase()) ){
               return data;
            };
        });

        setFilteredData(filtered);

    }, [newKeyword]);






    const handleNewSearch = (data) => {

        console.log(data.newSearch);

        setNewKeyword(data.newSearch);

    };






    const handleFilter = () => {

    };


    return(
        <main className="mb-[70px] md:mb-[114px]">

            <div className="max-w-[1440px] m-auto min-h-[100vh] mt-[140px] lg:mt-[200px]">
                <div  className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                    <h1>Search results for "{newKeyword}"</h1>

                    <form onSubmit={handleSubmit(handleNewSearch)} className="flex items-center gap-1 mt-[15px]">
                        <input
                            {...register("newSearch", {required: true})}
                            type="text"
                            className={`${errors.newSearch ? 'border-red-600 placeholder:text-red-600' : 'border-[#9f9f9f]'} h-[30px] w-[250px] text-[16px] outline-none border-[1px]  ps-[10px] rounded-[5px]`} 
                            placeholder="Name or location" 
                        />
                        <button type="submit"  className="bg-[#83C5E9] px-[11px] py-[7px] rounded-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        </button>
                    </form>

                    <p className="mt-[25px] mb-[8px] text-[#6C6C6C]">{filteredData.length} Result(s)</p>

                    <ul className="flex flex-col gap-[10px] sm:gap-[20px]">
                        {filteredData.map(data => (
                            <li key={data.id} className="border-l-[10px] flex flex-col gap-[4px] border-l-[#72C6ED] border-t-[1px] border-t-[#D9D9D9] border-r-[1px] border-r-[#D9D9D9] border-b-[1px] border-b-[#D9D9D9] py-[20px] px-[28px] w-full max-w-[705px] shadow-md ">
                                <p className="text-[#1C4F70] text-[1.5rem] onset-bold">{data.name}</p>
                                <p className="text-[#575757]">{data.county}</p>
                                <p className="text-[#575757]">Registration number: <b>{data.date}</b></p>
                                <p className="text-[#575757]">Accreditation achieved: <b>{data.registration}</b></p>

                                {data.active ? (
                                    <div className="bg-[#89d67045] flex gap-[6px] items-center justify-center w-[85px] rounded-[8px] mt-[13px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#4A8B74]" width="8" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                                        <span className="text-[0.9rem] py-[5px] text-[#4A8B74]">Active</span>
                                    </div>
                                ) : (
                                    <>
                                        <div className="bg-[#d670704d] flex gap-[6px] items-center justify-center w-[95px] rounded-[8px] mt-[13px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#8B4A4A]" width="8" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                                            <span className="text-[0.9rem] py-[5px] text-[#8B4A4A]">Inactive</span>
                                        </div>

                                    </>
                                )}
                            </li>
                        ))}
                    </ul>


                </div>
            </div>

        </main>      
    )
}