import React, { useEffect, useState } from "react";

import User1 from "../../assets/avatars/louis.jpg";

const PostedBy = ({ place }) => {

    const { created_at } = place;

    const [author, setAuthor] = useState({});
    useEffect(() => {
        //api call to retrieve the object from the users collection with the info of who created this place, query with the posted_by param
    }, [])

    return (
        <section className="flex flex-col gap-1 mt-2">
            <p className="text-xs font-semibold">Posted by:</p>
            <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-full" src={User1} alt="" />
                <div className="flex flex-col">
                    <span className="font-semibold">{"Louis"}</span>
                    <span className="text-xs">{created_at}</span>
                </div>
            </div>
        </section>
    )
}

export default PostedBy;