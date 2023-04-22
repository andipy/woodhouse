import React from "react";

import Topbar from "../../navigation/topbar/topbar";
import Container from "../../template/container/container";
import { allPlaces } from "../../../data/mock-data";

const EditWhere = () => {
    return (
        <>
            <Topbar topbarStyleExtention={"bg-white"} place={allPlaces[0]} />
            <Container containerStyleExtention={"pb-4 bg-white pt-[90px]"}>
                <form className="flex flex-col gap-4">
                    <section className="flex flex-col gap-1">
                        <h4 className="text-md md:text-2l text-black font-semibold">Where</h4>
                        <div className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400">
                            <select name="" id="" className="w-full">
                                <option value="mountain">Mountain</option>
                                <option value="countryside">Countryside</option>
                                <option value="sea">Sea</option>
                                <option value="lake">Lake</option>
                                <option value="hills">Hills</option>
                            </select>
                        </div>
                    </section>

                    <section className="flex flex-col gap-1">
                        <h4 className="text-md md:text-2l text-black font-semibold">Altitude</h4>
                        <input type="text" placeholder="Altitude" className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" />
                    </section>            

                    <section className="flex flex-col gap-1">
                        <h4 className="text-md md:text-2l text-black font-semibold">Address</h4>
                        <input type="text" placeholder="Street" className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" />
                        <input type="text" placeholder="Number" className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" />
                        <input type="text" placeholder="Zip code" className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" />
                        <input type="text" placeholder="City" className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" />
                        <input type="text" placeholder="Province" className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" />
                        <input type="text" placeholder="Country" className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" />
                        <input type="text" placeholder="Region" className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" />
                    </section>

                    <section className="flex flex-col gap-1">
                        <h4 className="text-md md:text-2l text-black font-semibold">Geolocalization</h4>
                        <input type="text" placeholder="Latitude" className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" />
                        <input type="text" placeholder="Logitude" className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400" />
                    </section>

                    <button className="py-3 px-4 bg-purple-600 text-white rounded-md text-sm">Save</button>
                </form>
            </Container>
        </>
    )
}

export default EditWhere;