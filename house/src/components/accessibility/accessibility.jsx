import React from "react";

const Accessibility = ({ access }) => {

    const { season, description } = access;

    return (
        <div>
            <h3 className="text-md font-semibold">Accessibilità {season}</h3>
            <p>{description ? description : "Descrivi l'accessibilità durante questa stagione"}</p>
        </div>
    )
}

export default Accessibility;