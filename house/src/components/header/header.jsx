import React from "react";

import Container from "../template/container/container";

import House from "../../assets/images/house_01_01.jpg"

const Header = ({ place }) => {

    const { name } = place;
    
    return (
        <header className="w-full relative flex items-center justify-center">
            <img className="w-full h-[40vh] md:h-[50vh] object-cover" src={House} />
            <div className="absolute bottom-0 w-full py-1 backdrop-blur-sm bg-black/30">
                <Container containerStyleExtention={"flex items-center"}>              
                    <h1 className="text-lg md:text-2xl text-white font-semibold">{name ? name : "Dai un nome al posto"}</h1>
                </Container>
            </div>
        </header>
    )
}

export default Header;