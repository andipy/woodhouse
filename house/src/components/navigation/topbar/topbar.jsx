import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Container from "../../template/container/container";

import IconBackArrow from "../../../assets/icons/icon-arrow-back-white.svg"

const Topbar = ({ topbarStyleExtention, place }) => {

    const { name } = place;

    const navigate = useNavigate();
    const location = useLocation();

    const [isHome, setIsHome] = useState(true);
    useEffect(() => {
        if ( location.pathname === "/" ) {
            setIsHome(true)
        } else {
            setIsHome(false)
        }
    }, [])

    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        if ( location.pathname.includes("/edit") ) {
            setIsEdit(true)
        } else {
            setIsEdit(false)
        }
    }, [])

    return (
        <nav className={`py-2 fixed w-full z-10 ${topbarStyleExtention}`}>
            <Container containerStyleExtention={`flex ${isHome ? "justify-end items-center" : "justify-between"} ${isEdit ? "flex-col gap-1" : ""}`}>
                {!isHome &&
                    <div className="w-8 h-8 flex items-center justify-center backdrop-blur-sm bg-black/60 rounded-full" onClick={() => navigate(-1)}>
                        <img className="w-6 h-6" src={IconBackArrow} alt="" />
                    </div>
                }
                {location.pathname.includes("places") && !location.pathname.includes("edit") &&
                    <button className="py-2 px-4 bg-purple-600 text-white rounded-md text-sm">
                        + Add media
                    </button>
                }
                {isHome &&
                    <button className="py-2 px-4 bg-purple-600 text-white rounded-md text-sm">
                        + Add new place
                    </button>
                }
                {isEdit &&
                    <h1 className="text-lg md:text-2xl text-black font-bold">{name}</h1>
                }
            </Container>
        </nav>
    )
}

export default Topbar;