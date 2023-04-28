import React, { useState, useEffect } from "react";

import IconTourism from "../../assets/icons/icon-tourism.svg"

const TouristicAttractiveness = ({ place }) => {

    const { touristAttractiveness } = place;

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        if ( touristAttractiveness.rating && touristAttractiveness.description ) {
            setIsEmptyState(false)
        } else {
            setIsEmptyState(true)
        }
    }, [])

    return (
        <>
        {isEmptyState &&
            <div className="flex flex-col items-center justify-center gap-1 flex-wrap border border-dashed rounded-lg border-gray-400 min-h-40 py-4 hover:shadow-xl hover:border-gray-300">
                <img className="w-10" src={IconTourism} alt="" />
                <p className="w-2/3 text-center">Aggiungi le informazioni sull'attrattività turistica</p>
            </div>
        }
        {!isEmptyState &&
            <div className="flex flex-col gap-1 mt-2 md:w-1/2">
                <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Rating {touristAttractiveness.rating ? touristAttractiveness.rating : "Inserisci un rating di attrazione turistica"}/10</span>
                <p>{touristAttractiveness.description ? touristAttractiveness.description : "Scrivi una descrizione dell'attrattività turistica del luogo"}</p>
            </div>
        }
        </>
    )
}

export default TouristicAttractiveness;