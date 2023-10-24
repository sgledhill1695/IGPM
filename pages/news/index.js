import Layout from "../layout";
import PageHeader from "@/app/components/reuseable/pageHeader";
import CatergorySelector from "@/app/components/news/categorySelector";
import PostItem from "@/app/components/news/postItem";
import axios from "axios";
import api from "@/app/components/axios/api";
import { useState, useEffect } from "react";

export default function news(){

    const [posts, setPosts] = useState([]);
    const [previousPosts, setPreviousPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const retrievedPosts = [];
    const retrievedCategories = [];

    useEffect(() => {

        const promises = [];


        //Get all the categories
        promises.push(api.get('/categories')

            .then(resp => {

             //   console.log(resp.data);

                resp.data.map(category => {

                    const retrievedCategory = {};

                    retrievedCategory.id = category.id;
                    retrievedCategory.name = category.name;

                    retrievedCategories.push(retrievedCategory);

                });


            })

            .catch(err => {

                console.log(err);

            })
        
        )
        
        //Get all the posts
        promises.push(api.get('/posts?_embed')

            .then(function (resp) {

              // console.log(resp.data);


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
                    retrievedPost.image = post._embedded["wp:featuredmedia"][0].source_url

                    retrievedPosts.push(retrievedPost);

                });

            })

            .catch(function (err) {

               console.log(err);

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

                setPosts(retrievedPosts);
                setPreviousPosts(retrievedPosts);
                setCategories(retrievedCategories);

                
            })
            .catch(() => {
                alert('promise error');
            });

    },[]);


    const [categoryFilter, setCategoryFilter] = useState([]);


    const handleCategoryFilter = (id) => {


        if(!categoryFilter.includes(id)){

            const updatedFilter = [...categoryFilter, id];

            setCategoryFilter(updatedFilter);

            console.log(categoryFilter);

        } else if (categoryFilter.includes(id)){

            const cutFilter = categoryFilter.filter((category) => category !== id);

            setCategoryFilter(cutFilter);

        }

    }

    useEffect(() => {

       // console.log(categoryFilter);

        console.log(posts);

        

        if(categoryFilter.length > 0){


            const filteredPosts = previousPosts.filter(post => categoryFilter.includes(post.category_id));
            setPosts(filteredPosts);

        } else if(categoryFilter.length < 1) {

            //alert('no filter')

            setPosts(previousPosts);

            console.log(retrievedPosts);

        }



    },[categoryFilter]);



    console.log(retrievedPosts)
 






    return(
        <>
            <Layout>
                <PageHeader
                    backgroundImage={'/images/newspaper-large.png'}
                    title={'Latest News'}
                    
                />

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



                        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[50px]">


                            {posts.map(post => (

                                <div key={post.id} className="col-span-1">
                                    <PostItem post={post}/>
                                </div>

                            ))}


                        </div>




                    </div>
                </div>        




                
            </Layout>
        </>
    )
}