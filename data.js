let place = {
    id: "",
    created_at: "timestamp",
    updated_at: "timestamp",
    is_visible: true,
    name: "name created by us",
    description: "place description lorem ipsum lorem ipsum",
    rating: 6.7,
    posted_by: "user_id",
    location: {
        general_context: "Mountain",
        country: "Italy",
        region: "Valle d'Aosta",
        province: "AO",
        city: "Brusson",
        altitude: 1870,
        geolocation: {
            latitude: 57372.91,
            longitude: 128271.10
        }
    },
    site_info: {
        type: "Building ground",
        condition: "to demolish and redo",
        building_year: 1971,
        floor_numer: 3,
        building_materials: ["rock", "wood"],
        use: "Residential",
        landscape_boundaries: true,
        historic_boundaries: true
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
            name: "agency name",
            last_name: "agency last name",
            phone: "34627812192",
            email: "agency@gmail.com"
        }
    },
    turist_hype_rating: {
        rating: 5.4,
        reason: "description input by the user"
    },
    accessibily: {
        summer: "Super easy",
        winter: "Quite difficult in case it snows"
    },
    measures: {
        site_size: 3200,
        building_size: 100,
        building_index: 1.1,
    },
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
        type: "value coming from dropdown/input",
        comments: [
            {
                id: "",
                created_at: "timestamp",
                updated_at: "timestamp",
                author_id: "",
                author_avatar: "url",
                author_username: "username",
                likes: [
                    "user_id",
                    "user_id",
                    "user_id"
                ]
            }
        ],
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
            content: "text written by the author of the post",
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
            comments: [
                {
                    id: "",
                    created_at: "timestamp",
                    updated_at: "timestamp",
                    author_id: "",
                    author_avatar: "url",
                    author_username: "username",
                    content: "comment left by the commenter"
                },{
                    id: "",
                    created_at: "timestamp",
                    updated_at: "timestamp",
                    author_id: "",
                    author_avatar: "url",
                    author_username: "username",
                    content: "comment left by the commenter"
                },
            ],
            likes: [
                "user_id",
                "user_id",
                "user_id"
            ]            
        }
    ]
}