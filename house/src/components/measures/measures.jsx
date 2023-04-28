import React, { useState, useEffect } from "react";

import IconMeasure from "../../assets/icons/icon-measures.svg"

const Measures = ({ place }) => {

    const { siteInfo } = place;

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        siteInfo.measures.map(measure => {
            if (measure.value) {
                setIsEmptyState(false)
            } else {
                setIsEmptyState(true)
            }
        })
    }, [])

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Dimensioni</h3>
            {isEmptyState &&
                <div className="flex flex-col items-center justify-center gap-1 flex-wrap border border-dashed rounded-lg border-gray-400 min-h-20 mt-2 py-4 hover:shadow-xl hover:border-gray-300">
                    <img className="w-10" src={IconMeasure} alt="" />
                    <p className="w-2/3 text-center">Aggiungi le misure</p>
                </div>
            }
            {!isEmptyState &&
                <div className="flex gap-1 flex-wrap">
                    {siteInfo.measures.map((measure, index) => {
                        return (
                            <span key={index} className={`py-1 px-2 rounded-full self-start ${measure.size ? "bg-purple-100" : "bg-gray-100 text-gray-400"}`}>{measure.size ? measure.size : !measure.size ? "Inserisci " + measure.name : null} {measure.size}mq</span>
                        )
                    })}
                </div>
            }
            
        </section>
    )
}

export default Measures;