<script>
import PillComp from '../components/PillComp.vue';
import PlatformCard from '../components/PlatformCard.vue';

export default{
    data(){
        return{
            data: [
                {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "released": "2010-07-21",
                    "tba": false,
                    "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
                    "rating": 4.15,
                    "rating_top": 4,
                    "ratings": [
                    {
                    "id": 4,
                    "title": "recommended",
                    "count": 1652,
                    "percent": 52.25
                    },
                    {
                    "id": 5,
                    "title": "exceptional",
                    "count": 1093,
                    "percent": 34.57
                    },
                    {
                    "id": 3,
                    "title": "meh",
                    "count": 314,
                    "percent": 9.93
                    },
                    {
                    "id": 1,
                    "title": "skip",
                    "count": 103,
                    "percent": 3.26
                    }
                    ],
                    "ratings_count": 3126,
                    "reviews_text_count": 24,
                    "added": 12761,
                    "added_by_status": {
                    "yet": 538,
                    "owned": 8117,
                    "beaten": 3045,
                    "toplay": 296,
                    "dropped": 674,
                    "playing": 91
                    },
                    "metacritic": 88,
                    "playtime": 3,
                    "suggestions_count": 187,
                    "updated": "2023-08-06T22:27:53",
                    "user_game": null,
                    "reviews_count": 3162,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [
                    {
                        "platform": {
                        "id": 6,
                        "name": "Linux",
                        "slug": "linux",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 75342,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                        "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> SteamOS, Ubuntu 12.04 or later, or otherwise compatible Linux distribution.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM <br>\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": null
                        },
                        {
                        "platform": {
                        "id": 19,
                        "name": "PS Vita",
                        "slug": "ps-vita",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 1452,
                        "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                        },
                        {
                        "platform": {
                        "id": 21,
                        "name": "Android",
                        "slug": "android",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 52249,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                        "minimum": "4.4 and up"
                        },
                        "requirements_ru": null
                        },
                        {
                        "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 5544,
                        "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                        },
                        {
                        "platform": {
                        "id": 7,
                        "name": "Nintendo Switch",
                        "slug": "nintendo-switch",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 5290,
                        "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                        },
                        {
                        "platform": {
                        "id": 3,
                        "name": "iOS",
                        "slug": "ios",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 76986,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                        "minimum": "iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
                        },
                        "requirements_ru": null
                        },
                        {
                        "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 515017,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                        "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP, Vista, 7<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2 GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 512MB<br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> 5 years or younger. Integrated graphics and very low budget cards may not work. Shader Model 3.0 required<br>\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c\t<br>\t\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": {
                        "minimum": "Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель с 256 Мб памяти,150 Мб на винчестере",
                        "recommended": "Core 2 Duo/Atlon X2 2 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,150 Мб на винчестере"
                        }
                        },
                        {
                        "platform": {
                        "id": 5,
                        "name": "macOS",
                        "slug": "macos",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 101815,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                        "minimum": "Please be advised that LIMBO only runs Macs produced in 2009 and onwards.<br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X version Snow Leopard 10.6.3 or later.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Mac<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM (ATI or NVIDIA) <br>\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": null
                        },
                        {
                        "platform": {
                        "id": 14,
                        "name": "Xbox 360",
                        "slug": "xbox360",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 2784,
                        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                        },
                        {
                        "platform": {
                        "id": 16,
                        "name": "PlayStation 3",
                        "slug": "playstation3",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 3182,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                        },
                        {
                        "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 6682,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                        }
                    ],
                    "parent_platforms": [
                    {
                    "platform": {
                    "id": 1,
                    "name": "PC",
                    "slug": "pc"
                    }
                    },
                    {
                    "platform": {
                    "id": 2,
                    "name": "PlayStation",
                    "slug": "playstation"
                    }
                    },
                    {
                    "platform": {
                    "id": 3,
                    "name": "Xbox",
                    "slug": "xbox"
                    }
                    },
                    {
                    "platform": {
                    "id": 4,
                    "name": "iOS",
                    "slug": "ios"
                    }
                    },
                    {
                    "platform": {
                    "id": 8,
                    "name": "Android",
                    "slug": "android"
                    }
                    },
                    {
                    "platform": {
                    "id": 5,
                    "name": "Apple Macintosh",
                    "slug": "mac"
                    }
                    },
                    {
                    "platform": {
                    "id": 6,
                    "name": "Linux",
                    "slug": "linux"
                    }
                    },
                    {
                    "platform": {
                    "id": 7,
                    "name": "Nintendo",
                    "slug": "nintendo"
                    }
                    }
                    ],
                    "genres": [
                    {
                    "id": 3,
                    "name": "Adventure",
                    "slug": "adventure",
                    "games_count": 133399,
                    "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                    "id": 51,
                    "name": "Indie",
                    "slug": "indie",
                    "games_count": 54458,
                    "image_background": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg"
                    },
                    {
                    "id": 7,
                    "name": "Puzzle",
                    "slug": "puzzle",
                    "games_count": 97122,
                    "image_background": "https://media.rawg.io/media/games/cfe/cfe114c081281960bd79ace5209c0a4a.jpg"
                    },
                    {
                    "id": 83,
                    "name": "Platformer",
                    "slug": "platformer",
                    "games_count": 100624,
                    "image_background": "https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg"
                    }
                    ],
                    "stores": [
                    {
                    "id": 1054,
                    "store": {
                    "id": 4,
                    "name": "App Store",
                    "slug": "apple-appstore",
                    "domain": "apps.apple.com",
                    "games_count": 75221,
                    "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    }
                    },
                    {
                    "id": 3679,
                    "store": {
                    "id": 3,
                    "name": "PlayStation Store",
                    "slug": "playstation-store",
                    "domain": "store.playstation.com",
                    "games_count": 7831,
                    "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                    }
                    },
                    {
                    "id": 7493,
                    "store": {
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store",
                    "domain": "microsoft.com",
                    "games_count": 4767,
                    "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                    },
                    {
                    "id": 10311,
                    "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam",
                    "domain": "store.steampowered.com",
                    "games_count": 77885,
                    "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    }
                    },
                    {
                    "id": 26852,
                    "store": {
                    "id": 5,
                    "name": "GOG",
                    "slug": "gog",
                    "domain": "gog.com",
                    "games_count": 5368,
                    "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
                    }
                    },
                    {
                    "id": 33137,
                    "store": {
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360",
                    "domain": "marketplace.xbox.com",
                    "games_count": 1913,
                    "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    }
                    },
                    {
                    "id": 49142,
                    "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo",
                    "domain": "nintendo.com",
                    "games_count": 8884,
                    "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
                    }
                    },
                    {
                    "id": 40035,
                    "store": {
                    "id": 8,
                    "name": "Google Play",
                    "slug": "google-play",
                    "domain": "play.google.com",
                    "games_count": 17053,
                    "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
                    }
                    },
                    {
                    "id": 335541,
                    "store": {
                    "id": 11,
                    "name": "Epic Games",
                    "slug": "epic-games",
                    "domain": "epicgames.com",
                    "games_count": 1259,
                    "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
                    }
                    }
                    ],
                    "clip": null,
                    "tags": [
                    {
                    "id": 31,
                    "name": "Singleplayer",
                    "slug": "singleplayer",
                    "language": "eng",
                    "games_count": 207583,
                    "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    },
                    {
                    "id": 40836,
                    "name": "Full controller support",
                    "slug": "full-controller-support",
                    "language": "eng",
                    "games_count": 14686,
                    "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                    "id": 13,
                    "name": "Atmospheric",
                    "slug": "atmospheric",
                    "language": "eng",
                    "games_count": 29858,
                    "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
                    },
                    {
                    "id": 45,
                    "name": "2D",
                    "slug": "2d",
                    "language": "eng",
                    "games_count": 188707,
                    "image_background": "https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg"
                    },
                    {
                    "id": 16,
                    "name": "Horror",
                    "slug": "horror",
                    "language": "eng",
                    "games_count": 42106,
                    "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                    },
                    {
                    "id": 49,
                    "name": "Difficult",
                    "slug": "difficult",
                    "language": "eng",
                    "games_count": 12536,
                    "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
                    },
                    {
                    "id": 115,
                    "name": "Controller",
                    "slug": "controller",
                    "language": "eng",
                    "games_count": 9676,
                    "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                    },
                    {
                    "id": 41,
                    "name": "Dark",
                    "slug": "dark",
                    "language": "eng",
                    "games_count": 14276,
                    "image_background": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg"
                    },
                    {
                    "id": 336,
                    "name": "controller support",
                    "slug": "controller-support",
                    "language": "eng",
                    "games_count": 293,
                    "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    },
                    {
                    "id": 111,
                    "name": "Short",
                    "slug": "short",
                    "language": "eng",
                    "games_count": 57491,
                    "image_background": "https://media.rawg.io/media/games/b17/b17485d757ca36b5f1ad376b6b096885.jpg"
                    },
                    {
                    "id": 113,
                    "name": "Side Scroller",
                    "slug": "side-scroller",
                    "language": "eng",
                    "games_count": 9546,
                    "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
                    },
                    {
                    "id": 114,
                    "name": "Physics",
                    "slug": "physics",
                    "language": "eng",
                    "games_count": 17914,
                    "image_background": "https://media.rawg.io/media/games/f15/f15e1dbda32b588a981bbc6b222a4b4c.jpg"
                    },
                    {
                    "id": 110,
                    "name": "Cinematic",
                    "slug": "cinematic",
                    "language": "eng",
                    "games_count": 1482,
                    "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
                    },
                    {
                    "id": 46,
                    "name": "Surreal",
                    "slug": "surreal",
                    "language": "eng",
                    "games_count": 4615,
                    "image_background": "https://media.rawg.io/media/screenshots/ed0/ed006da5dfcf9d97d34a7f065769d18b.jpeg"
                    },
                    {
                    "id": 83,
                    "name": "Puzzle-Platformer",
                    "slug": "puzzle-platformer",
                    "language": "eng",
                    "games_count": 9498,
                    "image_background": "https://media.rawg.io/media/screenshots/ddb/ddbcf3f1330e146094b0ce211e33090a.jpg"
                    },
                    {
                    "id": 112,
                    "name": "Minimalist",
                    "slug": "minimalist",
                    "language": "eng",
                    "games_count": 13893,
                    "image_background": "https://media.rawg.io/media/screenshots/a62/a62fb9a34ba7d37b87679387beabc970.jpg"
                    }
                    ],
                    "esrb_rating": {
                    "id": 3,
                    "name": "Teen",
                    "slug": "teen"
                    },
                    "short_screenshots": [
                    {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    },
                    {
                    "id": 30985,
                    "image": "https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg"
                    },
                    {
                    "id": 30986,
                    "image": "https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg"
                    },
                    {
                    "id": 30987,
                    "image": "https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg"
                    },
                    {
                    "id": 30988,
                    "image": "https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg"
                    },
                    {
                    "id": 30989,
                    "image": "https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg"
                    },
                    {
                    "id": 30991,
                    "image": "https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg"
                    }
                    ]
                },
            ]
        }
    },
    components: {
        PillComp,
        PlatformCard,
    }
}
</script>

<template>
    <div class="details">
        <div class="d-flex mb-2 middle">
            <p class="text-h3">{{ data[0].name }}</p>
            <v-spacer/>
            <p class="text-subtitle-1 mr-2">Rating: </p>
            <v-chip class="pill">{{ data[0].rating }}</v-chip>
        </div>
        <div class="d-flex middle">
            <v-col>
                <v-img :src="data[0].background_image" class="img"/>
            </v-col>
            <v-col class="wrap">
                <div class="">
                    <p class="text-overline ml-2">Genre</p>
                    <PillComp
                        v-for="g in data[0].genres"
                        :key="g.id"
                        color="genre"
                        :name="g.name"
                    />
                </div>
                <v-divider class="mt-2 mb-2"/>
                <div class="">
                    <p class="text-overline ml-2">Tags</p>
                    <PillComp
                        v-for="t in data[0].tags"
                        :key="t.id"
                        color="tag"
                        :name="t.name"
                    />
                </div>
                <v-divider class="mt-2 mb-2"/>
                <div class="">
                    <p class="text-overline ml-2">Platforms</p>
                    <PillComp
                        v-for="p in data[0].platforms"
                        :key="p.platform.id"
                        color="platform"
                        :name="p.platform.name"
                    />
                </div>
            </v-col>
        </div>
        <v-divider class="mt-4 mb-4"/>

        <div class="d-flex middle between">
            <div class="d-flex">
                <p class="text-subtitle-1 mr-2">playtime: </p>
                <v-chip class="pill">{{ data[0].playtime }}</v-chip>
            </div>
            <div class="d-flex">
                <p class="text-subtitle-1 mr-2">Reviews: </p>
                <v-chip class="pill">{{ data[0].ratings_count }}</v-chip>
            </div>
            <div class="d-flex">
                <p class="text-subtitle-1 mr-2">Release Date: </p>
                <v-chip class="pill">{{ data[0].released }}</v-chip>
            </div>
            <div class="d-flex">
                <p class="text-subtitle-1 mr-2">ESRB Rating: </p>
                <v-chip class="pill">{{ data[0].esrb_rating.name }}</v-chip>
            </div>
        </div>

        <v-divider class="mt-4 mb-4"/>
        <div>
            <p class="text-subtitle-1 text-uppercase">screenshots:</p>
            <!-- make the image appear big when you click it -->
            <div class="d-flex wrap around">
                <img class="screenshots ma-2" v-for="i in data[0].short_screenshots" :key="i.id" :src="i.image" />
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.details{

    .middle{
        display: flex !important;
        align-items: center;
    }
    .img{
        border-radius: 1rem !important;
    }
    .wrap{
        flex-wrap: wrap !important;
    }
    .around{
        justify-content: space-around;
    }
    .between{
        justify-content: space-between;
    }
    .screenshots{
        width: 400px;
    }
}
</style>