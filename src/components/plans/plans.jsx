import React from "react";

import IconPlans from "../../assets/icons/icon-plans.svg";

const Plans = ({ place }) => {

    const { siteInfo } = place;
    
    return (
        <section className="mt-2 flex items-center py-1 px-2 rounded-full bg-sky-200 self-start gap-1">
            <img className="w-4 h-4" src={IconPlans} alt="" />
            <span className="underline text-xs font-semibold">Disegni tecnici</span>
        </section>
    )
}

export default Plans;