import api from "@/app/components/axios/api";
import { useEffect } from "react";

export default function index(){

    useEffect(() => {

        api.get('/book')
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            })


    },[])


    return(
        <>
            <h1>
                Accreditee
            </h1>
        </>
    )
}