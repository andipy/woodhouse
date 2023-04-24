import React from "react";

const SellingChips = ({ place }) => {

    const { sale_info } = place;

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Tags</h3>
            <div className="flex gap-1 flex-wrap">
                {sale_info.overview.map((info, index) => {
                    return (
                        <span key={index} className={`py-1 px-2 rounded-full self-start ${info.value ? "bg-purple-100" : "bg-gray-100 text-gray-400"}`}>{info.name} {info.value}</span>
                    )
                })}
            </div>
        </section>
    )
}

export default SellingChips;