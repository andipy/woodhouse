import React, { useState, useEffect } from "react";

import IconContacts from "../../assets/icons/icon-contacts.svg"

const Contacts = ({ contact }) => {

    const { reference, firstName, lastName, phone, email } = contact;

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        if ( reference && firstName && lastName && phone && email ) {
            setIsEmptyState(false)
        } else {
            setIsEmptyState(true)
        }
    }, [])

    return (
        <>
        {isEmptyState &&
            <div className="flex flex-col items-center justify-center gap-1 flex-wrap border border-dashed rounded-lg border-gray-400 min-h-40 py-4 hover:shadow-xl hover:border-gray-300">
                <img className="w-10" src={IconContacts} alt="" />
                <p className="w-2/3 text-center">Aggiungi le informazioni del proprietario o dell'agenzia</p>
            </div>
        }
        {!isEmptyState &&
            <div className="flex flex-col">
                <h5 className="text-md font-semibold">{reference ? reference : "Inserisci un riferimento"}</h5>
                <p className="py-1 px-2 rounded-full bg-purple-100 self-start">{firstName ? firstName : "Inserisci il nome"} {lastName ? lastName : "Inserisci il cognome"}</p>
                <a href={`tel:${phone}`}>{phone ? phone : "Inserisci il cellulare"}</a>
                <a href={`mailto:${email}`}>{email ? email: "Inserisci l'email"}</a>
            </div>
        }
        </>
    )
}

export default Contacts;