import React from "react";

const TouristicAttractiveness = ({ place }) => {

    const { touristAttractiveness } = place;

    return (
        <div className="flex flex-col gap-1 mt-2 md:w-1/2">
            <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Rating {touristAttractiveness.rating ? touristAttractiveness.rating : "Inserisci un rating di attrazione turistica"}/10</span>
            <p>{touristAttractiveness.description ? touristAttractiveness.description : "Scrivi una descrizione dell'attrattività turistica del luogo"}</p>
        </div>
    )
}

export default TouristicAttractiveness;