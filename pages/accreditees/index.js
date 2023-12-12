import api from "@/app/components/axios/api";
import { useEffect, useState, useContext } from "react";
import Layout from "../layout";
import { useSearchParams } from "next/navigation";
import SearchAccreditees from "@/app/components/accreditees/searchAccreditees";
import Search from "@/app/components/accreditees/search";
import Loader from "@/app/components/reuseable/loader";
import { LoaderContext } from "@/app/components/context/loaderContext";
import { useForm } from "react-hook-form";
import { notFound } from 'next/navigation';
import Error from "next/error";

export default function index(){


    //Form validation
    const {register, handleSubmit, formState:{ errors }} = useForm();

    const {loading, setLoading} = useContext(LoaderContext);

    //State to control which component is diplayed
    const [submitted, setSubmitted] = useState(false);

    //Error state
    const [error, setError] = useState(false);

    //Data retrieved by api
    const [fetchedData, setFetchedData] = useState([]);

    //State for keyword entered by user
    const [keyword, setKeyword] = useState('');


    const handleFormSubmit = (data) => {

        setLoading(true);

         api.get('/book')
            .then(resp => {

                setLoading(true);

                const retrievedData = [];

                resp.data.map(data => {

                    retrievedData.push({
                        name: data.acf.accreditee_name,
                        active: data.acf.active,
                        county: data.acf.county,
                        date: data.acf.date_achieved,
                        registration: data.acf.registration_number
                    })

                })
                
                setKeyword(data.search);
                setFetchedData(retrievedData);
                setSubmitted(true);
                setLoading(false);

            })

            .catch(err => {

                setLoading(false);
                setError(true);


            });
 
        }


    return(
        <>
            <Layout>

                <Loader/>

                {error ? (
                    <>
                        <Error statusCode={500} />
                    </>
                ) : (
                    <>
                        <main>
                            {submitted ? (
                                <>
                                    <Search
                                        handleFormSubmit={handleFormSubmit}
                                        handleSubmit={handleSubmit}
                                        fetchedData={fetchedData}
                                        keyword={keyword}
                                        setError={setError}
                                        register={register}
                                        errors={errors}
                                    />

                                </>
                            ) : (
                                <>
                                    <SearchAccreditees
                                        handleFormSubmit={handleFormSubmit}
                                        setKeyword={setKeyword}
                                        handleSubmit={handleSubmit}
                                        register={register}
                                        errors={errors}
                                    />
                                </>
                            )}

                        </main>
                    </>
                )}

            </Layout>

        </>
    )
}