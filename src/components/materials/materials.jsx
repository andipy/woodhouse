import React, { useState, useEffect } from "react";

import IconMaterials from "../../assets/icons/icon-materials.svg"

const Materials = ({ place }) => {

    const { siteInfo } = place;
    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {

            if (siteInfo.buildingMaterials.length > 0) {
                setIsEmptyState(false)
            } else if (siteInfo.buildingMaterials.length <= 0) {
                setIsEmptyState(true)
            }

    }, [])

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Materiali</h3>
            {isEmptyState &&
                <div className="flex flex-col items-center justify-center gap-1 flex-wrap border border-dashed rounded-lg border-gray-400 min-h-20 mt-2 py-4 hover:shadow-xl hover:border-gray-300">
                    <img className="w-10" src={IconMaterials} alt="" />
                    <p className="w-2/3 text-center">Aggiungi info sui materiali</p>
                </div>
            }
            {!isEmptyState &&
                <div className="flex gap-1 flex-wrap">
                    {siteInfo.buildingMaterials.map((material, index) => {
                        return (
                            <span key={index} className="py-1 px-2 rounded-full bg-purple-100 self-start">{material}</span>
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default Materials;