import React, { useState, useEffect } from "react";

import IconSell from "../../assets/icons/icon-sell.svg"

const ReasonOfSale = ({ place }) => {

    const { saleInfo } = place;

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        if (saleInfo.reasonOfSale) {
            setIsEmptyState(false)
        } else {
            setIsEmptyState(true)
        }
    }, [])

    return (
        <>
            {isEmptyState &&
                <div className="flex flex-col items-center justify-center gap-1 flex-wrap border border-dashed rounded-lg border-gray-400 min-h-40 py-4 hover:shadow-xl hover:border-gray-300">
                    <img className="w-10" src={IconSell} alt="" />
                    <p className="w-2/3 text-center">Spiega il motivo della vendita</p>
                </div>
            }
            {!isEmptyState &&
                <>
                    <p>{saleInfo.reasonOfSale ? saleInfo.reasonOfSale : "Spiega il motivo della vendita"}</p>
                    {saleInfo.advURLs.map((url, index) => {
                        return (
                            <a key={index} className="underline text-cyan-700" href={url} target="blank">Link all'annuncio</a>
                        )
                    })}
                </>
            }
        </>
    )
}

export default ReasonOfSale;