import React, { useEffect, useState } from "react";

import IconGeolocation from "../../assets/icons/icon-geolocation.svg";

const GeoPosition = ({ place }) => {

    const { location } = place;
    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        if ( !location.address && !location.altitude && !location.city && !location.country && !location.generalContext && !location.geoLocation.latitude && !location.geoLocation.longitude && !location.number && !location.province && !location.region && !location.zipCode ) {
            setIsEmptyState(true)
        }
    }, [])

    return (
        <>
        {isEmptyState &&
            <div id="location" className="flex flex-col items-center justify-center gap-1 md:w-1/2 border border-dashed rounded-lg border-gray-400 min-h-40 py-4 hover:shadow-xl hover:border-gray-300">
                <img className="w-10" src={IconGeolocation} alt="" />
                <p className="w-2/3 text-center">Aggiungi dove si trova questo posto</p>
            </div>
        }
        {!isEmptyState &&
            <div id="location" className="flex flex-col gap-1 md:w-1/2">
                <h3 className="text-xl font-bold">Dove</h3>
                <div className="flex items-center gap-1 flex-wrap">
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">{location.generalContext ? location.generalContext : "Inserisci contesto gnerale"}</span>
                <span className="py-1 px-2 rounded-full bg-purple-100 self-start">{location.altitude ? location.altitude : "Inserisci altitudine"} mt</span>
                </div>
                <span>{location.address ? location.address : "Inserisci indirizzo"}, {location.number ? location.number : "Inserisci numero"}</span>
                <div className="flex items-center gap-1">
                    <span>{location.zip_code ? location.zip_code : "Inserisci cap"}</span>
                    <span>{location.city ? location.city : "Inserisci città"}</span>
                    <span>{location.province ? location.province : "Inserisci provincia"}</span>
                </div>
                <div className="flex items-center gap-1">
                    <span>{location.region ? location.region : "Inserisci regione"},</span>
                    <span>{location.country ? location.country : "Inserisci nazione"}</span>
                </div>
                <div className="flex items-center py-1 px-2 rounded-full bg-sky-200 self-start gap-1">
                    <img className="w-4 h-4" src={IconGeolocation} alt="" />
                    <span className="underline text-xs font-semibold">Geolocation</span>
                </div>
            </div>
        }            
        </>
    )
}

export default GeoPosition;