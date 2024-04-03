import Pagination from "../components/Pagination";
import Layout from "../Layouts/Layout";
import Posts from "../components/Posts";
import Categories from "../components/Categories";

export default function Home() {
    return (
        <Layout>
            <div className="text-white  px-10 pt-16 pb-12">
                <h1 className="text-4xl font-bold">
                    Bienvenido a mi blog personal 👋
                </h1>
                <p className="text-base font-normal mt-3">
                    Creado con React, TypeScript, Tailwind y Django Rest Framework 🛠️
                </p>
                <p className="text-sm  mt-4">
                    Ultimos posts:
                </p>
                <div>
                    <Categories />
                </div>
                <Posts />
                <div className="pt-10">
                    <Pagination />
                </div>
            </div>
        </Layout>
    )
}