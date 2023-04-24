import React from "react";

const Description = ({ place }) => {

    const { description, rating } = place;

    return (
        <div id="description" className="flex flex-col gap-2 md:w-1/2">
            <p className="text-md">{description}</p>
            <div className="flex items-center gap-2 font-semibold">
                <h4>Rating</h4>
                <span>{rating}/7</span>
            </div>
        </div>
    )
}

export default Description;