import { useParams } from "react-router-dom";
import Layout from "../Layouts/Layout";
import { useEffect } from "react";
import PostType from "../../types";
import { useState } from "react";
import Loader from "./assets/Loader";

export default function PostDetail() {
    const [post, setPost] = useState<PostType | null>(null);
    const { id } = useParams();

    useEffect(() => {
        async function GetData() {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/detail/${id}/posts`)
            const data = await response.json()
            setPost(data)
        }
        GetData()
    }, [id])

    return (
        <Layout>
            <section className="flex justify-center">
                {
                    post ?
                        <article className="mx-auto max-lg:mx-20 max-md:mx-10 max-sm:mx-8 w-full mt-12 max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
                            <h1 className="antialiased text-white font-bold text-3xl">{post.title}</h1>
                            <p className=" antialiased text-gray-200 mt-5 leading-7" dangerouslySetInnerHTML={{ __html: post.content }} >
                            </p>
                        </article>
                        :
                        <div className="flex justify-center items-center h-screen">
                            <Loader />
                        </div>
                }
            </section>
        </Layout>
    )
}