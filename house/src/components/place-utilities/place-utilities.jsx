import React, { useState, useEffect } from "react";

import IconUtilities from "../../assets/icons/icon-utilities.svg"

const PlaceUtilities = ({ place }) => {

    const { siteInfo } = place;

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        siteInfo.utilities.map(util => {
            if (util.value) {
                setIsEmptyState(false)
            } else {
                setIsEmptyState(true)
            }
        })
    }, [])

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Allacci e servizi</h3>
            {isEmptyState &&
                <div className="flex flex-col items-center justify-center gap-1 flex-wrap border border-dashed rounded-lg border-gray-400 min-h-20 mt-2 py-4 hover:shadow-xl hover:border-gray-300">
                    <img className="w-10" src={IconUtilities} alt="" />
                    <p className="w-2/3 text-center">Aggiungi info sugli allacci</p>
                </div>
            }
            {!isEmptyState &&
                <div className="flex gap-1 flex-wrap">
                    {siteInfo.utilities.map((util, index) => {
                        return (
                            <span key={index} className={`py-1 px-2 rounded-full self-start ${util.isWired ? "bg-purple-100" : "bg-gray-100 text-gray-400"}`}>{util.isWired ? util.name : !util.isWired ? "Inserisci " + util.name : null}</span>
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default PlaceUtilities;