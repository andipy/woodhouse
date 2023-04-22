let place = {
    id: "",
    created_at: "timestamp",
    posted_by: "user_id",
    updated_at: "timestamp",
    is_visible: true,
    name: "name created by us",
    description: "place description lorem ipsum lorem ipsum",
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
        type: "Rudere",
        use: "Residential",
        floor_number: 3,
        building_year: 1971,
        landscape_boundaries: true,
        historic_boundaries: true,
        measures: {
            site_size: 3200,
            building_size: 100,
            building_index: 1.1,
        },
        utilities: [
            {
                electricity: true,
                notes: ""
            },{
                water: true,
                notes: ""
            },{
                drain: true,
                notes: ""
            },{
                gas: true,
                notes: ""
            },{
                internet: true,
                notes: ""
            }
        ],
        building_materials: ["rock", "wood"],
        conditions: "La struttura muraria principale è recuperabile. Il tetto è completamente da rifare, così come le pavimentazioni",
        plans: [
            {
                id: "",
                created_at: "timestamp",
                updated_at: "timestamp",
                author_id: "",
                author_avatar: "url",
                author_username: "username",
                media_type: "image",
                media: "url"
            },{
                id: "",
                created_at: "timestamp",
                updated_at: "timestamp",
                author_id: "",
                author_avatar: "url",
                author_username: "username",
                media_type: "image",
                media: "url"
            },
        ],
    },
    sale_info: {
        is_for_sale: true,
        selling_price: 36000,
        adv_url: "url",
        reason_of_sale: "description etered by us manually"
    },
    contacts: {
        owner: {
            name: "owner name",
            last_name: "owner last name",
            phone: "34627812192",
            email: "owner@gmail.com"
        },
        agency: {
            agency: "Agenzia piloni srl",
            name: "agency name",
            last_name: "agency last name",
            phone: "34627812192",
            email: "agency@gmail.com"
        }
    },
    turist_hype_rating: {
        rating: 5.4,
        description: "description input by the user"
    },
    accessibily: {
        summer: "Super easy",
        winter: "Quite difficult in case it snows"
    },
    medias: [
        {
            id: "",
            created_at: "timestamp",
            updated_at: "timestamp",
            author_id: "",
            author_avatar: "url",
            author_username: "username",
            media_type: "image",
            media: "url"
        },{
            id: "",
            created_at: "timestamp",
            updated_at: "timestamp",
            author_id: "",
            author_avatar: "url",
            author_username: "username",
            media_type: "video",
            media: "url"
        }
    ],
    vegetation: {
        types: ["value coming from dropdown/input", "type_2_id"],
        description: "Vegetazione tipica alpina, prevalenza di abeti con qualche faggio qua e là; massi a terra molto suggestivi e muschio, felci",
        medias: [
            {
                id: "",
                created_at: "timestamp",
                updated_at: "timestamp",
                author_id: "",
                author_avatar: "url",
                author_username: "username",
                media_type: "image",
                media: "url"
            },{
                id: "",
                created_at: "timestamp",
                updated_at: "timestamp",
                author_id: "",
                author_avatar: "url",
                author_username: "username",
                media_type: "image",
                media: "url"
            }
        ]
    },
    posts: [
        {
            id: "",
            created_at: "timestamp",
            updated_at: "timestamp",
            author_id: "",
            author_avatar: "url",
            author_username: "username",
            medias: [
                {
                    id: "",
                    created_at: "timestamp",
                    updated_at: "timestamp",
                    author_id: "",
                    author_avatar: "url",
                    author_username: "username",
                    media_type: "image",
                    media: "url"
                },{
                    id: "",
                    created_at: "timestamp",
                    updated_at: "timestamp",
                    author_id: "",
                    author_avatar: "url",
                    author_username: "username",
                    media_type: "image",
                    media: "url"
                }
            ],
            content: "text written by the author of the post",
            liked_by: [
                "user_id",
                "user_id",
                "user_id"
            ],
            saved_by: [
                "user_id",
                "user_id",
                "user_id"
            ],
            comments: [
                {
                    id: "",
                    created_at: "timestamp",
                    updated_at: "timestamp",
                    author_id: "",
                    author_avatar: "url",
                    author_username: "username",
                    content: "comment left by the commenter",
                    liked_by: [
                        "user_id",
                        "user_id",
                        "user_id"
                    ],
                },{
                    id: "",
                    created_at: "timestamp",
                    updated_at: "timestamp",
                    author_id: "",
                    author_avatar: "url",
                    author_username: "username",
                    content: "comment left by the commenter",
                    liked_by: [
                        "user_id",
                        "user_id",
                        "user_id"
                    ],
                },
            ],
                        
        }
    ]
}