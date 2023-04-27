import React from "react";

const PlaceUtilities = ({ place }) => {

    const { siteInfo } = place;

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Allacci e servizi</h3>
            <div className="flex gap-1 flex-wrap">
                {siteInfo.utilities.map((util, index) => {
                    return (
                        <span key={index} className={`py-1 px-2 rounded-full self-start ${util.isWired ? "bg-purple-100" : "bg-gray-100 text-gray-400"}`}>{util.isWired ? util.name : !util.isWired ? "Inserisci " + util.name : null}</span>
                    )
                })}
            </div>
        </section>
    )
}

export default PlaceUtilities;