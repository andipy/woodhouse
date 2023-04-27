import React from "react";

const Conditions = ({ place }) => {

    const { siteInfo } = place
    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Condizioni</h3>
            <p>{siteInfo.conditions ? siteInfo.conditions : "Descrivi in che condizioni si trova il posto"}</p>
        </section>
    )
}

export default Conditions;