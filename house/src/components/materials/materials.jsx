import React from "react";

const Materials = ({ place }) => {

    const { site_info } = place;

    return (
        <section className="mt-2">
            <h3 className="text-md font-semibold">Materiali</h3>
            <div className="flex gap-1 flex-wrap">
                {site_info.building_materials.map((material, index) => {
                    return (
                        <span key={index} className="py-1 px-2 rounded-full bg-purple-100 self-start">{material}</span>
                    )
                })}
            </div>
        </section>
    )
}

export default Materials;