import React, { useState } from "react";

import Post from "../post/post";
import { allPosts } from "../../data/mock-data";

const Posts = () => {
    
    const [postList, setPostList] = useState(allPosts);

    return (
        <section className="mt-10">
            <h3 className="text-xl font-bold mb-2">Feed</h3>
            {postList.map(post => {
                return (
                    <Post key={post.id} post={post} />
                )
            })}
        </section>
    )
}

export default Posts;