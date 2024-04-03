import { useEffect, useState } from 'react';
import { Category } from '../../types';
import { Link, useNavigate } from 'react-router-dom';





export default function Categories() {
    const [categories, setCategories] = useState<Category[] | null>(null);

    useEffect(() => {
        async function GetData() {
            const response = await fetch('https://backend-django-blog.onrender.com/api/v1/list/categories')
            const data = await response.json()
            setCategories(data)
        }
        GetData()
    }, [])

    const navigate  = useNavigate()

    const handleCategoryClick = (category: Category) => {
        localStorage.setItem('selectedCategoryName', category.name);
        navigate(`/categories/${category.slug}`);
    };


    return (
        <>
            <div className="text-white max-sm:flex-wrap text-sm mt-5 mb-2 flex gap-2 ">
                {
                    categories ? categories.map((category, index) => {
                        return (
                            <Link onClick={() => handleCategoryClick(category)} key={index} to={`/categories/${category.slug}`}
                                className='px-32 max-sm:w-full flex text-gray-300 rounded-sm hover:bg-gray-800 duration-300 transition-all justify-center border border-gray-500 py-3 w-32'
                            >
                                <span>
                                    {category.name}
                                </span>
                            </Link>
                        )
                    })
                        :
                        <span
                            className='px-32 flex text-gray-300 rounded-sm hover:bg-gray-800 duration-300 transition-all justify-center border border-gray-500 py-3 w-32'
                        >
                            Cargando...
                        </span>
                }
            </div>
        </>
    )
}