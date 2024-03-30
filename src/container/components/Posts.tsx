import { useEffect, useState } from "react"

import Post from "../../types"
import PostCard from "./assets/Post";
import Skeleton from "./assets/Skeleton";

const Posts = () => {
    const [Posts, setPost] = useState<Post[] | null>(null);
    // Ahora estamos diciendo que useState puede ser un array de objetos
    // de tipo Post o null.
    

    // Al colocar <Post[]> estamos indicando que post es un 
    // array de objetos de tipo Post y solo se pueden agregar
    // objetos de tipo Post a post. 

    useEffect(() => {
        async function GetData() {
            const response = await fetch('https://backend-django-blog.onrender.com/api/v1/list/posts')
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
                            excerpt={post.excerpt}
                            bg_image={post.bg_image}
                        />
                    )
                })
                    :
                    [1, 2, 3, 4, 5, 6].map((n) => <Skeleton key={n} />)
            }
        </section>
    );
}

export default Posts