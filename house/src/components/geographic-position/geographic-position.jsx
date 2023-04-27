import React from "react";

import IconGeolocation from "../../assets/icons/icon-geolocation.svg";

const GeoPosition = ({ place }) => {

    const { location } = place;

    return (
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
    )
}

export default GeoPosition;