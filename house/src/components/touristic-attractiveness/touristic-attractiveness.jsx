import React from "react";

const TouristicAttractiveness = ({ place }) => {

    const { tourist_attractiveness } = place;

    return (
        <div className="flex flex-col gap-1 mt-2 md:w-1/2">
            <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Rating {tourist_attractiveness.rating}/7</span>
            <p>{tourist_attractiveness.description}</p>
        </div>
    )
}

export default TouristicAttractiveness;