import React from "react";

import IconCommentInactive from "../../assets/icons/icon-comment-inactive.svg";
import IconFavouriteInactive from "../../assets/icons/icon-favourite-inactive.svg";
import IconSaveInactive from "../../assets/icons/icon-save-inactive.svg";

const Post = ({ post }) => {
    
    const { id, created_at, author_avatar, author_username, media, content, comments } = post;

    return (
        <article key={id} className="mb-6">
            <div id="posted-by" className="flex flex-col gap-1 w-full md:w-1/4">
                <div className="flex items-center gap-2">
                    <img className="w-10 h-10 rounded-full" src={author_avatar} alt="" />
                    <div className="flex flex-col">
                        <span className="font-semibold">{author_username}</span>
                        <span className="text-xs">{created_at}</span>
                    </div>
                </div>                
            </div>

            {media.length === 1 &&
                <div className="mt-2">
                    {media.map(elem => {
                        if ( elem.media_type === "image" ) {
                            return <img key={elem.id} className="object-cover w-full" src={elem.media_url} alt="" />
                        }
                        if ( elem.media_type === "video" ) {
                            return <video key={elem.id} className="object-cover w-full" src={elem.media_url} controls={true}></video>
                        }
                    })}                    
                </div>
            }
            {media.length > 1 &&
                <div className="flex overflow-x-scroll gap-2 overflow-y-hidden w-[112.5%] ml-[-8%] px-[8%] mt-2 md:overflow-x-visible md:overflow-y-visible md:flex-wrap md:w-[100%] md:ml-[0%] md:px-[0%]">
                    {media.map(elem => {
                        if ( elem.media_type === "image" ) {
                            return <img key={elem.id} className="object-cover h-64" src={elem.media_url} alt="" />
                        }
                        if ( elem.media_type === "video" ) {
                            return <video key={elem.id} className="object-cover h-64" src={elem.media_url} controls={true}></video>
                        }
                    })}
                </div>
            }            

            <p className="text-md font-semibold mt-2">{content}</p>

            <div className="flex justify-between mt-1">
                <div className="flex items-center gap-2">
                    <img className="w-7 h-7" src={IconFavouriteInactive} alt="" />
                    <img className="w-7 h-7" src={IconCommentInactive} alt="" />
                </div>
                <div>
                    <img className="w-7 h-7" src={IconSaveInactive} alt="" />
                </div>
            </div>

            {comments.length > 0 &&
                <section>
                    {comments?.map(comment => {
                        return (
                            <div key={comment.id} className="flex flex-col gap-1 my-2">
                                <div className="flex items-center gap-2">
                                    <img className="w-6 h-6 rounded-full" src={comment.author_avatar} alt="" />
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">{comment.author_username}</span>
                                        <span className="text-xs">{comment.created_at}</span>
                                    </div>
                                </div>
                                <p className="text-sm">{comment.content}</p>
                            </div>
                        )
                    })}
                    <p className="font-bold text-sm">Vedi tutti e {comments.length} i commenti</p>
                </section>
            }
        </article>
    )
}

export default Post;