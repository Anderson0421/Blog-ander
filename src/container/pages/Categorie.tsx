import { useParams } from "react-router-dom";
import Layout from "../Layouts/Layout";
import { useEffect, useState } from "react";
import { Post } from "../../types";
import PostCard from "../components/assets/Post";
import  Skeleton  from "../components/assets/Skeleton";


export default function Categorie() {
    const { slug } = useParams<{ slug: string }>();


    const [post, setPosts] = useState<Post[] | null>(null)
    const categoryName = localStorage.getItem('selectedCategoryName') || '';

    useEffect(() => {
        async function GetData() {
            const response = await fetch(`https://backend-django-blog.onrender.com/api/v1/filter/posts/${slug}`)
            const data = await response.json()
            setPosts(data)
        }
        GetData()
    }, [slug])


    return (
        <Layout>
            <div className="mx-10 pt-20">
                <h1 className="text-white text-3xl font-bold">
                    {categoryName}
                </h1>
                <section className="grid grid-cols-4  max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-5 gap-y-20 max-xl:grid-cols-3 pt-4">
                        {
                            post ? post.map((post, index) => {
                                return (
                                    <PostCard
                                        key={index}
                                        id={post.id}
                                        title={post.title}
                                        excerpt={post.excerpt}
                                        bg_image={post.bg_image}
                                    />
                                )
                            })
                                :
                                <Skeleton />
                        }
                </section>
            </div>
        </Layout>
    )
}