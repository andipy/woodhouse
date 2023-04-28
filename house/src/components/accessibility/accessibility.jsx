import React, { useState, useEffect } from "react";

import IconWinter from "../../assets/icons/icon-winter.svg"
import IconSummer from "../../assets/icons/icon-summer.svg"

const Accessibility = ({ access }) => {

    const { season, description } = access;

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        if ( season && description ) {
            setIsEmptyState(false)
        } else {
            setIsEmptyState(true)
        }
    }, [])

    return (
        <>
        {isEmptyState &&
            <div className="flex flex-col items-center justify-center gap-1 flex-wrap border border-dashed rounded-lg border-gray-400 min-h-40 py-4 hover:shadow-xl hover:border-gray-300">
                <img className="w-10" src={season == "Winter" ? IconWinter : season == "Summer" ? IconSummer : null} alt="" />
                <p className="w-2/3 text-center">Aggiungi le informazioni sull'accessibilità {season == "Winter" ? "invernale" : season == "Summer" ? "estiva" : null}</p>
            </div>
        }
        {!isEmptyState &&
            <div>
                <h3 className="text-md font-semibold">Accessibilità {season == "Winter" ? "invernale" : season == "Summer" ? "estiva" : null}</h3>
                <p>{description ? description : "Descrivi l'accessibilità durante questa stagione"}</p>
            </div>
        }
        </>
    )
}

export default Accessibility;