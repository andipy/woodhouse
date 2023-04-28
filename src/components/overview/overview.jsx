import React, { useState, useEffect } from "react";

import IconTags from "../../assets/icons/icon-tags.svg"

const Overview = ({ place }) => {

    const { siteInfo } = place;

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        siteInfo.overview.map(info => {
            if (info.value) {
                setIsEmptyState(false)
            } else {
                setIsEmptyState(true)
            }
        })
    }, [])

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Overview</h3>
            {isEmptyState &&
                <div className="flex flex-col items-center justify-center gap-1 flex-wrap border border-dashed rounded-lg border-gray-400 min-h-40 py-4 hover:shadow-xl hover:border-gray-300">
                    <img className="w-10" src={IconTags} alt="" />
                    <p className="w-2/3 text-center">Aggiungi i tag generali sul posto</p>
                </div>
            }
            {!isEmptyState &&
                <div className="flex gap-1 flex-wrap">
                    {siteInfo.overview.map((info, index) => {
                        return (
                            <span key={index} className={`py-1 px-2 rounded-full self-start ${info.value ? "bg-purple-100" : "bg-gray-100 text-gray-400"}`}>{info.value ? info.value : !info.value ? "Inserisci " + info.name : null}</span>
                        )
                    })}
                </div>
            }            
        </section>
    )
}

export default Overview;