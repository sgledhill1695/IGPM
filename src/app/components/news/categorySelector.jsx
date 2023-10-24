import { useState } from "react"
import { compress } from "../../../../next.config";

export default function catergorySelector({retrievedCategory, handleCategoryFilter}){

    const [category, setCategory] = useState({

        id: retrievedCategory.id,
        name: retrievedCategory.name,
        active: false,
    });





    const handleSelect = () => {

        if(!category.active){

            setCategory((prevCategory) => ({
                ...prevCategory,
                active: true
            }));

            handleCategoryFilter(category.id);
            
        } else {

            setCategory((prevCategory) => ({
                ...prevCategory,
                active: false
            }));

            handleCategoryFilter(category.id);

        }

    }



   
   
    return(
        <>
            <button 
                key={category.id}
                onClick={() => handleSelect()} 
                className={`${category.active ? 'bg-[#347CA7] text-[white]' : 'bg-[#E7E7E7] text-[#404040]' } py-4 px-8 rounded-[3px] text-[15px]  onset-semibold hover:bg-[#347CA7] hover:text-[white]`}>
                    {category.name}
            </button>
        </>
    )
}