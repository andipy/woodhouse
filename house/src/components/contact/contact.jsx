import React from "react";

const Contacts = ({ contact }) => {

    const { reference, firstName, lastName, phone, email } = contact;

    return (
        <div className="flex flex-col">
            <h5 className="text-md font-semibold">{reference ? reference : "Inserisci un riferimento"}</h5>
            <p className="py-1 px-2 rounded-full bg-purple-100 self-start">{firstName ? firstName : "Inserisci il nome"} {lastName ? lastName : "Inserisci il cognome"}</p>
            <a href={`tel:${phone}`}>{phone ? phone : "Inserisci il cellulare"}</a>
            <a href={`mailto:${email}`}>{email ? email: "Inserisci l'email"}</a>
        </div>
    )
}

export default Contacts;