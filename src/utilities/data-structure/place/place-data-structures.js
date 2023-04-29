import { Timestamp } from "firebase/firestore";

export const placeDataStructure = {
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    authorUID: "",
    authorDisplayName: "",
    authorPhotoURL: "",
    isVisible: true,
    name: "",
    description: "",
    rating: null,    
    location: {
        generalContext: "",
        altitude: null,
        address: "",
        number: null,
        zipCode: null,
        city: "",
        province: "",
        country: "",
        region: "",        
        geoLocation: {
            latitude: null,
            longitude: null
        }
    },
    siteInfo: {
        overview: [
            {
                name: "Tipologia",
                value: ""
            },{
                name: "Destinazione d'uso",
                value: ""
            },{
                name: "Piani",
                value: null
            },{
                name: "Anno di costruzione",
                value: null
            },{
                name: "Vincoli paesaggistici",
                value: null
            },{
                name: "Vincoli storici",
                value: null
            }
        ],
        measures: [
            {
                name: "Site size",
                size: null
            },{
                name: "Building size",
                size: null
            },{
                name: "Building index",
                size: null
            }
        ],
        utilities: [
            {
                name: "Electricity",
                isWired: null,
                notes: ""
            },{
                name: "Water",
                isWired: null,
                notes: ""
            },{
                name: "Drain",
                isWired: null,
                notes: ""
            },{
                name: "Gas",
                isWired: null,
                notes: ""
            },{
                name: "Internet",
                isWired: null,
                notes: ""
            }
        ],
        buildingMaterials: [],
        conditions: "",
        plans: [],
    },
    saleInfo: {
        overview: [
            {
                name: "Vendita",
                value: null
            },{
                name: "Prezzo",
                value: null
            }
        ],
        advURLs: [],
        reasonOfSale: "",
        contacts: [
            {
                reference: "Owner",
                firstName: "",
                lastName: "",
                phone: "",
                email: ""
            },{
                reference: "",
                firstName: "",
                lastName: "",
                phone: "",
                email: ""
            }
        ],
    },        
    touristAttractiveness: {
        rating: null,
        description: ""
    },
    accessibily:[
        {
            season: "Summer",
            description: ""
        },{
            season: "Winter",
            description: ""
        }
    ],
    media: [],
    vegetation: {
        types: [],
        description: "",
        media: []
    }
}

export const mediaDataStructure = {
    placeID: "",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    authorUID: "",
    authorPhotoURL: "",
    authorDisplayName: "",
    mediaType: "",
    mediaURL: ""
}