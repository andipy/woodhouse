import React from "react";

const Accessibility = ({ access }) => {

    const { season, description } = access;

    return (
        <div>
            <h3 className="text-md font-semibold">Accessibilità {season}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Accessibility;