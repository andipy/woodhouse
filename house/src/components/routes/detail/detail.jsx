import React from "react";

import Topbar from "../../navigation/topbar/topbar";
import Container from "../../template/container/container";
import Header from "../../header/header";
import Posts from "../../posts/posts";
import Vegetation from "../../vegetation/vegetation";
import PostedBy from "../../posted-by/posted-by";

import User1 from "../../../assets/avatars/louis.jpg";
import IconGeolocation from "../../../assets/icons/icon-geolocation.svg";
import IconPlans from "../../../assets/icons/icon-plans.svg";

import { allPlaces } from "../../../data/mock-data";

const Detail = () => {
    return (
        <>
            <Topbar place={allPlaces[0]} />
            <Header place={allPlaces[0]} />
            
            <Container containerStyleExtention={"pb-4"}>
                <PostedBy place={allPlaces[0]} />

        <section className="flex flex-col md:flex-row my-2 gap-4">
            <div id="location" className="flex flex-col gap-1 md:w-1/2">
                <h3 className="text-xl font-bold">Dove</h3>
                <div className="flex items-center gap-1 flex-wrap">
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Mountain</span>
                <span className="py-1 px-2 rounded-full bg-purple-100 self-start">1872 mt</span>
                </div>
                <span>Via Bella, 67</span>
                <div className="flex items-center gap-1">
                    <span>21091</span>
                    <span>Brusson</span>
                    <span>(AO)</span>
                </div>
                <div className="flex items-center gap-1">
                    <span>Valle D'Aosta,</span>
                    <span>Italia</span>
                </div>
                <div className="flex items-center py-1 px-2 rounded-full bg-sky-200 self-start gap-1">
                    <img className="w-4 h-4" src={IconGeolocation} alt="" />
                    <span className="underline text-xs font-semibold">Geolocation</span>
                </div>
            </div>

            <div id="description" className="flex flex-col gap-2 md:w-1/2">
                <p className="text-md">Descrizione casa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, fugiat.</p>
                <div className="flex items-center gap-2 font-semibold">
                    <h4>Rating</h4>
                    <span>6/7</span>
                </div>
            </div>            
        </section>

        <section className="flex flex-col md:flex-row my-10 gap-4">
            <article id="building-info" className="flex flex-col gap-2 w-full md:w-1/2">
                <h3 className="text-xl font-bold">Building info</h3>
                <div className="flex items-center gap-1 flex-wrap">
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Rudere</span>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Residenziale</span>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">3 piani</span>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Anno 1920</span>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Vincoli paesaggistici</span>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Vincoli soprintendenza</span>
                </div>
                <div className="mt-2">
                    <h3 className="text-md font-semibold">Dimensioni</h3>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Terreno 3200mq</span>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Edificio 90mq</span>
                </div>
                <div className="mt-2">
                    <h3 className="text-md font-semibold">Allacci e servizi</h3>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Elettricità</span>
                    <span className="py-1 px-2 rounded-full bg-gray-100 text-gray-400 self-start">Acqua</span>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Fogna</span>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Gas</span>
                    <span className="py-1 px-2 rounded-full bg-gray-100 text-gray-400 self-start">Internet</span>
                </div>
                <div className="mt-2">
                    <h3 className="text-md font-semibold">Materiali</h3>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Pietra</span>
                    <span className="py-1 px-2 rounded-full bg-purple-100 self-start">Legno</span>
                </div>
                <div className="mt-2">
                    <h3 className="text-md font-semibold">Condizioni</h3>
                    <p>La struttura muraria principale è recuperabile. Il tetto è completamente da rifare, così come le pavimentazioni</p>
                </div>
                <div className="mt-2 flex items-center py-1 px-2 rounded-full bg-sky-200 self-start gap-1">
                    <img className="w-4 h-4" src={IconPlans} alt="" />
                    <span className="underline text-xs font-semibold">Disegni tecnici</span>
                </div>
            </article>

            <div className="flex flex-col gap-2 w-full md:w-1/2">
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
            </div>
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

                <hr className="mt-10" />
                
                <Posts />                
            </Container>
        </>
    )
}

export default Detail;