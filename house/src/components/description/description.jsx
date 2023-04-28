import React, { useEffect, useState } from "react";

import IconArticle from "../../assets/icons/icon-article.svg"

const Description = ({ place }) => {

    const { description, rating } = place;

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        if ( !description && !rating ) {
            setIsEmptyState(true)
        }
    }, [])

    return (
        <>
        {isEmptyState &&
            <div id="description" className="flex flex-col items-center justify-center gap-2 md:w-1/2 border border-dashed rounded-lg border-gray-400 min-h-40 py-4 hover:shadow-xl hover:border-gray-300">
                <img className="w-10" src={IconArticle} alt="" />
                <p className="w-2/3 text-center">Aggiungi una descrizione e un rating</p>
            </div>
        }
        {!isEmptyState &&
            <div id="description" className="flex flex-col gap-2 md:w-1/2">
                <p className="text-md">{description ? description : "Scrivi una descrizione"}</p>
                <div className="flex items-center gap-2 font-semibold">
                    <h4>Rating</h4>
                    <span>{rating ? rating : "Dai un rating generale a questo posto"}/10</span>
                </div>
            </div>
        }
        </>
        
    )
}

export default Description;