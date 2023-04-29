import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Post from "../post/post";

import { db } from "../../utilities/firebase/firebase.js"
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

const Posts = ({ place }) => {

    const { placeID } = place;
    
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const q = query(collection(db, 'posts'), where("placeID", "==", placeID));

            let posts = [];
    
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(p => {
                console.log(p.data())
                posts.push(p.data());
            })
            setPostList(posts);
        }
        getPosts()
    }, [])

    return (
        <section className="mt-10">
            <h3 className="text-xl font-bold mb-2">Feed</h3>
            <Link to={`/places/${placeID}/create-new-post`}>
                <button className="btn-secondary-enabled">+ Create new post</button>
            </Link>
            {postList.map((post, index) => {
                return (
                    <Post key={index} post={post} />
                )
            })}
        </section>
    )
}

export default Posts;