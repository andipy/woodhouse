import React from "react";

import { allPlaces } from "../../../data/mock-data";

import Topbar from "../../navigation/topbar/topbar";
import Container from "../../template/container/container";
import Header from "../../header/header";
import Posts from "../../posts/posts";
import Vegetation from "../../vegetation/vegetation";
import PostedBy from "../../posted-by/posted-by";
import GeoPosition from "../../geographic-position/geographic-position";
import Description from "../../description/description";
import Overview from "../../overview/overview";
import Measures from "../../measures/measures";
import PlaceUtilities from "../../place-utilities/place-utilities";
import Materials from "../../materials/materials";
import Conditions from "../../conditions/conditions";
import Plans from "../../plans/plans";

const Detail = () => {
    return (
        <>
            <Topbar place={allPlaces[0]} />
            <Header place={allPlaces[0]} />
            
            <Container containerStyleExtention={"pb-4"}>
                <PostedBy place={allPlaces[0]} />

                <section className="flex flex-col md:flex-row my-2 gap-4">
                    <GeoPosition place={allPlaces[0]} />
                    <Description place={allPlaces[0]} />           
                </section>
            
                <section className="flex flex-col md:flex-row my-2 gap-4">
                    <section className="flex flex-col gap-2 md:w-1/2">        
                        <h3 className="text-xl font-bold">Building info</h3>
                        <Overview place={allPlaces[0]} />
                        <Measures place={allPlaces[0]} />
                        <PlaceUtilities place={allPlaces[0]} />
                        <Materials place={allPlaces[0]} />
                        <Conditions place={allPlaces[0]} />
                        <Plans place={allPlaces[0]} />
                    </section>            

                    <section className="flex flex-col gap-2 md:w-1/2">
                        <article id="selling-info" className="flex flex-col gap-2 w-full">                
                            <h3 className="text-xl font-bold">Selling info</h3>
                            <div className="flex items-center gap-2">
                                <span className="py-1 px-2 rounded-full bg-purple-100 self-start">In vendita</span>
                                <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Euro 36'000</span>
                            </div>
                            <span>Il proprietario è un genovese che ha fatto un acquisto rivelatosi sbagliato e ha bisogno di sbarazzarsi della proprietà</span>
                            <span className="underline text-cyan-700">Link all'annuncio</span>                
                        </article>

                        <article id="contacts" className="flex flex-col gap-2 w-full">
                            <h3 className="text-xl font-bold">Contatti</h3>
                            <div id="contacts" className="flex flex-col md:flex-row gap-4 w-full">
                                <div className="flex flex-col">
                                    <h5 className="text-md font-semibold">Proprietario</h5>
                                    <p className="py-1 px-2 rounded-full bg-purple-100 self-start">Nome cognome</p>
                                    <a href="tel:+393472882753">+393472882753</a>
                                    <a href="mailto:owner@gmail.com">owner@gmail.com</a>
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="text-md font-semibold">Agenzia Pilini Srl</h5>
                                    <p className="py-1 px-2 rounded-full bg-purple-100 self-start">Nome cognome</p>
                                    <a href="tel:+393397081771">+393397081771</a>
                                    <a href="mailto:agency@gmail.com">agency@gmail.com</a>
                                </div>
                            </div>
                        </article>
                    </section>
                </section>

                <section className="my-10">
                    <h3 className="text-xl font-bold">Appetibilità turistica</h3>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col gap-1 mt-2 md:w-1/2">
                            <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Rating 7/7</span>
                            <p>Il posto è spettacolare, il panorame mozzafiato, la vegetazione appena attorno l'edificio è da fiaba, la vista incredibile. Inoltre a 5 minuti a piedi partono molti sentieri per passeggiate estive, e a 25 minuti in auto ci sono gli impianti di sci di Pila d'inverno</p>
                        </div>
                        <div className="flex flex-col gap-2 mt-2 md:w-1/2">
                            <div>
                                <h3 className="text-md font-semibold">Accessibilità inverno</h3>
                                <p>La strada per arrivare è asfaltata, ma la pendenza è importante, nei periodi di carico di neve le auto non attrezzate non riescono ad arrivare</p>
                            </div>
                            <div>
                                <h3 className="text-md font-semibold">Accessibilità estate</h3>
                                <p>Completamente accessibile in qualsiasi condizione</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Vegetation vegetation={allPlaces[0].vegetation} />
                
                <Posts />                
            </Container>
        </>
    )
}

export default Detail;