import React from "react";
import { useNavigate } from "react-router-dom";

import IconImage from "../../assets/icons/icon-image.svg"

const ListItem = ({ place }) => {
    const { placeID, name, description, rating, location, siteInfo, saleInfo, media } = place;

    const navigate = useNavigate();

    return (        
        <div
            className="flex flex-col md:flex-row gap-4 py-4 px-4 rounded-md border border-solid border-gray-300 hover:shadow-xl hover:border-none mb-4"
            onClick={() => navigate(`/places/${placeID}`, {state: place})}
        >
            <img className="w-100 md:w-44 h-44 object-cover shrink-0 rounded-md" src={media.length > 0 ? media[0].mediaURL : IconImage} alt="" />
            <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                    <h3 className="text-xl font-semibold">{name ? name : "Posto senza nome"}</h3>
                    <span className="font-semibold">{rating ? `Rating: ${rating}/10` : "Rating ancora da assegnare"}</span>
                </div>
                <p className="text-sm">{description ? description : "Descrivi questo posto"}</p>
                <div className="flex gap-1 items-center">
                    <span>Dove:</span>
                    <span className="px-2 rounded-full bg-gray-200 self-start">{location.region ? location.region : "Regione"}</span>
                    <span className="px-2 rounded-full bg-gray-200 self-start">{location.city ? location.city : "Città"}</span>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex gap-1 items-center">
                        <span>Tipologia:</span>
                        <span className="py-1 px-2 rounded-full bg-gray-200 self-start">{siteInfo.overview[0] ? siteInfo.overview[0].value : "Da definire"}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span>Prezzo:</span>
                        <span className="py-1 px-2 rounded-full bg-gray-200 self-start">{saleInfo.overview[1].value ? saleInfo.overview[1].value : "Non si sa"} euro</span>
                    </div>
                </div>                
            </div>            
        </div>
    )
}

export default ListItem;