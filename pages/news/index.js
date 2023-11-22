import Layout from "../layout";
import PageHeader from "@/app/components/reuseable/pageHeader";
import CatergorySelector from "@/app/components/news/categorySelector";
import PostItem from "@/app/components/news/postItem";
import axios from "axios";
import api from "@/app/components/axios/api";
import { useState, useEffect, useContext } from "react";
import Loader from "@/app/components/reuseable/loader";
import { LoaderContext } from "@/app/components/context/loaderContext";
import Error from "next/error";

export default function news(){

    const loader = useContext(LoaderContext);


    //The state for displaying posts
    const [posts, setPosts] = useState([]);

    const [error, setError] = useState(false);

    //A state for tracking all posts retrieved originally from the api
    const [previousPosts, setPreviousPosts] = useState([]);


    //State for tracking and making changes to pagination
    const [paginatePosts, setPaginatePosts] = useState([]);

    const [categories, setCategories] = useState([]);
    const retrievedPosts = [];
    const retrievedCategories = [];

    useEffect(() => {

        loader.setLoading(true);

        const promises = [];


        //Get all the categories
        promises.push(api.get('/categories')

            .then(resp => {


                resp.data.map(category => {

                    const retrievedCategory = {};

                    retrievedCategory.id = category.id;
                    retrievedCategory.name = category.name;

                    retrievedCategories.push(retrievedCategory);

                });


            })

            .catch(err => {

                setError(true);

            })
        
        )
        
        //Get all the posts
        promises.push(api.get('/posts?_embed')

            .then(function (resp) {



                resp.data.map(post => {

                    const retrievedPost = {};

                    //format date
                    const originalDate = new Date(post.date_gmt);
                    const day = originalDate.getDate();
                    const month = originalDate.getMonth() + 1; 
                    const year = originalDate.getFullYear();
                    const formattedDateString = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

                    retrievedPost.id = post.id;
                    retrievedPost.title = post.title.rendered;
                    retrievedPost.date = formattedDateString;
                    retrievedPost.category = post.categories[0];
                    retrievedPost.category_id = post.categories[0];
                    retrievedPost.excerpt = post.excerpt.rendered;
                    retrievedPost.image = post._embedded["wp:featuredmedia"][0].source_url;


                    retrievedPosts.push(retrievedPost);

                });

            })

            .catch(function (err) {

                setError(true);

            }));


        Promise.all(promises)
            .then(() => {

                //Set the category name on each post
                retrievedPosts.map(post => {

                    retrievedCategories.map(category => {

                        if(post.category === category.id){

                            post.category = category.name;
                        };

                    })


                })

                
                setPaginatePosts(retrievedPosts);
                setPreviousPosts(retrievedPosts);
                setCategories(retrievedCategories);
                loader.setLoading(false);

                
            })
            .catch((err) => {

                setError(true);

            });

    },[]);


    const [categoryFilter, setCategoryFilter] = useState([]);


    const handleCategoryFilter = (id) => {


        if(!categoryFilter.includes(id)){

            const updatedFilter = [...categoryFilter, id];

            setCategoryFilter(updatedFilter);


        } else if (categoryFilter.includes(id)){

            const cutFilter = categoryFilter.filter((category) => category !== id);

            setCategoryFilter(cutFilter);

        }

    }




    useEffect(() => {
     

        if(categoryFilter.length > 0){

            const filteredPosts = previousPosts.filter(post => categoryFilter.includes(post.category_id));

            console.log(filteredPosts);

            setPaginatePosts(filteredPosts);

            console.log(paginatePosts);



        } else if(categoryFilter.length < 1) {

            setPaginatePosts(previousPosts);


        }

    },[categoryFilter]);



    //HandlePostPagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;


    useEffect(() => {

        console.log('change to pagiate posts');

        const currentItems = paginatePosts.slice(indexOfFirstItem, indexOfLastItem);

        setPosts(currentItems);

    }, [paginatePosts, currentPage]);





    const handlePagination = (pageNumber) => {

        setCurrentPage(pageNumber);


    }


    return(
        <>
            {error ? (
                <>
                    <Error statusCode={500} />    
                </>
            )
    
            :(
                <>
                    <Layout>
                        <PageHeader
                            backgroundImage={'/images/newspaper-large.png'}
                            title={'Latest News'}
    
                        />
    
                        <Loader />
    
                        <div className="max-w-[1440px] m-auto">
                            <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">
    
                                <div className="mt-[47px] mb-[73px] flex gap-[20px]">
    
                                    {categories.map(category => (
    
                                        <div key={category.id}>
                                            <CatergorySelector
                                                retrievedCategory={category}
                                                handleCategoryFilter={handleCategoryFilter}
                                            />
                                        </div>
    
                                    ))}
    
    
                                </div>
    
    
    
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[50px] mb-[50px]">
    
    
                                    {posts.map(post => (
    
                                        <div key={post.id} className="col-span-1 flex justify-center sm:justify-start">
                                            <PostItem post={post} />
                                        </div>
    
                                    ))}
    
    
                                </div>
    
    
                                {paginatePosts.length > 8 && (
    
                                    <nav
                                        className="flex items-center justify-between   bg-white px-4 py-3 sm:px-6"
                                        aria-label="Pagination"
                                    >
                                        <div className="flex flex-1 justify-between sm:justify-end">
    
                                            <button
                                                onClick={() => handlePagination(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="relative inline-flex items-center rounded-md bg-[#1C4F70] px-3 py-2 text-sm  text-white  ring-gray-300 hover:bg-[#107DAB] focus-visible:outline-offset-0"
                                            >
                                                Newer posts
                                            </button>
    
    
    
                                            <button
                                                onClick={() => handlePagination(currentPage + 1)}
                                                disabled={indexOfLastItem >= paginatePosts.length}
                                                className="relative ml-3 inline-flex items-center rounded-md bg-[#1C4F70] px-3 py-2 text-sm  text-white  ring-gray-300 hover:bg-[#107DAB] focus-visible:outline-offset-0"
                                            >
    
                                                Older posts
    
                                            </button>
    
    
                                        </div>
    
                                    </nav>
    

                                )}
    
                            </div>
                        </div>
    
                    </Layout>
    
                </>
        )
    }

        </>
    )
}