import React, { useState, useEffect } from "react";

import IconSell from "../../assets/icons/icon-sell.svg"

const SellingChips = ({ place }) => {

    const { saleInfo } = place;

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        saleInfo.overview.map(info => {
            if (info.value) {
                setIsEmptyState(false)
            } else {
                setIsEmptyState(true)
            }
        })
    }, [])

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Tags</h3>
            {isEmptyState &&
                <div className="flex flex-col items-center justify-center gap-1 flex-wrap border border-dashed rounded-lg border-gray-400 min-h-40 py-4 hover:shadow-xl hover:border-gray-300">
                    <img className="w-10" src={IconSell} alt="" />
                    <p className="w-2/3 text-center">Aggiungi le informazioni di vendita</p>
                </div>
            }
            {!isEmptyState &&
                <div className="flex gap-1 flex-wrap">
                    {saleInfo.overview.map((info, index) => {
                        return (
                            <span key={index} className={`py-1 px-2 rounded-full self-start ${info.value ? "bg-purple-100" : "bg-gray-100 text-gray-400"}`}>{info.value ? info.value : "Specifica " + info.name}</span>
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default SellingChips;