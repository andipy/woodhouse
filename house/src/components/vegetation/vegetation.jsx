import React from "react";

import IconCommentInactive from "../../assets/icons/icon-comment-inactive.svg";
import IconFavouriteInactive from "../../assets/icons/icon-favourite-inactive.svg";
import IconSaveInactive from "../../assets/icons/icon-save-inactive.svg";

const Vegetation = ({ vegetation }) => {

    const { types, description, media } = vegetation;

    return (
        <section>
            <h3 className="text-xl font-bold">Vegetazione</h3>
            <div className="flex items-center gap-1">
                {types.map((type, index) => {
                    return (
                        <span key={index} className="py-1 px-2 rounded-full bg-purple-100 self-start">{type}</span>
                    )
                })}
            </div>

            <p>{description}</p>            

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
        </section>
    )
}

export default Vegetation;