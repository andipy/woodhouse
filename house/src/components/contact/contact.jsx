import React from "react";

const Contacts = ({ contact }) => {

    const { reference, first_name, last_name, phone, email } = contact;

    return (
        <div className="flex flex-col">
            <h5 className="text-md font-semibold">{reference}</h5>
            <p className="py-1 px-2 rounded-full bg-purple-100 self-start">{first_name} {last_name}</p>
            <a href={`tel:${phone}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
        </div>
    )
}

export default Contacts;