import React from "react";

const Vegetation = ({ place }) => {

    const { vegetation } = place;

    return (
        <section>
            <h3 className="text-xl font-bold">Vegetazione</h3>
            <div className="flex items-center gap-1">
                {vegetation.types.map((type, index) => {
                    return (
                        <span key={index} className="py-1 px-2 rounded-full bg-purple-100 self-start">{type}</span>
                    )
                })}
            </div>

            <p>{vegetation.description ? vegetation.description : "Descrivi la vegetaione del luogo"}</p>

            {vegetation.media.length === 0 &&
                <div>
                    <p>non ci sono immagini, caricale</p>
                    <button>+ Carica immagine</button>
                </div>
            }

            {vegetation.media.length === 1 &&
                <div className="mt-2">
                    {vegetation.media?.map((elem, index) => {
                        if ( elem.mediaType === "image" ) {
                            return <img key={index} className="object-cover w-full" src={elem.media_url} alt="" />
                        }
                        if ( elem.mediaType === "video" ) {
                            return <video key={index} className="object-cover w-full" src={elem.media_url} controls={true}></video>
                        }
                    })}                    
                </div>
            }
            {vegetation.media.length > 1 &&
                <div className="flex overflow-x-scroll gap-2 overflow-y-hidden w-[112.5%] ml-[-8%] px-[8%] mt-2 md:overflow-x-visible md:overflow-y-visible md:flex-wrap md:w-[100%] md:ml-[0%] md:px-[0%]">
                    {vegetation.media?.map((elem, index) => {
                        if ( elem.mediaType === "image" ) {
                            return <img key={index} className="object-cover h-64" src={elem.mediaURL} alt="" />
                        }
                        if ( elem.mediaType === "video" ) {
                            return <video key={index} className="object-cover h-64" src={elem.mediaURL} controls={true}></video>
                        }
                    })}
                </div>
            }
        </section>
    )
}

export default Vegetation;