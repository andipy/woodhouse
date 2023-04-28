import React, { useState, useEffect } from "react";

import IconConditions from "../../assets/icons/icon-conditions.svg"

const Conditions = ({ place }) => {

    const { siteInfo } = place;

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        if (siteInfo.conditions) {
            setIsEmptyState(false)
        } else {
            setIsEmptyState(true)
        }
    }, [])

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Condizioni</h3>
            {isEmptyState &&
                <div className="flex flex-col items-center justify-center gap-1 flex-wrap border border-dashed rounded-lg border-gray-400 min-h-20 mt-2 py-4 hover:shadow-xl hover:border-gray-300">
                    <img className="w-10" src={IconConditions} alt="" />
                    <p className="w-2/3 text-center">Aggiungi info sulle condizioni</p>
                </div>
            }
            {!isEmptyState &&
                <p>{siteInfo.conditions ? siteInfo.conditions : "Descrivi in che condizioni si trova il posto"}</p>
            }
        </section>
    )
}

export default Conditions;