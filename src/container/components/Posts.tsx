import { useEffect, useState } from "react"

import Post from "../../types"
import PostCard from "./assets/Post";

const Posts = () => {
    const [Posts, setPost] = useState<Post[]>([]);

    // Al colocar <Post[]> estamos indicando que post es un 
    // array de objetos de tipo Post y solo se pueden agregar
    // objetos de tipo Post a post. 

    useEffect(() => {
        async function GetData() {
            const response = await fetch('http://127.0.0.1:8000/api/v1/list/posts')
            const data = await response.json()
            setPost(data)
        }
        GetData()
    }, [])
    return (

        <section className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-4">
            {
                Posts ? Posts.map((post, index) => {
                    return (
                        <PostCard
                            key={index}
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            bg_image={post.bg_image}
                        />
                    )
                })
                    :
                    <h1>Cargando...</h1>
            }
        </section>
    );
}

export default Posts