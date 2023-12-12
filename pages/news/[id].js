import Layout from "../layout";
import { useEffect, useContext, useState, useRef } from "react";
import { LoaderContext } from "@/app/components/context/loaderContext";
import api from "@/app/components/axios/api";
import Loader from "@/app/components/reuseable/loader";
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';
import 'animate.css';
import DOMPurify from "dompurify";
import Error from "next/error";


export default function Id (){

    const loader = useContext(LoaderContext);
    const [error, setError] = useState(false);

    const options = {
        rootMargin: '0px',
        threshold: 0,
        triggerOnce: true,
    };


    const { ref, inView, entry } = useInView(options);

    const [post, setPost] = useState({});
    const [cleanedPost, setCleanedPost] =useState(null);

    const retrievedPost = {};
    const retrievedCategory = {};

    const promises = [];

    const router = useRouter();
    const postParam = router.query.id;



    useEffect(() => {

        loader.setLoading(true);

        promises.push(api.get(`/posts/${postParam}?_embed`)
            .then(resp => {

                const originalDate = new Date(resp.data.date_gmt);
                const day = originalDate.getDate();
                const month = originalDate.getMonth() + 1;
                const year = originalDate.getFullYear();
                const formattedDateString = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

                retrievedPost.title = resp.data.title.rendered;
                retrievedPost.date = formattedDateString;
                retrievedPost.category = resp.data.categories[0];
                retrievedPost.content = resp.data.content.rendered;
                retrievedPost.image = resp.data._embedded["wp:featuredmedia"][0].source_url;

                return api.get('/categories')

                    .then(resp => {

                        resp.data.map(category => {

                            if (retrievedPost.category === category.id) {

                                retrievedPost.category = category.name;

                            };

                        });


                    })
                    .catch(err => {

                        setError(true);

                    })

            })
            .catch(err => {

                setError(true);

            }));


        Promise.all(promises)
            .then(() => {

                setPost(retrievedPost);


                const clean = DOMPurify.sanitize(retrievedPost.content);

                setCleanedPost(DOMPurify.sanitize(retrievedPost.content));
                loader.setLoading(false);
                
            })
            .catch(() => {

                setError(true);

            })

    }, [postParam])




    return (
        <Layout>
            <Loader />

            {error ? (
                <>
                    <Error statusCode={500} />
                </>
            ) : (
                <>
                    <main className="mb-[70px] md:mb-[114px] min-h-[100vh]">
                        <div className="max-w-[1440px] m-auto">
                            <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'} ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]`}>
                                <div className={`grid grid-cols-1 md:grid-cols-2 mt-[140px] lg:mt-[200px] gap-[30px] justify-center md:items-center`}>
                                    <img src={post.image} className="w-[100%] border-[12px]"></img>
                                    <div className="flex flex-col gap-[8px]">
                                        <h1 className="text-[#404040]">{post.title}</h1>
                                        <p className="text-[#1C4F70] onset-semibold text-[1.25rem] mt-1">{post.category}</p>
                                        <div className="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#1C4F70]" height="1em" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg>
                                            <p className="text-[#1C4F70] onset-semibold text-[1rem]">{post.date}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post remove-all mt-[50px]" dangerouslySetInnerHTML={{ __html: cleanedPost }}>

                                </div>
                            </div>
                        </div>
                    </main>
                </>
            )}

            
        </Layout>
    )
}