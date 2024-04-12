import React from 'react';
import PostType from "../../../types";
import { Link } from 'react-router-dom';

// Es importante que no se llame a la interfaz como Post, ya que
// Post es el nombre del componente y se puede confundir.
// Se debe llamar PostType o PostInterface. 

const Post: React.FC<PostType> = ({ id, title, excerpt, bg_image }) => {
    return (

        <Link to={`../post/${id}/detail`} key={id} className="bg-gray-950 border border-gray-800 rounded-lg group shadow-md text-gray-50">
            <div className='h-full flex flex-col '>
                <img src={`${bg_image}?sp=racwdli&st=2024-02-24T18:20:08Z&se=2027-02-24T02:20:08Z&sv=2022-11-02&sr=c&sig=nBH9cEemkR9Hh4t6yX1n1KJ1gAuDRrhAnzBmfDvE2Hg%3D`} alt={title}
                    className=" w-full animate-slide-in-right animate-duration-300 h-max group-hover:scale-105 mt-4 rounded-sm duration-300 transition-all"
                />
                <div className='p-3 flex flex-col'>
                    <h2 className="text-lg font-bold text-white">{title}</h2>
                    <p className="mt-2 text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 150) + '...' }}></p>
                </div>
            </div>
        </Link>
    )
}

export default Post;
