import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../../utilities/firebase/firebase.js";
import { doc, updateDoc } from "firebase/firestore";

import Input from "../input/input.jsx";

const descriptionFormFields = {
    name: "",
    description: "",
    rating: ""
}

const EditDescriptionForm = ({ placeID }) => {

    const navigate = useNavigate();

    const [descriptionFields, setDescriptionFields] = useState(descriptionFormFields);
    const handleInputChange = (e) => {
        setDescriptionFields({...descriptionFields, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const updateDescription = async () => {
                const docRef = doc(db, 'places', placeID);
                const unsub = await updateDoc(docRef, {
                    name: descriptionFields.name,
                    description: descriptionFields.description,
                    rating: descriptionFields.rating
                })
                return navigate("/places");
            }
            updateDescription();
        } catch(error) {
            console.log(error.message, "messaggio errore")
        }
    }

    return (        
        <form
            className="flex flex-col gap-4"
            onSubmit={handleFormSubmit}
        >
            <section className="flex flex-col gap-1">
                <h4 className="text-md md:text-2l text-black font-semibold">Name this place</h4>
                <Input
                    // label="Nome del posto"
                    placeholder="Dai un nome a questo posto"
                    type="text"
                    name="name"
                    required={true}
                    onChange={handleInputChange}
                />
            </section>

            <section className="flex flex-col gap-1">
                    <h4 className="text-md md:text-2l text-black font-semibold">Description</h4>
                    <textarea
                        type="text"
                        rows="6"
                        placeholder="Describe this place"
                        className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" name="description"
                        required
                        onChange={handleInputChange}
                    ></textarea>
            </section>

            <section className="flex flex-col gap-1">
                <h4 className="text-md md:text-2l text-black font-semibold">Rating</h4>
                <Input
                    // label="Rating"
                    placeholder="Dai un rating generale a questo posto"
                    type="number"
                    min={1}
                    max={10}
                    name="rating"
                    required={true}
                    onChange={handleInputChange}
                />
            </section>            
            <button className="btn-primary-enabled">Update info</button>
        </form>
    )
}

export default EditDescriptionForm;