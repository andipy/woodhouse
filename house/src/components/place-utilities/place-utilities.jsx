import React from "react";

const PlaceUtilities = ({ place }) => {

    const { site_info } = place;

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Allacci e servizi</h3>
            <div className="flex gap-1 flex-wrap">
                {site_info.utilities.map((util, index) => {
                    return (
                        <span key={index} className={`py-1 px-2 rounded-full self-start ${util.is_present ? "bg-purple-100" : "bg-gray-100 text-gray-400"}`}>{util.name}</span>
                    )
                })}
            </div>
        </section>
    )
}

export default PlaceUtilities;