import React from "react";

const Conditions = ({ place }) => {

    const { site_info } = place
    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Condizioni</h3>
            <p>{site_info.conditions}</p>
        </section>
    )
}

export default Conditions;