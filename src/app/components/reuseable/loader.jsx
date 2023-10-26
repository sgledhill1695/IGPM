import { useContext } from "react";
import { LoaderContext } from "../context/loaderContext";

export default function Loader(){

    const loader = useContext(LoaderContext);



    return(
        <>

            {loader.loading && (
                <>
                    <div className="bg-[#00000000] w-[100%] h-[100vh] flex justify-center items-center  z-50 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="spin fill-[#71C5EC]" height="5em" viewBox="0 0 512 512"><path d="M463.9 376c7.6 4.4 17.5 1.8 21.4-6.1c17.1-34.3 26.7-73 26.7-113.9C512 120 405.9 8.8 272 .5c-8.8-.5-16 6.7-16 15.5v0c0 8.8 7.2 15.9 16 16.6C388.2 40.8 480 137.7 480 256c0 35.1-8.1 68.3-22.5 97.9c-3.9 8-1.3 17.7 6.4 22.2v0z" /></svg>
                    </div>
    
    
                </>
            )}

            
        </>
    )
}