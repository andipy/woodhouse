import React from "react";

const Measures = ({ place }) => {

    const { siteInfo } = place;

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Dimensioni</h3>
            <div className="flex gap-1 flex-wrap">
                {siteInfo.measures.map((measure, index) => {
                    return (
                        <span key={index} className={`py-1 px-2 rounded-full self-start ${measure.size ? "bg-purple-100" : "bg-gray-100 text-gray-400"}`}>{measure.size ? measure.size : !measure.size ? "Inserisci " + measure.name : null} {measure.size}mq</span>
                    )
                })}
            </div>
        </section>
    )
}

export default Measures;