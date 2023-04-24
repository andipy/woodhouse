import User1 from "../assets/avatars/louis.jpg"
import User2 from "../assets/avatars/dani.jpg"

import Image1 from "../assets/images/post_01_01.jpg"
import Image2 from "../assets/images/post_01_02.jpg"
import Image3 from "../assets/images/post_01_03.jpg"
import Image4 from "../assets/images/veg_1.jpg"
import Image5 from "../assets/images/post_03_01.jpg"
import Video1 from "../assets/videos/post_04_01.mp4"

import Veg1 from "../assets/images/veg_1.jpg"
import Veg2 from "../assets/images/veg_2.jpg"
import Veg3 from "../assets/images/veg_3.jpg"
import Veg4 from "../assets/images/veg_4.jpg"


export const allPosts = [
    {
        id: "1",
        place_id: "1",
        created_at: "2023-04-22",
        updated_at: "2023-04-22",
        author_id: "1",
        author_avatar: User1,
        author_username: "Louis",
        media: [
            {
                id: "1",
                created_at: "2023-04-22",
                updated_at: "2023-04-22",
                author_id: "1",
                author_avatar: User1,
                author_username: "Louis",
                media_type: "image",
                media_url: Image1
            },{
                id: "2",
                created_at: "2023-04-22",
                updated_at: "2023-04-22",
                author_id: "1",
                author_avatar: User1,
                author_username: "Louis",
                media_type: "image",
                media_url: Image2
            },{
                id: "3",
                created_at: "2023-04-22",
                updated_at: "2023-04-22",
                author_id: "1",
                author_avatar: User1,
                author_username: "Louis",
                media_type: "image",
                media_url: Image3
            }
        ],
        content: "Post di tipo carousel con varie foto della vista dal balcone; spettacolare, già si gusta la ricchezza del luogo, vino, musica e danze matte",
        liked_by: [
            "2",
            "3",
            "4"
        ],
        saved_by: [
            "2",
            "3",
            "4"
        ],
        comments: []                    
    },{
        id: "2",
        place_id: "1",
        created_at: "2023-04-22",
        updated_at: "2023-04-22",
        author_id: "1",
        author_avatar: User1,
        author_username: "Louis",
        media: [
            {
                id: "1",
                created_at: "2023-04-22",
                updated_at: "2023-04-22",
                author_id: "1",
                author_avatar: User1,
                author_username: "Louis",
                media_type: "image",
                media_url: Image4
            }
        ],
        content: "Percorso di accesso durante l'estate, assolutametne spettacolare, sembra di stare in una fiaba!",
        liked_by: [
            "2",
            "3",
            "4"
        ],
        saved_by: [
            "2",
            "3",
            "4"
        ],
        comments: []                    
    },{
        id: "3",
        place_id: "1",
        created_at: "2023-04-22",
        updated_at: "2023-04-22",
        author_id: "1",
        author_avatar: User1,
        author_username: "Louis",
        media: [
            {
                id: "1",
                created_at: "2023-04-22",
                updated_at: "2023-04-22",
                author_id: "1",
                author_avatar: User1,
                author_username: "Louis",
                media_type: "image",
                media_url: Image5
            }
        ],
        content: "Percorso di accesso durante l'inverno, completamente innevato, solo per i più coraggiosi ed avventurieri",
        liked_by: [
            "2",
            "3",
            "4"
        ],
        saved_by: [
            "2",
            "3",
            "4"
        ],
        comments: [
            {
                id: "1",
                created_at: "2023-04-26",
                updated_at: "2023-04-26",
                author_id: "2",
                author_avatar: User2,
                author_username: "Dani",
                content: "Difficile per moti arrivare d'inverno, soprattutto in ottica di piazzamento su airbnb, però veramente spettacolare per chi può permetterselo mentalmente e fisicamente",
                liked_by: [
                    "1",
                    "3",
                    "4"
                ],
            }
        ]                    
    },{
        id: "4",
        place_id: "1",
        created_at: "2023-04-22",
        updated_at: "2023-04-22",
        author_id: "1",
        author_avatar: User1,
        author_username: "Louis",
        media: [
            {
                id: "1",
                created_at: "2023-04-22",
                updated_at: "2023-04-22",
                author_id: "1",
                author_avatar: User1,
                author_username: "Louis",
                media_type: "video",
                media_url: Video1
            },{
                id: "3",
                created_at: "2023-04-22",
                updated_at: "2023-04-22",
                author_id: "1",
                author_avatar: User1,
                author_username: "Louis",
                media_type: "image",
                media_url: Image3
            }
        ],
        content: "Percorso di accesso durante l'inverno, completamente innevato, solo per i più coraggiosi ed avventurieri",
        liked_by: [
            "2",
            "3",
            "4"
        ],
        saved_by: [
            "2",
            "3",
            "4"
        ],
        comments: []
    }
]



export const allPlaces = [
    {
        id: "1",
        created_at: "2023-04-12",
        updated_at: "2023-04-12",
        posted_by: "1",        
        is_visible: true,
        name: "Casa magica fatata",
        description: "Descrizione casa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, fugiat.",
        rating: 6.7,    
        location: {
            general_context: "Mountain",
            altitude: 1870,
            address: "Via Bella",
            number: 67,
            zip_code: 21901,
            city: "Brusson",
            province: "AO",
            country: "Italy",
            region: "Valle d'Aosta",        
            geolocation: {
                latitude: 57372.91,
                longitude: 128271.10
            }
        },
        site_info: {
            overview: [
                {
                    name: "Tipologia",
                    value: "Rudere"
                },{
                    name: "Destinazione d'uso",
                    value: "Residenziale"
                },{
                    name: "Piani",
                    value: 3
                },{
                    name: "Anno di costruzione",
                    value: 1971
                },{
                    name: "Vincoli paesaggistici",
                    value: true
                },{
                    name: "Vincoli storici",
                    value: false
                }
            ],
            measures: [
                {
                    name: "Site size",
                    size: 3200
                },{
                    name: "Building size",
                    size: 98
                },{
                    name: "Building index",
                    size: 1.1
                }
            ],
            utilities: [
                {
                    name: "Electricity",
                    is_present: false,
                    notes: ""
                },{
                    name: "Water",
                    is_present: true,
                    notes: ""
                },{
                    name: "Drain",
                    is_present: false,
                    notes: ""
                },{
                    name: "Gas",
                    is_present: true,
                    notes: ""
                },{
                    name: "Internet",
                    is_present: true,
                    notes: ""
                }
            ],
            building_materials: ["Rock", "Wood"],
            conditions: "La struttura muraria principale è recuperabile. Il tetto è completamente da rifare, così come le pavimentazioni",
            plans: [
                {
                    id: "1",
                    created_at: "2023-04-16",
                    updated_at: "2023-04-16",
                    author_id: "1",
                    author_avatar: User1,
                    author_username: "Louis",
                    media_type: "image",
                    media_url: "url"
                },{
                    id: "2",
                    created_at: "2023-04-16",
                    updated_at: "2023-04-16",
                    author_id: "1",
                    author_avatar: User1,
                    author_username: "Louis",
                    media_type: "image",
                    media_url: "url"
                },
            ],
        },
        sale_info: {
            is_for_sale: true,
            selling_price: 36000,
            adv_url: "url",
            reason_of_sale: "Il proprietario è un genovese che ha fatto un acquisto rivelatosi sbagliato e ha bisogno di sbarazzarsi della proprietà"
        },
        contacts: {
            owner: {
                name: "Ciccio",
                last_name: "Frivolo",
                phone: "34627812192",
                email: "owner@gmail.com"
            },
            agency: {
                agency: "Agenzia piloni srl",
                name: "Magro",
                last_name: "Perfinta",
                phone: "34627812192",
                email: "agency@gmail.com"
            }
        },
        turist_hype_rating: {
            rating: 7,
            description: "Il posto è spettacolare, il panorame mozzafiato, la vegetazione appena attorno l'edificio è da fiaba, la vista incredibile. Inoltre a 5 minuti a piedi partono molti sentieri per passeggiate estive, e a 25 minuti in auto ci sono gli impianti di sci di Pila d'inverno"
        },
        accessibily: {
            summer: "Completamente accessibile in qualsiasi condizione",
            winter: "La strada per arrivare è asfaltata, ma la pendenza è importante, nei periodi di carico di neve le auto non attrezzate non riescono ad arrivare"
        },
        media: [
            {
                id: "1",
                created_at: "2023-04-12",
                updated_at: "2023-04-12",
                author_id: "1",
                author_avatar: User1,
                author_username: "Louis",
                media_type: "image",
                media_url: "url"
            },{
                id: "2",
                created_at: "2023-04-12",
                updated_at: "2023-04-12",
                author_id: "1",
                author_avatar: User1,
                author_username: "Louis",
                media_type: "video",
                media_url: "url"
            }
        ],
        vegetation: {
            types: ["Larici", "Abeti", "Faggi"],
            description: "Vegetazione tipica alpina, prevalenza di abeti con qualche faggio qua e là; massi a terra molto suggestivi e muschio, felci",
            media: [
                {
                    id: "1",
                    created_at: "2023-04-13",
                    updated_at: "2023-04-13",
                    author_id: "1",
                    author_avatar: User1,
                    author_username: "Louis",
                    media_type: "image",
                    media_url: Veg1
                },{
                    id: "2",
                    created_at: "2023-04-13",
                    updated_at: "2023-04-13",
                    author_id: "1",
                    author_avatar: User1,
                    author_username: "Louis",
                    media_type: "image",
                    media_url: Veg2
                },{
                    id: "3",
                    created_at: "2023-04-13",
                    updated_at: "2023-04-13",
                    author_id: "1",
                    author_avatar: User1,
                    author_username: "Louis",
                    media_type: "image",
                    media_url: Veg3
                },{
                    id: "4",
                    created_at: "2023-04-13",
                    updated_at: "2023-04-13",
                    author_id: "1",
                    author_avatar: User1,
                    author_username: "Louis",
                    media_type: "image",
                    media_url: Veg4
                }
            ]
        }
    }
]