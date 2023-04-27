import React from "react";

const ReasonOfSale = ({ place }) => {

    const { saleInfo } = place;

    return (
        <>
            <p>{saleInfo.reasonOfSale ? saleInfo.reasonOfSale : "Spiega il motivo della vendita"}</p>
            {saleInfo.advURLs.map((url, index) => {
                return (
                    <a key={index} className="underline text-cyan-700" href={url} target="blank">Link all'annuncio</a>
                )
            })}
            
        </>
    )
}

export default ReasonOfSale;