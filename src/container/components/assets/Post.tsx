import React from 'react';
import PostType from "../../../types";

// Es importante que no se llame a la interfaz como Post, ya que
// Post es el nombre del componente y se puede confundir.
// Se debe llamar PostType o PostInterface. 

const Post: React.FC<PostType> = ({ id, title, content, bg_image }) => {
    return (

        <div key={id} className="rounded-lg shadow-md text-gray-50">
            <div className='h-full flex flex-col justify-between'>
                <h2 className="text-lg font-bold text-white">{title}</h2>
                <p className="mt-2 text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: content.substring(0, 150)+'...' }}></p>
                <img src={`${bg_image}?sp=racwdli&st=2024-02-24T18:20:08Z&se=2027-02-24T02:20:08Z&sv=2022-11-02&sr=c&sig=nBH9cEemkR9Hh4t6yX1n1KJ1gAuDRrhAnzBmfDvE2Hg%3D`} alt={title}
                    className="w-full mt-4 object-cover rounded-sm"
                />
            </div>
        </div>
    )
}

export default Post;
