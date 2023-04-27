import React from "react";

const Overview = ({ place }) => {

    const { siteInfo } = place;

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Overview</h3>
            <div className="flex gap-1 flex-wrap">
                {siteInfo.overview.map((info, index) => {
                    return (
                        <span key={index} className={`py-1 px-2 rounded-full self-start ${info.value ? "bg-purple-100" : "bg-gray-100 text-gray-400"}`}>{info.value ? info.value : !info.value ? "Inserisci " + info.name : null}</span>
                    )
                })}
            </div>
        </section>
    )
}

export default Overview;