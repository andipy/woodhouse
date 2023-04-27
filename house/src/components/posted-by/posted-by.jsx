import React, { useEffect, useState } from "react";

import User1 from "../../assets/avatars/louis.jpg";

const PostedBy = ({ place }) => {

    const { createdAt, authorDisplayName, authorPhotoURL} = place;

    const [author, setAuthor] = useState({});
    useEffect(() => {
        //api call to retrieve the object from the users collection with the info of who created this place, query with the posted_by param
    }, [])

    return (
        <section className="flex flex-col gap-1 mt-2">
            <p className="text-xs font-semibold">Posted by:</p>
            <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-full object-cover" src={authorPhotoURL} alt="" />
                <div className="flex flex-col">
                    <span className="font-semibold">{authorDisplayName}</span>
                    <span className="text-xs">{Date(createdAt.seconds)}</span>
                </div>
            </div>
        </section>
    )
}

export default PostedBy;