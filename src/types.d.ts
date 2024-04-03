type Post = {
    id: number,
    title: string
    content?: string
    excerpt:string
    bg_image: string
}

export const Post;


type Category = {
    slug: string,
    id: number,
    name: string
}

export const Category;

// Debemos de exportarlo como constante para que pueda ser importado en otros archivos
// poque si lo colocamos como default no podremos importarlo en otros archivos de la misma forma
// solo importara el primer export default que encuentre en el archivo y no los demas export default