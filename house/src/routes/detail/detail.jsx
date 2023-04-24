import React from "react";

import { allPlaces } from "../../data/mock-data";

import Topbar from "../../components/navigation/topbar/topbar.jsx";
import Container from "../../components/template/container/container.jsx";
import Header from "../../components/header/header.jsx";
import Posts from "../../components/posts/posts.jsx";
import Vegetation from "../../components/vegetation/vegetation.jsx";
import PostedBy from "../../components/posted-by/posted-by.jsx";
import GeoPosition from "../../components/geographic-position/geographic-position.jsx";
import Description from "../../components/description/description.jsx";
import Overview from "../../components/overview/overview.jsx";
import Measures from "../../components/measures/measures.jsx";
import PlaceUtilities from "../../components/place-utilities/place-utilities.jsx";
import Materials from "../../components/materials/materials.jsx";
import Conditions from "../../components/conditions/conditions.jsx";
import Plans from "../../components/plans/plans.jsx";
import SellingChips from "../../components/selling-chips/selling-chips.jsx";
import ReasonOfSale from "../../components/reason-of-sale/reason-of-sale.jsx";
import Contact from "../../components/contact/contact.jsx";
import TouristicAttractiveness from "../../components/touristic-attractiveness/touristic-attractiveness.jsx";
import Accessibility from "../../components/accessibility/accessibility.jsx";

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
                        <h3 className="text-xl font-bold">Selling info</h3>
                        <SellingChips place={allPlaces[0]} />
                        <ReasonOfSale place={allPlaces[0]} />

                        <section id="contacts" className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Contatti</h3>
                            <div id="contacts" className="flex flex-col md:flex-row gap-4 w-full">
                                {allPlaces[0].sale_info.contacts.map(contact => {
                                    return (
                                        <Contact contact={contact} />
                                    )
                                })}
                            </div>
                        </section>
                    </section>
                </section>

                <section className="my-10">
                    <h3 className="text-xl font-bold">Appetibilità turistica</h3>
                    <section className="flex flex-col md:flex-row gap-4">
                        <TouristicAttractiveness place={allPlaces[0]} />
                        <div className="flex flex-col gap-2 mt-2 md:w-1/2">
                            {allPlaces[0].accessibily.map(access => {
                                return (
                                    <Accessibility access={access} />
                                )
                            })}
                        </div>
                    </section>
                </section>

                <Vegetation vegetation={allPlaces[0].vegetation} />
                
                <Posts />                
            </Container>
        </>
    )
}

export default Detail;