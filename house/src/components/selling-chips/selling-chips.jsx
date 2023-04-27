import React from "react";

const SellingChips = ({ place }) => {

    const { saleInfo } = place;

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Tags</h3>
            <div className="flex gap-1 flex-wrap">
                {saleInfo.overview.map((info, index) => {
                    return (
                        <span key={index} className={`py-1 px-2 rounded-full self-start ${info.value ? "bg-purple-100" : "bg-gray-100 text-gray-400"}`}>{info.value ? info.value : "Specifica " + info.name}</span>
                    )
                })}
            </div>
        </section>
    )
}

export default SellingChips;