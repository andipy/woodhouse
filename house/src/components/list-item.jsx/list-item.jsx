import React from "react";
import { Link } from "react-router-dom";

import House from "../../assets/images/house_01_01.jpg"

const ListItem = () => {
    return (
        <Link to="/places/id">
            <div className="flex flex-col md:flex-row gap-4 py-4 px-4 rounded-md border border-solid border-gray-300 hover:shadow-xl hover:border-none">
                <img className="w-100 md:w-44 h-44 object-cover shrink-0 rounded-md" src={House} alt="" />
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center">
                        <h3 className="text-xl font-semibold">Nome casa</h3>
                        <span className="font-semibold">Rating: 4/5</span>
                    </div>
                    <p className="text-sm">Descrizione casa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, fugiat.</p>
                    <div className="flex gap-1 items-center">
                        <span>Dove:</span>
                        <span className="px-2 rounded-full bg-gray-200 self-start">Valle d'Aosta</span>
                        <span className="px-2 rounded-full bg-gray-200 self-start">Brusson</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-1 items-center">
                            <span>Tipologia:</span>
                            <span className="py-1 px-2 rounded-full bg-gray-200 self-start">Rudere</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <span>Prezzo:</span>
                            <span className="py-1 px-2 rounded-full bg-gray-200 self-start">90'000 euro</span>
                        </div>
                    </div>                
                </div>            
            </div>
        </Link>
    )
}

export default ListItem;