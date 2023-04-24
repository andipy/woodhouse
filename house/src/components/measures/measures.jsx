import React from "react";

const Measures = ({ place }) => {

    const { site_info } = place;

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Dimensioni</h3>
            <div className="flex gap-1 flex-wrap">
                {site_info.measures.map((measure, index) => {
                    return (
                        <span key={index} className="py-1 px-2 rounded-full bg-purple-100 self-start">{measure.name} {measure.size}mq</span>
                    )
                })}
            </div>
        </section>
    )
}

export default Measures;