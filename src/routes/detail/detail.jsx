import React from "react";
import { useLocation } from "react-router-dom";

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

    const location = useLocation();
    const { state } = location;

    return (
        <>
            <Topbar place={state} />
            <Header place={state} />
            
            <Container containerStyleExtention={"pb-4"}>
                <PostedBy place={state} />

                <section className="flex flex-col md:flex-row my-2 gap-4">
                    <GeoPosition place={state} />
                    <Description place={state} />           
                </section>
            
                <section className="flex flex-col md:flex-row my-2 gap-4">
                    <section className="flex flex-col gap-2 md:w-1/2">        
                        <h3 className="text-xl font-bold">Building info</h3>
                        <Overview place={state} />
                        <Measures place={state} />
                        <PlaceUtilities place={state} />
                        <Materials place={state} />
                        <Conditions place={state} />
                        <Plans place={state} />
                    </section>            

                    <section className="flex flex-col gap-2 md:w-1/2">
                        <h3 className="text-xl font-bold">Selling info</h3>
                        <SellingChips place={state} />
                        <ReasonOfSale place={state} />

                        <section id="contacts" className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Contatti</h3>
                            <div id="contacts" className="flex flex-col md:flex-row gap-4 w-full">
                                {state.saleInfo.contacts.map((contact, index) => {
                                    return (
                                        <Contact key={index} contact={contact} />
                                    )
                                })}
                            </div>
                        </section>
                    </section>
                </section>

                <section className="my-10">
                    <h3 className="text-xl font-bold">Appetibilità turistica</h3>
                    <section className="flex flex-col md:flex-row gap-4">
                        <TouristicAttractiveness place={state} />
                        <div className="flex flex-col gap-2 mt-2 md:w-1/2">
                            {state.accessibily.map((access, index) => {
                                return (
                                    <Accessibility key={index} access={access} />
                                )
                            })}
                        </div>
                    </section>
                </section>

                <Vegetation place={state} />
                
                {/* <Posts />                 */}
            </Container>
        </>
    )
}

export default Detail;