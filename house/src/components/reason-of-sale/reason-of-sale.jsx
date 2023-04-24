import React from "react";

const ReasonOfSale = ({ place }) => {

    const { sale_info } = place;

    return (
        <>
            <p>{sale_info.reason_of_sale}</p>
            <a className="underline text-cyan-700" href={sale_info.adv_url} target="blank">Link all'annuncio</a>
        </>
    )
}

export default ReasonOfSale;